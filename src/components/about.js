import Button from './buttons/Button'
import Container from './Container'
import Icon from './Icon'

export default function About() {
  return (
    <div>
      <Container id='about' >
        <h1>Sobre mim</h1>
        <div  id="text-about">
          <p>Olá! Sou um desenvolvedor front-end apaixonado por construir sites e aplicativos incríveis para os usuários. </p>
          <p>Com mais de 2 anos de experiência em desenvolvimento web, sou especializado em tecnologias como Next.js, React e .NET.</p>
          <p>Eu adoro criar interfaces de usuário que são bonitas e fáceis de usar em qualquer dispositivo - desde smartphones até desktops.</p>
          <p>Além disso, estou constantemente aprimorando minhas habilidades técnicas e buscando aprender novas tecnologias para ficar atualizado no mercado em constante mudança.</p>
          <p>Meu objetivo é sempre superar as expectativas dos clientes e entregar projetos de sucesso.</p>
          <p>Se você precisa de ajuda para construir seu próximo site ou aplicativo, ficarei feliz em trabalhar com você! Vamos criar algo incrível juntos.</p>
        </div>
        <br/>
        <h2>Tecnologias utilizadas neste projeto</h2>
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
