<<<<<<< HEAD
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/studio/",
    },
    sitemap: "https://ghumakkadsoul.in/sitemap.xml",
  };
}
=======
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/studio/",
    },
    sitemap: "https://ghumakkadsoul.in/sitemap.xml",
  };
}
>>>>>>> b797115820d624260aa03a194286938b1aa4b457
