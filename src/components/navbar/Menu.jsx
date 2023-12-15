import ButtonHome from '../buttons/btnHome'
import BtnAbout from '../buttons/btnAbout'
import BtnProjects from '../buttons/btnProjects'
import Button from '../buttons/Button'

export default function Menu(props) {
  return (
    <nav className="menu"> 
      <ButtonHome function={props.function}/>
      <BtnProjects function={props.function} navbar={true} />
      <BtnAbout function={props.function}/>
      <Button function={props.muteFunction}>
        {props.muteVar ? 'Música' : 'Desligar Música'}
      </Button>
    </nav>
  )
}
