import { useEffect } from 'react'

import Container from '../Container'

import Projeto1 from './Projeto1'
import Projeto2 from './Projeto2'
import Projeto3 from './Projeto3'
import Projeto4 from './Projeto4'
import Projeto5 from './Projeto5'
import Projeto6 from './Projeto6'
import Projeto7 from './Projeto7'
import Projeto8 from './Projeto8'

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
      </div>
  )
}
