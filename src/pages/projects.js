import { useEffect } from 'react'

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
import Projeto7 from '../components/projects/Projeto7'
import Projeto8 from '../components/projects/Projeto8'

export default function Projects() {
  useEffect(() => {
    const scrollContainer = document.querySelector(".galery1");
    scrollContainer.addEventListener("wheel", (evt) => {
      evt.preventDefault();
      scrollContainer.scrollLeft += evt.deltaY;
    });
  }, [])
  
  useEffect(() => {
    const scrollContainer = document.querySelector(".galery2");
    scrollContainer.addEventListener("wheel", (evt) => {
      evt.preventDefault();
      scrollContainer.scrollLeft += evt.deltaY;
    });
  }, [])

  return (
      <div>
        <Navbar/>
        <Container id='projects'>
          <h2>Projetos</h2>
        </Container>
        <div id='galery' className='galery1'>
          <Projeto1/>
          <Projeto2/>
          <Projeto3/>
          <Projeto4/>
        </div>
        <div id='galery' className='galery2'>
          <Projeto5/>
          <Projeto6/>
          <Projeto7/>
          <Projeto8/>
        </div>
        <Footer/>
      </div>
  )
}
