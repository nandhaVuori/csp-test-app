import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
      <Html lang="en">
          <Head>
              <meta name="theme-color" content="#006DFF" />
          </Head>
          <body>
              <Main /> 
              <NextScript />
              <Script
                  id="inline-script-example"
                  dangerouslySetInnerHTML={{
                      __html: `console.log("This is an inline script running under CSP");`,
                  }}
              />
          </body>
      </Html>
  );
}
