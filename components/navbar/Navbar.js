import { useState } from 'react'
import Header from './header'
import BtnMain from './buttons/btnMain'
import Menu from './menu'

export default function Navbar(props) {
  // Start navbar empty
  const [show, setShow] = useState(true);

  // function to toggle Show / Hide navbar
  const showMenu = () => {
    setShow(!show)
  }



  // Verify if main button is pressed
  if (show == true) {
    return (
      <Header>
        <BtnMain function={showMenu}>Esconder menu</BtnMain>
        <Menu function={showMenu} theme={props.theme} setTheme={props.setTheme}/>
      </Header>
    )
  } else {
    return (
      <Header>
        <BtnMain function={showMenu}>Mostrar Menu</BtnMain>
      </Header>
    )
  }
}
