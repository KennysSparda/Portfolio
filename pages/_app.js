// pages/_app.js
import React from 'react'
import Head from 'next/head'

import '../styles/globals.css'
import '../styles/button.css'
import '../styles/container.css'
import '../styles/navbar.css'
import '../styles/footer.css'
import '../styles/image.css'
import '../styles/copyright.css'
import '../styles/body.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Kenny Portfolio</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp