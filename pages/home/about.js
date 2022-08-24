import Button from '../../components/Button'
import Container from '../../components/Container'

export default function About() {
  return (
    <div>
      <Container id='about' >
        <h2>Sobre</h2>
        <p>Aqui é o lugar para demonstrar minhas habilidades e alguns dos meus projetos, espero que goste ;)</p>
        <p>Você pode acessar a página desse projeto no <strong>Github</strong> clicando no botão abaixo:</p>
        <Button type='linkEx'
              path='https://github.com/KennysSparda/Portfolio'>
                <img id='ico' src='/images/github.png'></img> Github
        </Button>
        <p>Lá você vai entender como rodar o projeto e muito mais :D</p>
      </Container>
    </div>
  )
}
