import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import Home from './home/home'
import Contact from './home/contact'
import Projects from './home/projects'
import Skills from './home/skills'
import About from './home/about'

function App() {
  <Helmet title='Kenny Portfolio' />
  return (
    <div>
      <Navbar />
      <Home />
      <Contact />
      <Projects />
      <Skills />
      <About />
      <Footer />
    </div>
  )
}

export default App
