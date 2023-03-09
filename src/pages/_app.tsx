import type * as app from "next/app";
import GlobalStyle from "../styles/globalStyles";

export default function App({ Component, pageProps }: app.AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
