// pages/_app.js
import React from 'react'
import Head from 'next/head'

import '../components/projects/projects.css'
import '../styles/globals.css'
import '../components/buttons/button.css'
import '../components/container/container.css'
import '../components/navbar/navbar.css'
import '../components/footer/footer.css'
import '../styles/image.css'
import '../styles/copyright.css'
import '../styles/body.css'
import '../components/home/home.css'
import '../components/about/about.css'
import '../components/perfil/perfil.css'

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
