import Button from './Button'
import Icon from '../Icon'

export default function BtnProjects(props) {
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
