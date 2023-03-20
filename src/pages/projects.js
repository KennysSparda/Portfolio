import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/Footer'
import Container from '../components/Container'
import Button from '../components/buttons/Button'
import Copyright from '../components/copyright'
import Icon from '../components/Icon'

export default function Projects() {
  const [lightTheme, setLightTheme] = useState(false)

  const switchTheme = (e) => {
    setLightTheme(event.target.checked)
  }

  useEffect(() => {
    if(lightTheme) {
      document.documentElement.setAttribute("data-theme", "light");
      window.localStorage.setItem("theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
      window.localStorage.setItem("theme", "dark");
    }
  }, [lightTheme]);

  var links = [ "/projects/Calculadora/index.html",
                "/projects/ConversorDeTemperatura/index.html",
                "/projects/VerificadorDeIdade/index.html",
                "/projects/SuperContador/index.html",
                "https://cesiane-and-mayke.vercel.app/"
              ]

  return (
      <div>
        <Navbar theme={lightTheme} setTheme={switchTheme}/>
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
        <Footer/>
      </div>
  )
}
