import React, { useState, useEffect } from 'react'

import BtnGithub from './buttons/btnGithub'
import BtnLinkedin from './buttons/btnLinkedin'
import BtnProjects from './buttons/btnProjects'

import Container from "./Container"
import Icon from './Icon'

export default function Home() {
  const [loading, setLoading] = useState(true) // Estado para controlar o carregamento
  const [imageLoaded, setImageLoaded] = useState(false) //Estado para controlar se a imagem foi carregada

  const imageSrc = 'img/perfil.jpg'

  useEffect(() => {
    const image = new Image()
    image.onload = () => {
      setLoading(false) // Define o estado de carregamento como false quando a imagem e carregada
      setImageLoaded(true) // Define o estado de imagem carregada como true
    }
    image.src = imageSrc
  }, [])

  return (
    <Container>
      <div id="home">
        <div>
          {loading ? (
            <Icon type="1"></Icon>
          ) : (
            <img id="imgPerfil" src={imageSrc} alt='Perfil' />  
          )} 
        </div>
        <div id="box">
          <div id="box-left">
            <h2>Sou um</h2>
            <h1>Programador</h1>
            <h2>Seja bem vindo ao meu portfolio<strong id="cursor">|</strong></h2>
          </div>
          <div id="box-right">
            <div id="content-right">
              <BtnProjects/>
              <br/>
              <br/>
              <br/>
              <BtnGithub/>
              <br/>
              <br/>
              <br/>
              <BtnLinkedin/>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
