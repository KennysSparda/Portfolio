import Section from '../../components/Section'
import Box from '../../components/Box'

function Home() {
  var links = ["https://github.com/KennysSparda", "https://www.linkedin.com/in/kenny-de-souza-vargas-8a521422a"]
  var ico = ['/images/github.png', '/images/linkedin.png']

  return (
    <Section id='home'>
        <h1>Hello world.
    My name is Kenny.</h1>
        <p>Me chamo Kenny Vargas estou com 22 anos e estudo programação por conta própria.</p>
        <p>Gosto de aprender coisas novas!</p>
        <Box style='styled' link={links[1]}><img id='ico' src={ico[1]}></img> Linkedin</Box>
        <br/>
        <br/>
        <Box style='styled' link={links[0]}><img id='ico' src={ico[0]}></img> Github</Box>
    </Section>
  )
}

export default Home