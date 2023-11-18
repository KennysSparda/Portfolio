import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Rainbow from '../components/Rainbow'
import Home from '../components/home/Home'
import Projects from '../components/projects/Projects'
import About from '../components/about/About'

export default function App() {

  return (
    <div>
      <Navbar />
      <Home />
      <Rainbow />
      <Projects />
      <About />
      <Footer />
    </div>
  )
}
