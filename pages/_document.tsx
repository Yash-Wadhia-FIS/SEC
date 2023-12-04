// import { Html, Head, Main, NextScript } from 'next/document';
// import Script from 'next/script';


// export default function Document() {

//   return (
//     <Html lang="en">
//       <Head>
//         <title>Saudi Electricity</title>
//       </Head>
//       <body suppressHydrationWarning={true}>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   );
// }

import { Html, Head, Main, NextScript } from 'next/document';


const MyDocument = () => (
  <Html lang="en">
    <Head>
      <title>Saudi Electricity</title>
      {/* Other meta tags, stylesheets, etc. */}
    </Head>
    <body suppressHydrationWarning={true}>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default MyDocument;


