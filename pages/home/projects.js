import Section from '../../components/Section'
import Picture from '../../components/Picture'
import Box from '../../components/Box'
import Copyright from '../../components/copyright'

export default function Projects() {
  var imagePath = ['/images/ThermalConversor.png', '/images/calculator.png', '/images/storeProject.png']
  var links = ["/projects/thermalconversor/index.html", "/projects/calculator/index.html", "https://selena-modas.vercel.app/"]
  var ico = ['/images/link.png']

  return (
      <Section  id='projects'>
        <h1>Projetos</h1>
        <div id='styled'>
          <h5>Store Project</h5>
          <Picture  description="image of store project"
                    source={imagePath[2]} />
          <br/>
          <br/>
          <Box  type='external'
                style='styled'
                link={links[2]}>
                  <img id='ico' src={ico[0]} alt='linked icon'></img>
                Acessar
          </Box>
          <br/>
          <br/>
          <Copyright />
        </div>
        <br/>
        <div id='styled'>
          <h5>Conversor de Temperaturas</h5>
          <Picture  description="image of thermal conversor"
                    source={imagePath[0]} />
          <br/>
          <br/>
          <Box  type='external'
                style='styled'
                link={links[0]}> 
                  <img id='ico' src={ico[0]} alt='linked icon'></img>
                Acessar
          </Box>
          <br/>
          <br/>
          <Copyright />
        </div>
        <br/>
        <div id='styled'>
          <h5>Calculadora</h5>
          <Picture  description="image of calculator"
                    source={imagePath[1]} />
          <br/>
          <br/>
          <Box  type='external'
                style='styled'
                link={links[1]}>
                  <img id='ico' src={ico[0]} alt='linked icon'></img>
                Acessar
          </Box>
          <br/>
          <br/>
          <Copyright />
        </div>
        <br/>
      </Section>
  )
}
