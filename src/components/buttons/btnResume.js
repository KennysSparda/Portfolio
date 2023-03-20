import Button from "./Button";
import Icon from "../Icon";

export default function btnResume() {
  return (
    <Button 
      type='linkIn'
      id="btnStyled"
      path='/resume'>
        <Icon type={1}></Icon>
        Curriculo
    </Button>
  )
}