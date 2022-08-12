import Container from '../../components/Container'
import Picture from '../../components/Picture'
import Button from '../../components/Button'
import Copyright from '../../components/copyright'
import Icon from '../../components/Icon'

export default function Projects() {
  var imagePath = ['/images/ThermalConversor.png', '/images/calculator.png', '/images/storeProject.png']
  var links = ["/projects/thermalconversor/index.html", "/projects/calculator/index.html", "https://selena-modas.vercel.app/"]

  return (
      <Container  id='projects'>
        <h1>Projetos</h1>
          <h2>Store Project</h2>
          <Picture  description="image of store project"
                    source={imagePath[2]} />
          <br/>
          <br/>
          <Button type='linkEx'
                  path={links[2]}>
                <Icon type={2} />
                Acessar
          </Button>
          <br/>
          <br/>
          <Copyright />
          <h2>Conversor de Temperaturas</h2>
          <Picture  description="image of thermal conversor"
                    source={imagePath[0]} />
          <br/>
          <br/>
          <Button type='linkEx'
                  path={links[0]}> 
                <Icon type={2} />
                Acessar
          </Button>
          <br/>
          <br/>
          <Copyright />
          <h2>Calculadora</h2>
          <Picture  description="image of calculator"
                    source={imagePath[1]} />
          <br/>
          <br/>
          <Button type='linkEx'
                  path={links[1]}>
                <Icon type={2} />
                Acessar
          </Button>
          <br/>
          <br/>
          <Copyright />
      </Container>
  )
}
