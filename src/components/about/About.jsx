import Button from '../buttons/Button'
import Container from '../container/Container'
import Icon from '../icon/Icon'

export default function About() {
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
      <div id="boxAbout">
        <div id='boxAboutLeft'>
            <Icon type="7"></Icon><strong id="technology">NextJS</strong>
            <br />
            <Icon type="8"></Icon><strong id="technology">ReactJS</strong>
            <br />
            <Icon type="9"></Icon><strong id="technology">NodeJS</strong>
            <br />
            <Icon type="10"></Icon><strong id="technology">Javascript</strong>
            <br />
            <Icon type="11"></Icon><strong id="technology">CSS 3</strong>
            <br />
            <Icon type="12"></Icon><strong id="technology">HTML 5</strong>
            <br />
        </div>
        <div id="boxAboutRight">
          <p>Acesse a pagina deste projeto no
            <Button 
              type='linkEx'
              path='https://github.com/KennysSparda/Portfolio'>
                <strong>Github</strong>
            </Button>
            para saber mais sobre os codigos e sobre a estrutura do projeto :D
          </p>
        </div>
      </div>
      <br/>
    </Container>
  )
}
