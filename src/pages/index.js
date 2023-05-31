import Navbar from '../components/navbar/Navbar'
import Footer from '../components/Footer'

import Home from '../components/home'
import Projects from '../components/projects/projects'
import About from '../components/about'

export default function App() {

  return (
    <div>
      <Navbar />
      <Home />
      <Projects />
      <About />
      <Footer />
    </div>
  )
}
