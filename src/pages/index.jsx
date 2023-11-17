import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import ArcoIrisComponente from '../components/rainbowComponent'
import Home from '../components/home/Home'
import Projects from '../components/projects/Projects'
import About from '../components/about/About'

export default function App() {

  return (
    <div>
      <Navbar />
      <Home />
      <ArcoIrisComponente />
      <Projects />
      <About />
      <Footer />
    </div>
  )
}
