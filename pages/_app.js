import { Card } from "@/components/templates/Card";
import { Navbar } from "@/components/templates/Navbar/Navbar";
import "@/styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Navbar />
      <Card />
      <Component {...pageProps} />
    </>
  );
};

export default App;
