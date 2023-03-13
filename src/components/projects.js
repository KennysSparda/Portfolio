import Container from './Container'
import Button from './buttons/Button'
import Copyright from './copyright'
import Icon from './Icon'

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
          <h2>Projetos</h2>

            <p>Projeto em Javascript, html e css</p>
            <iframe src={links[0]}></iframe>

            <p>Projeto em Javascript, html e css</p>
            <iframe src={links[1]}></iframe>

            <p>Projeto em Javascript, html e css</p>
            <iframe src={links[2]}></iframe>

            <p>Projeto em Javascript, html e css</p>
            <iframe src={links[3]}></iframe>

            <p>Projeto em NextJS, React ,Javascript, HTML e CSS:</p>
            <iframe src={links[4]}></iframe>
        </Container>
      </div>
  )
}
