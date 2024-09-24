import { client } from "@/sanity/lib/client";

const reamedTreks = [
  "hampta-pass-trek",
  "kedarkantha-trek",
  "har-ki-doon-trek",
  "dayara-bugyal-trek",
  "chandrashilla-trek",
  "bali-pass-trek",
  "goecha-la-trek",
  "rupin-pass-trek",
];
async function getTrekCardData() {
  const query = `
  *[_type == "trekCard" && slug.current in $recommendedTreks]  {
    _id,
    slug,
    trekName,
    "backgroundImageUrl": backgroundImage.asset->url,
    duration,
    location,
    distance,
    bestTime,
    rating
  }
  `;

  const data = await client.fetch(query, { recommendedTreks: reamedTreks });
  return data;
}

export default getTrekCardData;
