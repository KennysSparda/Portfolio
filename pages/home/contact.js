import Container from '../../components/Container'
import Button from '../../components/Button'
import Icon from '../../components/Icon'

export default function Contact() {
  var links = ["https://contate.me/hi-swygax",
    "https://www.linkedin.com/in/kenny-de-souza-vargas-8a521422a",
    "swygax@gmail.com"]

  return (
    <Container id='contact'>
      <h2>Contato</h2>
      <p>Me mande uma mensagem no </p>
      <Button 
        type='linkEx'      
        id="btnStyled"
        path={links[0]}>
        <Icon type={3}></Icon>Whatsapp
      </Button>
      <br />
      <p>ou</p>
      <Button 
        type='linkEx'
        id="btnStyled"
        path={links[1]}>
        <Icon type={4}></Icon>Linkedin
      </Button>
      <p>Você pode mandar um e-mail para: </p>
      <p><strong>swygax@gmail.com</strong></p>
      <p>Ou entrar em contato pelo telefone: </p>
      <p><strong>55 41 99510-1213</strong></p>

    </Container>
  )
}
