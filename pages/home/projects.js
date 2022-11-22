import Container from '../../components/Container'
import Button from '../../components/Button'
import Copyright from '../../components/copyright'
import Icon from '../../components/Icon'

export default function Projects() {
  var links = [ "https://cesiane-and-mayke.vercel.app/",
                "/projects/Calculadora/index.html",
                "/projects/ConversorDeTemperatura/index.html",
                "/projects/VerificadorDeIdade/index.html",
                "/projects/SuperContador/index.html"
              ]

  return (
      <nav>
        <Container id='projects'>
          <h1>Projetos</h1>
        </Container>

        <Container>
          <h2>
            Blog
          </h2>
          <iframe src={links[0]}></iframe>
          <Copyright />
        </Container>

        <Container>
          <h2>
            Calculadora
          </h2>
          <iframe src={links[1]}></iframe>
          <Copyright />
        </Container>

        <Container>
          <h2>
            Conversor de Temperaturas
          </h2>
          <iframe src={links[2]}></iframe>
          <Copyright />
        </Container>

        <Container>
          <h2>
            Verificador de idade
          </h2>
          <iframe src={links[3]}></iframe>
          <Copyright />
        </Container>

        <Container>
          <h2>
            Super Contador
          </h2>
          <iframe src={links[4]}></iframe>
          <Copyright />
        </Container>

      </nav>
  )
}
