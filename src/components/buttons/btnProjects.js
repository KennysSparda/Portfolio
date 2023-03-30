import Button from './Button'
import Icon from '../Icon'

export default function BtnProjects(props) {
  if(props.navbar == true) {
    return (
      <Button 
        type='linkIn' 
        id="btnStyled"
        path="/projects" >
          Projetos
      </Button >
    )
  } else {
    return (
      <Button 
        type='linkIn' 
        id="btnStyled"
        path="/projects" >
          <Icon type={13}></Icon>
          Projetos
      </Button >
    )
  }
}
