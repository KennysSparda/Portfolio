import ButtonHome from '../buttons/btnHome'
import BtnProjects from '../buttons/btnProjects'
import BtnContact from '../buttons/btnContact'
import BtnAbout from '../buttons/btnAbout'
import Switch from '../buttons/Switch'

export default function Menu(props) {
  return (
    <nav className="menu"> 
      <ButtonHome function={props.function}/>
      <BtnProjects function={props.function}/>
      <BtnContact function={props.function}/>
      <BtnAbout function={props.function}/>
      <Switch theme={props.theme} setTheme={props.setTheme}/>
    </nav>
  )
}
