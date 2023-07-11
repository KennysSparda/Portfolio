import Container from  "../container/Container"

import BtnProjects from '../buttons/btnProjects'
import BtnGithub from '../buttons/btnGithub'
import BtnLinkedin from '../buttons/btnLinkedin'
import Perfil from "../perfil/Perfill"

export default function Home() {
  return (
    <Container>
      <div id="home">
        <div id="boxHome">
          <div id="boxHomeLeft">
            <Perfil/>
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
