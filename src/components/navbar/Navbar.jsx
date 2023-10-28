import { useState } from 'react'

import BtnMenu from '../buttons/btnMenu'
import Menu from './Menu'
import Icon from '../icon/Icon'

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
      <header className="navbar-body">
        <div className="navbar">
        <h2 id="title">Portfolio</h2>
        <BtnMenu function={showMenu}><Icon type={5}></Icon></BtnMenu>
        <Menu function={showMenu} />
        </div>
      </header>
    )
  } else {
    return (
      <header className="navbar-body">
        <div className="navbar">
          <h2 id="title">Portfolio</h2>
          <BtnMenu function={showMenu}><Icon type={5}></Icon></BtnMenu>
        </div>
      </header>
    )
  }
}
