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
          <p>Sou um entusiasta da programação em busca de oportunidades como desenvolvedor. Com três anos de dedicação autodidata e atualmente cursando Ciências da Computação. </p>
          <p>Meu objetivo é me tornar um desenvolvedor fullstack versátil, capaz de trabalhar em diferentes linguagens e plataformas. Acredito que a chave para o sucesso nessa área está em minha abordagem centrada na resolução de problemas. Sempre me sinto motivado ao enfrentar desafios e encontrar soluções criativas e eficientes.</p>
          <p>Estou entusiasmado em embarcar em projetos desafiadores e revolucionários. Vamos unir forças para fazer a diferença e impactar o mundo. Ficarei feliz em conversar e explorar como podemos trabalhar juntos para impulsionar mudanças significativas. Entre em contato e vamos começar essa jornada emocionante!</p>
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
    </div>
  )
}
