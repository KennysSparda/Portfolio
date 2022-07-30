import Navbar from '../components/Navbar'
import Section from '../components/Section'
import Box from '../components/Box'
import Footer from '../components/Footer'

function Contact() {
  var links = ["https://contate.me/Swygax", "https://github.com/KennysSparda", "https://www.linkedin.com/in/kenny-de-souza-vargas-8a521422a"]
  var ico = ['/images/whatsapp.png', '/images/github.png', '/images/linkedin.png']

  return (
    <div>
      <Navbar />
      <Section>
        <h1>Contato</h1>
          <p><strong>Email:</strong> swygax@gmail.com</p>
          <p>Me mande um "oi" no </p>
          <Box style='styled' link={links[0]}><img id='ico' src={ico[0]}></img> Whatsapp</Box>
          <br/>
          <p>perfis nas redes sociais</p>
          <Box style='styled' link={links[2]}><img id='ico' src={ico[2]}></img> Linkedin</Box>
           
          <Box style='styled' link={links[1]}><img id='ico' src={ico[1]}></img> Github</Box>
      </Section>
      <br/>
      <Footer />
    </div>
  )
}

export default Contact
