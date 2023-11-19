import Button from '../buttons/Button'
import Container from '../container/Container'
import Icon from '../icon/Icon'

export default function About() {
  return (
    <Container id='about' >
      <h2>Sobre mim</h2>
      <div  id="text-about">
        <p>Olá me chamo Kenny de Souza Vargas estou em transição de carreira, ja trabalhei como fiscal de caixa e nessa profissão descobri que gosto de solucionar problemas.</p>
        <p>Recentemente pouco mais de um ano consegui entrar na área de TI na empresa Atacadão onde estou trabalhando atualmente na função de Auxiliar de Informática, em projetos internos com BASH, JS e PHP</p>
        <p>Meu objetivo é conseguir um cargo como PROGRAMADOR FULLSTACK utilizando 
          <Button type='linkEx' path='https://nodejs.org/en/about'><Icon type="9"></Icon><strong id="technology">NodeJS</strong></Button>
           ou 
          <Button type='linkEx' path='https://rubyonrails.org/'><Icon type="20"></Icon><strong id="technology">RubyOnRails</strong></Button></p>
      </div>
      <div id="linkWhatsapp">
        <p>Precisa de um programador?</p>
        <Button type='linkEx' id='linkToWhatsapp' path='https://whatsa.me/5541995101213'><Icon type="3"></Icon><strong>Vamos trabalhar juntos -&gt;</strong></Button>
      </div>
      <hr/>      
      <h3>Tecnologias</h3>
      <div id="boxTechnologies">
        <div id='boxTechnologiesLeft'>
            <Button id="btnTech" type='linkEx' path='https://www.linux.org/'><Icon type="14"></Icon><strong id="technology">Linux</strong></Button>
            <Button id="btnTech" type='linkEx' path='https://git-scm.com/'><Icon type="6"></Icon><strong id="technology">GIT</strong></Button>
            <Button id="btnTech" type='linkEx' path='https://developer.mozilla.org/en-US/docs/Web/HTML'><Icon type="12"></Icon><strong id="technology">HTML 5</strong></Button>
            <Button id="btnTech" type='linkEx' path='https://developer.mozilla.org/en-US/docs/Web/CSS'><Icon type="11"></Icon><strong id="technology">CSS 3</strong></Button>
            <Button id="btnTech" type='linkEx' path='https://developer.mozilla.org/en-US/docs/Web/JavaScript'><Icon type="10"></Icon><strong id="technology">JS</strong></Button>
            <Button id="btnTech" type='linkEx' path='https://www.ruby-lang.org/pt/'><Icon type="19"></Icon><strong id="technology">Ruby</strong></Button>
            <Button id="btnTech" type='linkEx' path='https://www.python.org/'><Icon type="15"></Icon><strong id="technology">Python</strong></Button>
        </div>
        <div id='boxTechnologiesMiddle'>
            <Button id="btnTech" type='linkEx' path='https://nodejs.org/en/about'><Icon type="9"></Icon><strong id="technology">NodeJS</strong></Button>
            <Button id="btnTech" type='linkEx' path='https://rubyonrails.org/'><Icon type="20"></Icon><strong id="technology">Rails</strong></Button>
            <Button id="btnTech" type='linkEx' path='https://www.mysql.com/'><Icon type="17"></Icon><strong id="technology">MySQL</strong></Button>
            <Button id="btnTech" type='linkEx' path='https://react.dev'><Icon type="8"></Icon><strong id="technology">ReactJS</strong></Button>           
            <Button id="btnTech" type='linkEx' path='https://nextjs.org'><Icon type="7"></Icon><strong id="technology">NextJS</strong></Button>
            <Button id="btnTech" type='linkEx' path='https://getbootstrap.com/'><Icon type="18"></Icon><strong id="technology">Bootstrap</strong></Button>
            <Button id="btnTech" type='linkEx' path='https://openai.com/chatgpt'><Icon type="21"></Icon><strong id="technology">ChatGPT</strong></Button>
        </div>
        <hr />
        <div id="boxTechnologiesRight">
          <p>Acesse a pagina deste projeto no Github para saber mais sobre os codigos e sobre a estrutura do projeto :D</p>
          <Button 
              type='linkEx'
              path='https://github.com/KennysSparda/Portfolio'>
            <strong>Portfolio</strong>
          </Button>
        </div>
      </div>
      <br/>
    </Container>
  )
}
