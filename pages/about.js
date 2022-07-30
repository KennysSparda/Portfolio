import Box from '../components/Box'
import Navbar from '../components/Navbar'
import Section from '../components/Section'
import Footer from '../components/Footer'

function About() {
  return (
    <div>
      <Navbar />
      <Section>
        <h1>Sobre mim:</h1>
        <p>Aqui é o lugar para demonstrar minhas habilidades e alguns dos meus projetos espero que goste ; )</p>
        <p>Você pode acessar a página desse projeto no <strong>Github</strong> apenas clicando no botão abaixo:</p>

        <Box link='https://github.com/KennysSparda/Portfolio' style='styled'>Github</Box>
        <p>Lá você vai entender como rodar o pojeto e muito mais :D</p>
      </Section>
      <Footer />
    </div>
  )
}

export default About
