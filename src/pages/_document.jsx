import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head />
      <body style={{
        backgroundImage: 'url("/img/background.gif")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        margin: 0,
      }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
