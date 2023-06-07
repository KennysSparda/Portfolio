import Button from "./Button"
import Icon from '../icon/Icon'

export default function btnLinkedin() {
  var links = ["https://www.linkedin.com/in/kenny-de-souza-vargas-8a521422a"]
  return (
    <Button 
      type='linkEx'
      id="btnStyled"      
      path={links[0]}>
      <Icon type={4}></Icon>Linkedin
    </Button>
  )
}

