import ButtonHome from '../buttons/btnHome'
import BtnAbout from '../buttons/btnAbout'
import BtnProjects from '../buttons/btnProjects'

export default function Menu(props) {
  return (
    <nav className="menu"> 
      <ButtonHome function={props.function}/>
      <BtnProjects navbar={true} />
      <BtnAbout function={props.function}/>
    </nav>
  )
}
