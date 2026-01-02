export default function robots() {
  const baseUrl = "https://realmotioncartel.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/reservar"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
