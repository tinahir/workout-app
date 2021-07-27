/** @jsxImportSource @emotion/react */
import Document, { Html, Head, Main, NextScript } from "next/document";
import tw from "twin.macro";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body css={tw`m-0`}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
