import { useState } from 'react'
import Header from './header'
import BtnMenu from './buttons/btnMenu'
import Menu from './menu'
import Icon from '../Icon'

export default function Navbar(props) {
  // Start navbar empty
  const [show, setShow] = useState(false);

  // function to toggle Show / Hide navbar
  const showMenu = () => {
    setShow(!show)
  }



  // Verify if main button is pressed
  if (show == true) {
    return (
      <Header>
        <BtnMenu function={showMenu}><Icon type={5}></Icon></BtnMenu>
        <Menu function={showMenu} theme={props.theme} setTheme={props.setTheme} />
      </Header>
    )
  } else {
    return (
      <Header>
        <BtnMenu function={showMenu}><Icon type={5}></Icon></BtnMenu>
        <h2 id="title">Portfólio</h2>
      </Header>
    )
  }
}
