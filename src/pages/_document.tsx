import { Html, Head, Main, NextScript } from 'next/document'

const title = 'Parking Coloc';
const description = 'When can I park my car ?'

export default function Document() {
  return (
    <Html>
      <Head>
      <meta name="application-name" content={title} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={title} />
      <meta name="description" content={description} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-TileColor" content="#2B5797" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="theme-color" content="#000000" />

      <link rel="apple-touch-icon" href="/icons/favicon-310x310.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/icons/favicon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/favicon-180x180.png" />

      <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" />
      <link rel="shortcut icon" href="/favicon.ico" />

      <meta name="twitter:card" content="My parking" />
      <meta name="twitter:url" content="https://parking.thimar.be" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://parking.thimar.be/icons/favicon-192x192.png" />
      <meta name="twitter:creator" content="@Thibaald" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta property="og:url" content="https://parking.thimar.be" />
      <meta property="og:image" content="https://parking.thimar.be/icons/favicon-192x192.png" />

      </Head>
      <body className="bg-blue-200">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}