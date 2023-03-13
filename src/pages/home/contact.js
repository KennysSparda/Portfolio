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
      <p>Entre em contato comigo </p>
      <Button 
        type='linkEx'      
        id="btnStyled"
        path={links[0]}>
        <Icon type={3}></Icon>
      </Button>
      <Button 
        type='linkEx'
        id="btnStyled"
        path={links[1]}>
        <Icon type={4}></Icon>
      </Button>
      <p><strong>kennykysv@gmail.com</strong></p>
      <p><strong>+55 41 99510-1213</strong></p>

    </Container>
  )
}
