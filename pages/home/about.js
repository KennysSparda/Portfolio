import Button from '../../components/Button'
import Container from '../../components/Container'
import Icon from '../../components/Icon'

export default function About() {
  return (
    <div>
      <Container id='about' >
        <h2>Projeto feito com:</h2>
          <Button >
            <Icon type="7"></Icon><strong>Next</strong>
          </Button>
          <br></br>
          <Button >
            <Icon type="8"></Icon><strong>React</strong>
          </Button>
          <br></br>
          <Button >
            <Icon type="9"></Icon><strong>Javascript</strong>
          </Button>
          <br></br>
          <Button >
            <Icon type="10"></Icon><strong>CSS 3</strong>
          </Button>
          <br></br>
          <Button >
            <Icon type="11"></Icon><strong>HTML 5</strong>
          </Button>
        <p>Acesse o nosso
          <br></br>
          <br></br>
          <Button 
                type='linkEx'
                id="btnStyled"
                path='https://github.com/KennysSparda/Portfolio'>
                  <Icon type={0}></Icon><strong>Github</strong>!
          </Button>
        </p>
        
      </Container>
    </div>
  )
}
