import React from 'react';

const MetaTags = () => {
  return (
    <>
      {/* HTML Meta Tags */}
      <title>mPortfolio</title>
      <meta name="description" content="Explore Mardelito's portfolio showcasing innovative frontend development projects, creative designs, and a passion for crafting user-friendly web applications." />

      {/* Facebook Meta Tags */}
      <meta property="og:url" content="https://mgo08.github.io/M-Portfolio/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="mPortfolio" />
      <meta property="og:description" content="Explore Mardelito's portfolio showcasing innovative frontend development projects, creative designs, and a passion for crafting user-friendly web applications." />
      <meta property="og:image" content="https://opengraph.b-cdn.net/production/images/f0c948aa-606b-45ea-997a-6191281b09c6.png?token=06izoTRi6r4NVyYP1jfsXep9B4F1KV7sj3TuX9lQMas&height=522&width=1200&expires=33275086403" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="mgo08.github.io" />
      <meta property="twitter:url" content="https://mgo08.github.io/M-Portfolio/" />
      <meta name="twitter:title" content="mPortfolio" />
      <meta name="twitter:description" content="Explore Mardelito's portfolio showcasing innovative frontend development projects, creative designs, and a passion for crafting user-friendly web applications." />
      <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/f0c948aa-606b-45ea-997a-6191281b09c6.png?token=06izoTRi6r4NVyYP1jfsXep9B4F1KV7sj3TuX9lQMas&height=522&width=1200&expires=33275086403" />
    </>
  );
};

export default MetaTags;