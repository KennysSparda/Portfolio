import Section from '../../components/Section'
import Box from '../../components/Box'

export default function Home() {
  var links = ["https://github.com/KennysSparda"]
  var ico = ['/images/github.png', '/images/user.png']

  return (
    <Section id='home'>
        <h1>Hello world.
            My name is Kenny.</h1>
        <p>Me chamo Kenny Vargas e estudo programação por conta própria.</p>
        <p>Gosto de aprender coisas novas!</p>
        <Box  type='external'
              style='styled'
              link={links[0]}>
                <img id='ico' src={ico[0]}></img>Github
        </Box>
        <br/>
        <Box  style='styled'
              link='/resume'>
                <img id='ico' src={ico[1]}></img>Curriculo
        </Box>
    </Section>
  )
}
