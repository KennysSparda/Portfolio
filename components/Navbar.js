import { useState } from 'react'
import Box from './Box'


function Navbar(props) {
  const [toggle, setToggle] = useState(false);

  const triggerToggle = () => {
    setToggle( !toggle )
  }

  function Button0() {
    return (
      <a>
        <button id='styled' onClick={triggerToggle}><strong>Swygax</strong></button>
      </a>
    )
  }

  function NavbarRight() {

    function Button1() {
      const [select, setSelect] = useState(false)
      return (
        <div>
          <Box style='unstyled' link="#home" function={triggerToggle}>Início</Box>
        </div>
      )
    }
    
    function Button2() {
      const [select, setSelect] = useState(false)
      return (
        <div>
          <Box style='unstyled' link="#projects" function={triggerToggle}>Projetos</Box >
        </div>
      )
    }
    
    function Button3() {
      const [select, setSelect] = useState(false)
      return (
        <div>
          <Box style='unstyled' link="#skills" function={triggerToggle}>Habilidades</Box>
        </div>
      )
    }
    
    function Button4() {
      const [select, setSelect] = useState(false)
      return (
        <div>
          <Box style='unstyled' link="#contact" function={triggerToggle}>Contato</Box>
        </div>
      )
    }
    
    function Button5() {
      const [select, setSelect] = useState(false)
      return (
        <div>
          <Box style='unstyled' link="#about" function={triggerToggle}>Sobre</Box >
        </div>
      )
    }
    return (
      <nav className="navbar-right">
        <Button1 />
        <Button2 />
        <Button3 />
        <Button4 />
        <Button5 />
      </nav>
    )
  }

  // Verify if main button is pressed
  if(toggle == true ) {
    return (
      <div>
        <header className="navbar" id="styled">
          <Button0 />
          <NavbarRight />
        </header >
      </div >
    )
  } else {
    return (
      <div>
      <header className="navbar_only" id="styled">
        <Button0 />
      </header >
    </div >
    )
  }
}

export default Navbar
