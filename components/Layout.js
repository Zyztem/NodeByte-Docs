// components/Layout.js
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>HalloweenDocs</title>
        <meta name="description" content="A Halloween-themed documentation site." />
        <meta property="og:title" content="HalloweenDocs" />
        <meta property="og:description" content="Explore HalloweenDocs for spooky documentation and more!" />
        <meta property="og:image" content="https://yourwebsite.com/your-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
        {/* Add other meta tags or link tags as needed */}
      </Head>
      <main>{children}</main>
    </>
  );
}
