import Head from "next/head";
import { Fragment } from "react";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>I'm Poster | Home</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );

  {
    /* <Component {...pageProps} /> */
  }
}

export default MyApp;
