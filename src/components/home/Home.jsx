import Container from  "../container/Container"

import PerfilImage from './PerfilImage'
import BtnProjects from '../buttons/btnProjects'
import BtnGithub from '../buttons/btnGithub'
import BtnLinkedin from '../buttons/btnLinkedin'


export default function Home() {
  return (
    <Container>
      <div id="home">
        <PerfilImage/>
        <div id="boxHome">
          <div id="boxHomeLeft">
            <h2>Sou um</h2>
            <h1>Programador</h1>
            <h2>Seja bem vindo ao meu portfolio<strong id="cursor">|</strong></h2>
          </div>
          <div id="boxHomeRight">
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
