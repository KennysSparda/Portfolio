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
        <p>Me chamo Kenny Vargas estou com 22 anos, tenho uma namorada maravilhosa e cinco gatinhos!</p>
        <p>Já tive várias experiências com atendimento ao público trabalhando em supermercados, porém resolvi dar uma virada na minha vida em 2020 e desde lá eu estou estudando programação.</p>
        <p>Eu descobri que tenho prazer em aprender coisas novas! seja se for por faculdade e graduações ou por conta própria mesmo indo atrás de documentação, artigos, tutoriais.</p>
        <p><strong></strong></p>
        
        <h1>Sobre essa página</h1>
        <p>Aqui é o lugar para demonstrar minhas habilidades e alguns dos meus projetos, espero que goste ;)</p>
        <p>Você pode acessar a página desse projeto no <strong>Github</strong> apenas clicando no botão abaixo:</p>

        <Box link='https://github.com/KennysSparda/Portfolio' style='styled'><img id='ico' src='/images/github.png'></img> Github</Box>
        <p>Lá você vai entender como rodar o pojeto e muito mais :D</p>
      </Section>
      <Footer />
    </div>
  )
}

export default About
