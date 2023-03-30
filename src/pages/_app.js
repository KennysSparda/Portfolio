// pages/_app.js
import React from 'react'
import Head from 'next/head'

import '../styles/projects.css'
import '../styles/globals.css'
import '../styles/button.css'
import '../styles/container.css'
import '../styles/navbar.css'
import '../styles/footer.css'
import '../styles/image.css'
import '../styles/copyright.css'
import '../styles/body.css'
import '../styles/banner.css'
import '../styles/home.css'
import '../styles/about.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Kenny Portfolio</title>
        <link rel="shortcut icon" href="ico\logo.png"></link>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp