import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Rainbow from '../components/Rainbow'
import Home from '../components/home/Home'
import BestProjects from '../components/projects/BestProjects'
import About from '../components/about/About'

export default function App() {

  return (
    <div>
      <Navbar />
      <Home />
      <Rainbow />
      <BestProjects />
      <About />
      <Footer />
    </div>
  )
}
