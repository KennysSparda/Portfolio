import Container from '../../components/Container'
import Button from '../../components/Button'
import Copyright from '../../components/copyright'
import Icon from '../../components/Icon'

export default function Projects() {
  var links = [ "/projects/Calculadora/index.html",
                "/projects/ConversorDeTemperatura/index.html",
                "/projects/VerificadorDeIdade/index.html",
                "/projects/SuperContador/index.html",
                "https://cesiane-and-mayke.vercel.app/"
              ]

  return (
      <div>
        <Container id='projects'>
          <h1>Projetos</h1>
          <Container id="project">
            <iframe src={links[0]}></iframe>
            <Copyright />
          </Container>

          <Container id="project">
            <iframe src={links[1]}></iframe>
            <Copyright />
          </Container>

          <Container id="project">
            <iframe src={links[2]}></iframe>
            <Copyright />
          </Container>

          <Container id="project">
            <iframe src={links[3]}></iframe>
            <Copyright />
          </Container>

          <Container id="project">
            <h2>
              Blog
            </h2>
            <iframe src={links[4]}></iframe>
            <Copyright />
          </Container>
        </Container>
      </div>
  )
}
