import { Layout } from "@/components/templates/Layout/Layout";
import { Providers } from "@/config/redux/provider";
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
      <Providers>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Providers>
    </>
  );
};

export default App;
