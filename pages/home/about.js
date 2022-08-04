import Box from '../../components/Box'
import Section from '../../components/Section'

export default function About() {
  return (
    <div>
      <Section id='about' >
        <h1>Sobre</h1>
        <p>Aqui é o lugar para demonstrar minhas habilidades e alguns dos meus projetos, espero que goste ;)</p>
        <p>Você pode acessar a página desse projeto no <strong>Github</strong> clicando no botão abaixo:</p>
        <Box  type='external'
              link='https://github.com/KennysSparda/Portfolio'
              style='styled'>
                <img id='ico' src='/images/github.png'></img> Github
        </Box>
        <p>Lá você vai entender como rodar a budega e muito mais :D</p>
      </Section>
    </div>
  )
}
