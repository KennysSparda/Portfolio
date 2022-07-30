import Navbar from '../components/Navbar'
import Section from '../components/Section'
import Footer from '../components/Footer'
import Frame from '../components/Frame'

function Projects() {
  return (
    <div>
      <Navbar />
      <Section>
        <h1>Projetos</h1>
        <p>Esse espaço é para os meus projetos.</p>
        <Frame height="400px" width="500px">/images/demo.png</Frame>
      </Section>
      <Footer />
    </div>
  )
}

export default Projects