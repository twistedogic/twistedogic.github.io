import "../styles/globals.css";
import { FC } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/Layout";

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>twistedogic</title>
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
);

export default App;
