import Button from './buttons/Button'
import Container from './Container'
import Icon from './Icon'

export default function About() {
  return (
    <div>
      <Container id='about' >
        <h1>Sobre mim</h1>
        <p>Sou um desenvolvedor front-end apaixonado por criar experiências excepcionais para usuários finais.</p>
        <p>Com mais de 2 anos de experiência em desenvolvimento web, tenho habilidades sólidas em Next.js, React e .NET.</p>
        <p>Sou especializado em construir interfaces de usuário interativas e responsivas, utilizando as melhores práticas de desenvolvimento e as últimas tecnologias para fornecer soluções de alta qualidade. </p>
        <p>Além disso, estou constantemente aprimorando minhas habilidades técnicas e buscando aprender novas tecnologias para ficar atualizado no mercado em constante mudança.</p>
        <p>Meu objetivo é sempre superar as expectativas dos clientes e entregar projetos de sucesso.</p>
        <p>Se você precisa de um desenvolvedor front-end para seu próximo projeto, sinta-se à vontade para entrar em contato comigo.</p>
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
