import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import Home from './home'
import Contact from './contact'
import Projects from './projects'
import Skills from './skills'
import About from './about'

function App() {
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
