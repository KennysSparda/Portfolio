import ButtonHome from './buttons/btnHome'
import BtnProjects from './buttons/btnProjects'
import BtnSkills from './buttons/btnSkills'
import BtnContact from './buttons/btnContact'
import BtnAbout from './buttons/btnAbout'
import Switch from './Switch'

export default function Menu(props) {
  return (
    <nav className="menu">
      <Switch theme={props.theme} setTheme={props.setTheme}/>
      <ButtonHome/>
      <BtnProjects/>
      <BtnSkills/>
      <BtnContact/>
      <BtnAbout/>
    </nav>
  )
}