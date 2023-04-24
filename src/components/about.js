import Button from './buttons/Button'
import Container from './Container'
import Icon from './Icon'

export default function About() {
  return (
    <div>
      <Container id='about' >
        <h1>Sobre mim</h1>
        <div  id="text-about">
          <p>Olá! Sou um estudante de desenvolvimento de software e sou apaixonado por tecnologia!</p>
          <p>Com mais de 2 anos de experiência em desenvolvimento de software, sou especializado em resolver problemas.</p>
          <p>Se você precisa de ajuda para construir seu próximo site ou aplicativo, ficarei feliz em trabalhar com você!</p>
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
