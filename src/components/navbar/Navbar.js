import { useState } from 'react'
import Header from './header'
import BtnMenu from '../buttons/btnMenu'
import Menu from './menu'
import Icon from '../Icon'

export default function Navbar() {
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
        <h2 id="title">Menu</h2>
        <BtnMenu function={showMenu}><Icon type={5}></Icon></BtnMenu>
        <Menu function={showMenu} />
      </Header>
    )
  } else {
    return (
      <Header>
        <h2 id="title">Kenny Vargas</h2>
        <BtnMenu function={showMenu}><Icon type={5}></Icon></BtnMenu>
      </Header>
    )
  }
}
