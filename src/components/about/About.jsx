import Button from '../buttons/Button'
import Container from '../container/Container'
import Icon from '../icon/Icon'

export default function About() {
  return (
    <Container id='about' >
      <h2>Sobre mim</h2>
      <div  id="text-about">
        <p>Olá me chamo Kenny de Souza Vargas estou em transição de carreira, ja trabalhei como fiscal de caixa e nessa profissão descobri que gosto de solucionar problemas.</p>
        <p>Sou um jovem muito curioso e determinado.</p>
        <p>Meu objetivo é conseguir um cargo como PROGRAMADOR FULLSTACK utilizando Javascript, C# ou Java</p>
      </div>
      <div id="linkWhatsapp">
        <p>Precisa de um programador?</p>
        <Button type='linkEx' id='linkToWhatsapp' path='https://whatsa.me/5541995101213'><Icon type="3"></Icon><strong>Vamos trabalhar juntos -&gt;</strong></Button>
      </div>
      <hr/>      
      <h3>Tecnologias utilizadas neste projeto</h3>
      <div id="boxTechnologies">
        <div id='boxTechnologiesLeft'>
            <Button type='linkEx' path='https://nextjs.org'><Icon type="7"></Icon><strong id="technology">NextJS</strong></Button>
            <br />
            <Button type='linkEx' path='https://react.dev'><Icon type="8"></Icon><strong id="technology">ReactJS</strong></Button>
            <br />
            <Button type='linkEx' path='https://nodejs.org/en/about'><Icon type="9"></Icon><strong id="technology">NodeJS</strong></Button>
            <br />
            <Button type='linkEx' path='https://developer.mozilla.org/en-US/docs/Web/JavaScript'><Icon type="10"></Icon><strong id="technology">Javascript</strong></Button>
            <br />
            <Button type='linkEx' path='https://developer.mozilla.org/en-US/docs/Web/CSS'><Icon type="11"></Icon><strong id="technology">CSS 3</strong></Button>
            <br />
            <Button type='linkEx' path='https://developer.mozilla.org/en-US/docs/Web/HTML'><Icon type="12"></Icon><strong id="technology">HTML 5</strong></Button>
            <br />
        </div>
        <div id="boxTechnologiesRight">
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
