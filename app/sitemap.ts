import { TrekCard } from "@/lib/types";
import { client } from "@/sanity/lib/client";
import { MetadataRoute } from "next";
import { BlogsProps } from "./(client)/blogs/page";

interface ProductProps {
  _id: string;
  price: number;
  slug: {
    current: string;
  };
  description: string;
}
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  async function getTrek() {
    const query = `
        *[_type == "trekCard"]{
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
    const data = await client.fetch(query);
    return data;
  }

  async function getblogs() {
    const query = `*[_type == "blog"]{
          _id,
          title,
          slug,
          author,
          "authorimage": authorimage.asset->url,
          "blogbgimage": blogbgimage.asset->url,
          time,
          excerpt,
          body,
    }`;

    const data = await client.fetch(query);
    return data;
  }

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

  const treks: TrekCard[] = await getTrek();
  const blogs: BlogsProps[] = await getblogs();
  const products: ProductProps[] = await getProducts();

  const getTrekUrl = treks.map((trek) => ({
    url: `https://www.ghumakkadsoul.in/treks/${trek.slug.current}`,
    lastModified: new Date(),
  }));

  const getProductsUrl = products.map((product) => ({
    url: `https://www.ghumakkadsoul.in/products/${product.slug.current}`,
    lastModified: new Date(),
  }));

  const getBlogUrl = blogs.map((blog) => ({
    url: `https://www.ghumakkadsoul.in/blogs/${blog.slug.current}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: "https://www.ghumakkadsoul.in/",
      lastModified: new Date(),
    },
    {
      url: "https://www.ghumakkadsoul.in/treks",
      lastModified: new Date(),
    },
    {
      url: "https://www.ghumakkadsoul.in/blogs",
      lastModified: new Date(),
    },
    {
      url: "https://www.ghumakkadsoul.in/contact-us",
      lastModified: new Date(),
    },
    {
      url: "https://www.ghumakkadsoul.in/policy/cancellation-policy",
      lastModified: new Date(),
    },
    {
      url: "https://www.ghumakkadsoul.in/policy/treks-terms-and-conditions",
      lastModified: new Date(),
    },
    {
      url: "https://www.ghumakkadsoul.in/treks/all-trek-uttarakhand",
      lastModified: new Date(),
    },
    {
      url: "https://www.ghumakkadsoul.in/treks/view-all-popular-treks",
      lastModified: new Date(),
    },
    ...getTrekUrl,
    ...getBlogUrl,
    ...getProductsUrl,
  ];
}
