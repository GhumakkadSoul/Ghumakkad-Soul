import { client } from "@/sanity/lib/client";

async function getProducts() {
  const query = `
*[_type == "products"]{
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
}
  `;
  const data = await client.fetch(query);
  return data;
}

export default getProducts;
