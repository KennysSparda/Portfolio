import Section from '../../components/Section'
import Box from '../../components/Box'

function Contact() {
  var links = [ "https://contate.me/Swygax",
                "https://www.linkedin.com/in/kenny-de-souza-vargas-8a521422a"]
  var ico =   [ '/images/whatsapp.png',
                '/images/linkedin.png']

  return (
      <Section id='contact'>
        <h1>Contato</h1>
        <p><strong>Email:</strong> swygax@gmail.com</p>
        <p>Me mande um "oi" no </p>
        <Box  type='external'
              style='styled'
              link={links[0]}>
                <img id='ico' src={ico[0]}></img> Whatsapp
        </Box>
        <br/>
        <br/>
        <Box  type='external'
              style='styled'
              link={links[1]}>
                <img id='ico' src={ico[1]}></img> Linkedin
        </Box>
      </Section>
  )
}

export default Contact
