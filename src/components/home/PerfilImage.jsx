import React, { useState, useEffect } from 'react'
import Icon from '../icon/Icon'

export default function PerfilImage() {
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
    <div>
      {loading ? (
        <Icon type="1"></Icon>
      ) : (
        <div id="boxImgPerfil">
          <img id="imgPerfil" src={imageSrc} alt='Perfil' />  
        </div>
      )} 
    </div>
  )
}
