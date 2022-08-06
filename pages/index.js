import Head from 'next/head'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/Footer'

import Home from './home/home'
import Contact from './home/contact'
import Projects from './home/projects'
import Skills from './home/skills'
import About from './home/about'

export default function App() {

  return (
    <div>
      <Head>
        <title>Swygax Portfolio</title>
      </Head>
      <Navbar />
      <Home />
      <Projects />
      <Skills />
      <Contact />
      <About />
      <Footer />
    </div>
  )
}
