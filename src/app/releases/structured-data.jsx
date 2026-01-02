export default function ReleasesStructuredData({ releases = [] }) {
  // Base URL canónica
  const baseUrl = "https://realmotioncartel.com";
  const pageUrl = `${baseUrl}/releases`;

  // Normaliza releases a JSON-LD
  const itemListElements = releases
    .filter((r) => r?.title && r?.artist) // mínimo viable
    .map((r, idx) => {
      const isEP = String(r.type).toLowerCase() === "ep";
      const isSingle = String(r.type).toLowerCase() === "single";

      // URL "virtual" a falta de página individual por release
      // (cuando tengas /releases/[id], lo actualizas aquí)
      const releaseUrl = `${pageUrl}#${encodeURIComponent(r.id || `${idx}`)}`;

      // Fecha: si viene "2026" o formato raro, no la metemos para evitar schema inválido
      const isoDate =
        typeof r.date === "string" && /^\d{4}-\d{2}-\d{2}$/.test(r.date)
          ? r.date
          : undefined;

      // Imagen: solo si existe
      const imageUrl =
        r.cover && typeof r.cover === "string" && r.cover.trim().length > 0
          ? `${baseUrl}${r.cover.startsWith("/") ? r.cover : `/${r.cover}`}`
          : undefined;

      // Artistas (separados por coma)
      const artists = String(r.artist)
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);

      // Schema por tipo
      const entity = isEP
        ? {
            "@type": "MusicAlbum",
            name: r.title,
            byArtist: artists.map((name) => ({ "@type": "MusicGroup", name })),
            albumReleaseType: "EP",
            url: releaseUrl,
            ...(isoDate ? { datePublished: isoDate } : {}),
            ...(imageUrl ? { image: imageUrl } : {}),
            ...(r.spotify ? { sameAs: [r.spotify] } : {}),
          }
        : isSingle
        ? {
            "@type": "MusicRecording",
            name: r.title,
            byArtist: artists.map((name) => ({ "@type": "MusicGroup", name })),
            url: releaseUrl,
            ...(isoDate ? { datePublished: isoDate } : {}),
            ...(imageUrl ? { image: imageUrl } : {}),
            ...(r.spotify || r.youtube
              ? { sameAs: [r.spotify, r.youtube].filter(Boolean) }
              : {}),
          }
        : {
            // fallback si en el futuro metes otro tipo
            "@type": "CreativeWork",
            name: r.title,
            url: releaseUrl,
          };

      return {
        "@type": "ListItem",
        position: idx + 1,
        url: releaseUrl,
        item: entity,
      };
    });

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Catálogo oficial de lanzamientos | Real Motion Cartel",
        description:
          "Catálogo oficial de lanzamientos publicados bajo Real Motion Cartel. Singles, EPs y colaboraciones.",
        isPartOf: {
          "@type": "WebSite",
          "@id": `${baseUrl}#website`,
          url: baseUrl,
          name: "Real Motion Cartel",
        },
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}#itemlist`,
        name: "Releases — Real Motion Cartel",
        itemListOrder: "https://schema.org/ItemListOrderDescending",
        numberOfItems: itemListElements.length,
        itemListElement: itemListElements,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
