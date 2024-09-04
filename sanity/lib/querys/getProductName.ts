import { client } from "@/sanity/lib/client";

async function getProductName() {
  const query = `
  *[_type == "products"]{
  _id,
  productName,
}
  `;
  const data = await client.fetch(query);
  return data;
}

export default getProductName;
