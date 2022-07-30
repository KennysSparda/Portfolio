import Navbar from '../components/Navbar'
import Section from '../components/Section'
import Box from '../components/Box'
import Footer from '../components/Footer'

function Contact() {
  return (
    <div>
      <Navbar />
      <Section>
        <h1>Contato</h1>
          <p>Me mande um "oi" no </p>
          <Box style='styled' link="https://contate.me/Swygax"><img id='ico' src='/images/whatsapp.png'></img> Whatsapp</Box>
          <br/>
          <p>e também acesse meu perfil no </p>
          <Box style='styled' link="https://github.com/KennysSparda" ><img id='ico' src='/images/github.png'></img> Github</Box>
      </Section>
      <br/>
      <Footer />
    </div>
  )
}

export default Contact
