import Section from '../../components/Section'
import Picture from '../../components/Picture'
import Box from '../../components/Box'

export default function Projects() {
  var links = ["https://github.com/KennysSparda/ThermalConversor"]
  var ico = ['/images/link.png']

  return (
      <Section  id='projects'>
        <h1>Projetos</h1>
        <h5>Conversor de Temperaturas</h5>
        <Picture  description="image of thermal conversor"
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
