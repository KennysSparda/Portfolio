import Button from './Button'
import Icon from '../icon/Icon'

export default function BtnProjects(props) {
  if(props.navbar == true) {
    return (
      <Button type='linkIn'
              path="/#projects" >
                Projetos
      </Button>
    )
  } else {
    return (
      <Button 
        type='linkIn' 
        id="btnHome"
        path="/#projects" >
          <Icon type={13}></Icon>
          Projetos
      </Button >
    )
  }
}
