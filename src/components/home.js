import Banner from './banner'
import BtnGithub from './buttons/btnGithub'
import BtnResume from './buttons/btnResume'
import BtnProjects from './buttons/btnProjects'

export default function Home() {
  return (
    <div id="home">
      <Banner/>
      <div id="box">
        <div id="box-left">
          <h2>Olá, me chamo</h2>
          <h1>Kenny Vargas</h1>
          <h2>E sou</h2>
          <h1>Programador<strong id="cursor">|</strong></h1>
        </div>
        <div id="box-right">
          <BtnProjects/>
          <br/>
          <br/>
          <BtnGithub/>
          <br/>
          <br/>
          <BtnResume/>
        </div>
      </div>
    </div>
  )
}
