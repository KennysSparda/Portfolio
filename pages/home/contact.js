import Section from '../../components/Section'
import Box from '../../components/Box'

function Contact() {
  var links = [ "https://contate.me/hi-swygax",
                "https://www.linkedin.com/in/kenny-de-souza-vargas-8a521422a",
                "swygax@gmail.com"]
  var ico =   [ '/images/whatsapp.png',
                '/images/linkedin.png']

  return (
      <Section id='contact'>
        <h1>Contato</h1>
        <p>Me mande uma mensagem no </p>
        <Box  type='external'
              style='styled'
              link={links[0]}>
                <img id='ico' src={ico[0]}></img> Whatsapp
        </Box>
        <p>e dê uma olhada no meu</p>
                <Box  type='external'
              style='styled'
              link={links[1]}>
                <img id='ico' src={ico[1]}></img> Linkedin
        </Box>
        <p>Você pode me conta e-mail também para: </p>
        <Box  type='external'
                style='unstyled'
                link={links[3]}><strong>swygax@gmail.com</strong>
        </Box>
      </Section>
  )
}

export default Contact
