import ButtonHome from './buttons/btnHome'
import BtnProjects from './buttons/btnProjects'
import BtnSkills from './buttons/btnSkills'
import BtnContact from './buttons/btnContact'
import BtnAbout from './buttons/btnAbout'


export default function Menu(props) {
  const show = props.function

  return (
    <nav className="menu">
      <ButtonHome  function={show}/>
      <BtnProjects  function={show}/>
      <BtnSkills  function={show}/>
      <BtnContact  function={show}/>
      <BtnAbout  function={show}/>
    </nav>
  )
}