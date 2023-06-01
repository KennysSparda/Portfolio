import Button from './buttons/Button'
import Container from './Container'
import Icon from './Icon'

export default function About() {
  let linkFaculdade = "https://descomplica.com.br/faculdade/?utm_source=google&utm_medium=cpc&utm_campaign=psq-institucional-faculdade-ongoing&utm_term=faculdade%20descomplica&utm_content=institucional&gad=1&gclid=CjwKCAjwvdajBhBEEiwAeMh1U3qQrvzX7IB7fIY_cWGFUjXbv1jtqxnd0stXSZS3MvXRdycWG5uxwxoCYRQQAvD_BwE"
  return (
    <div>
      <Container id='about' >
        <h1>Sobre mim</h1>
        <div  id="text-about">
          <p>Sou um entusiasta da programação em busca de oportunidades como desenvolvedor.</p>
          <p>Meu objetivo é me tornar um desenvolvedor fullstack versátil, capaz de trabalhar em diferentes linguagens e plataformas.</p>
          <p>Precisa de um programador?</p>
          <Button type='linkEx' id='linkToWhatsapp' path='https://whatsa.me/5541995101213'><strong>Vamos trabalhar juntos -&gt;</strong></Button>
        </div>
        <br/>
      </Container>
    </div>
  )
}
