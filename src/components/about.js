import Button from './buttons/Button'
import Container from './Container'
import Icon from './Icon'

export default function About() {
  return (
    <div>
      <Container id='about' >
        <h1>Sobre mim</h1>
        <p>Meu objetivo a curto prazo é concluir a faculdade de ciências da computação e desenvolver minhas habilidades interpessoais no meu emprego atual, onde atuo como Auxiliar de Informática na empresa Atacadão.</p>
        <p>E meu objetivo a longo prazo é desenvolver cada vez mais a minha resolução de problemas para me tornar um Desenvolvedor de Software Sênior, utilizando sempre a melhor tecnologia que for necessária e as melhores práticas no desenvolvimento de software para cada tipo de projeto.</p>
        <p>Minha meta para o futuro é estar envolvido no desenvolvimento de software, fazendo o que for necessário para o crescimento da empresa em que estiver atuando de forma eficiente, sustentável e constante.</p>
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
