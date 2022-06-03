import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Charis+SIL:wght@200;400;700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body className="dark:bg-clr-dark-theme">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
