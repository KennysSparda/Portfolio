import Section from '../../components/Section'
import Frame from '../../components/Frame'
import Box from '../../components/Box'

function Projects() {
  var links = ["https://github.com/KennysSparda/ThermalConversor"]
  var ico = ['/images/link.png']

  return (
      <Section  id='projects'>
        <h1>Projetos</h1>
        <h5>Conversor de Temperaturas</h5>
        <Frame  description="image of thermal conversor"
                source='/images/ThermalConversor.png' />
        <br/>
        <br/>
        <Box  type='external'
              style='styled'
              link={links[0]}> 
                <img id='ico' src={ico[0]}></img>
              Acessar
        </Box>
      </Section>
  )
}

export default Projects
