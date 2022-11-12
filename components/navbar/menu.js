import ButtonHome from '../buttons/btnHome'
import BtnProjects from '../buttons/btnProjects'
import BtnContact from '../buttons/btnContact'
import BtnAbout from '../buttons/btnAbout'
import Switch from './Switch'

export default function Menu(props) {
  return (
    <nav className="menu">
      <Switch theme={props.theme} setTheme={props.setTheme}/>
      <ButtonHome function={props.function}/>
      <BtnProjects function={props.function}/>
      <BtnContact function={props.function}/>
      <BtnAbout function={props.function}/>
    </nav>
  )
}