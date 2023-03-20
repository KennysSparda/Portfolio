import ButtonHome from '../buttons/btnHome'
import BtnContact from '../buttons/btnContact'
import BtnAbout from '../btnAbout'
import Switch from '../buttons/Switch'

export default function Menu(props) {
  return (
    <nav className="menu"> 
      <ButtonHome function={props.function}/>
      <BtnContact function={props.function}/>
      <BtnAbout function={props.function}/>
      <Switch theme={props.theme} setTheme={props.setTheme}/>
    </nav>
  )
}
