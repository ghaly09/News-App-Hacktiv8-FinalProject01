import { Layout } from "@/components/templates/Layout/Layout";
import "@/styles/globals.css";
import Head from "next/head";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>News App | Kel.04 Hacktiv8</title>
        <meta
          name="description"
          content="Final Project Hacktiv8 | NextJS"
        ></meta>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
