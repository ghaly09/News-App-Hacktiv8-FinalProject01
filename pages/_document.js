import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </head>
      <body>
        <Main />
        <NextScript />
        <script
          src="https://kit.fontawesome.com/0ae515efac.js"
          crossorigin="anonymous"
        ></script>
      </body>
    </Html>
  );
}
