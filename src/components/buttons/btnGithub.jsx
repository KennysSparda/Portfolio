import Button from "./Button"
import Icon from '../icon/Icon'

export default function btnGithub() {
  var links = ["https://github.com/KennysSparda"]
  return (
    <Button 
      type='linkEx'
      id="btnStyled"
      path={links[0]}>
      <Icon type={0}></Icon>
      Github
    </Button>
  )
}
