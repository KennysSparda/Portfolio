import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/Footer'
import Container from '../components/Container'

import Copyright from '../components/copyright'

import Projeto1 from '../components/projects/Projeto1'
import Projeto2 from '../components/projects/Projeto2'
import Projeto3 from '../components/projects/Projeto3'
import Projeto4 from '../components/projects/Projeto4'
import Projeto5 from '../components/projects/Projeto5'
import Projeto6 from '../components/projects/Projeto6'

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
          <Projeto1/>
          <Projeto2/>
          <Projeto3/>
          <Projeto4/>
          <Projeto5/>
          <Projeto6/>
        </div>
        <Footer/>
      </div>
  )
}
