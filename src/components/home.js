import Container from  "./Container"

import PerfilImage from './PerfilImage'
import BtnProjects from './buttons/btnProjects'
import BtnGithub from './buttons/btnGithub'
import BtnLinkedin from './buttons/btnLinkedin'


export default function Home() {
  return (
    <Container>
      <div id="home">
        <PerfilImage/>
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
