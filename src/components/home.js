import Banner from './banner'
import BtnGithub from './buttons/btnGithub'
import BtnLinkedin from './buttons/btnLinkedin'
import BtnProjects from './buttons/btnProjects'

export default function Home() {
  return (
    <div id="home">
      <Banner/>
      <div id="box">
        <div id="box-left">
          <h2>Olá, seja bem vindo!</h2>
          <h2>Eu sou</h2>
          <h1>Kenny Vargas</h1>
          <h2>Programador<strong id="cursor">|</strong></h2>
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
  )
}
