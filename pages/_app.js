import "@/styles/globals.css";
import Head from "next/head";

import { SocketProvider } from "@/context/socket";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>SignWave - Professional Video Conferencing</title>
      </Head>
      <SocketProvider>
        <Component {...pageProps} />
      </SocketProvider>
    </>
  );
}
