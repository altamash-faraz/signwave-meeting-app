import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="SignWave - Professional video conferencing platform for seamless meetings and collaboration" />
        <meta name="keywords" content="video conferencing, online meetings, SignWave, video calls, collaboration, webrtc" />
        <meta name="author" content="SignWave Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="SignWave Meeting App" />
        <meta property="og:description" content="Connect, collaborate, and communicate with SignWave's professional video conferencing platform" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SignWave Meeting App" />
        <meta name="twitter:description" content="Professional video conferencing made simple" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
