import { Layout } from "@/components/templates/Layout/Layout";
import "@/styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
