import Button from '../buttons/Button'
import Container from '../container/Container'
import Icon from '../icon/Icon'

export default function About() {
  let linkFaculdade = "https://descomplica.com.br/faculdade/?utm_source=google&utm_medium=cpc&utm_campaign=psq-institucional-faculdade-ongoing&utm_term=faculdade%20descomplica&utm_content=institucional&gad=1&gclid=CjwKCAjwvdajBhBEEiwAeMh1U3qQrvzX7IB7fIY_cWGFUjXbv1jtqxnd0stXSZS3MvXRdycWG5uxwxoCYRQQAvD_BwE"
  return (
    <Container id='about' >
      <h1>Sobre mim</h1>
      <div  id="text-about">
        <p>Sou um entusiasta da programação em busca de oportunidades como desenvolvedor.</p>
        <p>Meu objetivo é me tornar um desenvolvedor fullstack versátil, capaz de trabalhar em diferentes linguagens e plataformas.</p>
        <p>Precisa de um programador?</p>
        <Button type='linkEx' id='linkToWhatsapp' path='https://whatsa.me/5541995101213'><strong>Vamos trabalhar juntos -&gt;</strong></Button>
      </div>
      <br/>
      <h2>Tecnologias utilizadas neste projeto</h2>
      <div id='tecnologiasUtilizadas'>
        <Button >
          <Icon type="7"></Icon><strong>NextJS</strong>
        </Button>
        <Button >
          <Icon type="8"></Icon><strong>ReactJS</strong>
        </Button>
        <Button >
          <Icon type="9"></Icon><strong>NodeJS</strong>
        </Button>
        <Button >
          <Icon type="10"></Icon><strong>Javascript</strong>
        </Button>
        <Button >
          <Icon type="11"></Icon><strong>CSS 3</strong>
        </Button>
        <Button >
          <Icon type="12"></Icon><strong>HTML 5</strong>
        </Button>
      </div>
      <p>Acesse a pagina deste projeto no
      <br></br>
      <br></br>
      <Button 
        type='linkEx'
        id="btnStyled"
        path='https://github.com/KennysSparda/Portfolio'>
          <Icon type={0}></Icon><strong>Github</strong>
      </Button>
      </p>
    </Container>
  )
}
