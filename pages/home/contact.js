import Section from '../../components/Section'
import Box from '../../components/Box'

function Contact() {
  var links = ["https://contate.me/Swygax"]
  var ico = ['/images/whatsapp.png']

  return (
      <Section id='contact'>
        <h1>Contato</h1>
        <p><strong>Email:</strong> swygax@gmail.com</p>
        <p>Me mande um "oi" no </p>
        <Box style='styled' link={links[0]}><img id='ico' src={ico[0]}></img> Whatsapp</Box>
      </Section>
  )
}

export default Contact
