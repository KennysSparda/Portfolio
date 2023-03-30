import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Image from 'next/image'

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

  var images = [  '/img/calculadora.png',
                  '/img/conversortemperatura.png',
                  '/img/verificadoridade.png',
                  '/img/geradornumeros.png',
                  '/img/blogpessoal.png',
                  '/img/analizadornumeros.png'
                 ]

  var links = [ "/projects/Calculadora/index.html",
                "/projects/ConversorDeTemperatura/index.html",
                "/projects/VerificadorDeIdade/index.html",
                "/projects/SuperContador/index.html",
                "https://cesiane-and-mayke.vercel.app/",
                "/projects/AnalizadorDeNumeros/index.html"
              ]


  useEffect(() => {
    const scrollContainer = document.querySelector("#galery");
    scrollContainer.addEventListener("wheel", (evt) => {
      evt.preventDefault();
      scrollContainer.scrollLeft += evt.deltaY;
    });
  }, [])


  return (
      <div>
        <Navbar theme={lightTheme} setTheme={switchTheme}/>
        <Container id='projects'>
          <h2>Projetos</h2>
        </Container>
        <div id='galery'>
          <div id='galery-project'>
            <h3>Calculadora</h3>
            <Image className='ProjectImage'
              src={images[0]}
              alt="Picture of project"
              width={400}
              height={400}
            />
            <p>Projeto feito com Javascript, HTML e CSS</p>
            <br/>
            <Button 
              type='linkEx'
              id="btnStyled"
              path={links[0]}>
              <Icon type={2}></Icon>
              Acessar
            </Button>
          </div>

          <div id='galery-project'>
            <h3>Conversor de Temperatura</h3>
            <Image className='ProjectImage'
              src={images[1]}
              alt="Picture of project"
              width={400}
              height={400}
            />
            <p>Projeto feito com Javascript, HTML e CSS</p>
            <br/>
            <Button 
              type='linkEx'
              id="btnStyled"
              path={links[1]}>
              <Icon type={2}></Icon>
              Acessar
            </Button>
          </div>

          <div id='galery-project'>
            <h3>Verificador de idade</h3>
            <Image className='ProjectImage'
              src={images[2]}
              alt="Picture of project"
              width={400}
              height={400}
            />
            <p>Projeto feito com Javascript, HTML e CSS</p>
            <br/>
            <Button 
              type='linkEx'
              id="btnStyled"
              path={links[2]}>
              <Icon type={2}></Icon>
              Acessar
            </Button>
          </div>

          <div id='galery-project'>
            <h3>Gerador de numeros sequenciais</h3>
            <Image className='ProjectImage'
              src={images[3]}
              alt="Picture of project"
              width={400}
              height={400}
            />
            <p>Projeto feito com Javascript, HTML e CSS</p>
            <br/>
            <Button 
              type='linkEx'
              id="btnStyled"
              path={links[3]}>
              <Icon type={2}></Icon>
              Acessar
            </Button>
          </div>

          <div id='galery-project'>
            <h3>Blog Pessoal</h3>
            <Image className='ProjectImage'
              src={images[4]}
              alt="Picture of project"
              width={400}
              height={400}
            />
            <p>Projeto feito com NextJS</p>
            <br/>
            <Button 
              type='linkEx'
              id="btnStyled"
              path={links[4]}>
              <Icon type={2}></Icon>
              Acessar
            </Button>
          </div>

          <div id='galery-project'>
            <h3>Analizador de Números</h3>
            <Image className='ProjectImage'
              src={images[5]}
              alt="Picture of project"
              width={400}
              height={400}
            />
            <p>Projeto feito com NextJS</p>
            <br/>
            <Button 
              type='linkEx'
              id="btnStyled"
              path={links[5]}>
              <Icon type={2}></Icon>
              Acessar
            </Button>
          </div>
        </div>
        <Footer/>
      </div>
  )
}
