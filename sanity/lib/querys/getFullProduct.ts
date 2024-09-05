import { client } from "@/sanity/lib/client";

async function getFullProduct(slug: string) {
  const query = `*[_type == "products" && slug.current == $slug][0]{
  productName,
  price,
  slug,
  description,
  images[]{
    asset->{
      _id,
      url
    }
  }
  }`;

  const params = { slug };
  const data = await client.fetch(query, params);
  return data;
}

export default getFullProduct;
