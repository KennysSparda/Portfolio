import Button from './Button'
import Icon from '../icon/Icon'

export default function BtnProjects(props) {
  if (props.isHomeButton) {
    return (
      <Button type='linkEx' id="btnHome" path="#projects" >
          <div className="flex items-center">
            <Icon type={13}></Icon>
            <span className="ml-2">Projetos</span>
          </div>
      </Button >
    )
  } else {
    return <Button type='linkIn' path="/#projects" function={props.function}>Projetos</Button>
  }
}