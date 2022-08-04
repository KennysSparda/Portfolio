import { useState } from 'react'
import Box from './Box'

function NavbarRight() {
  const [toggle, setToggle] = useState(true);

  const triggerToggle = () => {
    setToggle( !toggle )
    console.log("Button 0 is select: " + toggle)
  }
  
  function Button1() {
    const [select, setSelect] = useState(false)
    return (
      <div>
        <Box style='unstyled' link="/" onClick={Button1}>Início</Box>
      </div>
    )
  }
  
  function Button2() {
    const [select, setSelect] = useState(false)
    return (
      <div>
        <Box style='unstyled' link="#projects" onClick={Button2}>Projetos</Box >
      </div>
    )
  }
  
  function Button3() {
    const [select, setSelect] = useState(false)
    return (
      <div>
        <Box style='unstyled' link="#skills" onClick={Button3}>Habilidades</Box>
      </div>
    )
  }
  
  function Button4() {
    const [select, setSelect] = useState(false)
    return (
      <div>
        <Box style='unstyled' link="#contact" onClick={Button4}>Contato</Box>
      </div>
    )
  }
  
  function Button5() {
    const [select, setSelect] = useState(false)
    return (
      <div>
        <Box style='unstyled' link="#about" onClick={Button5}>Sobre</Box >
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

function Navbar(props) {
  const [toggle, setToggle] = useState(true);

  const triggerToggle = () => {
    setToggle( !toggle )
    console.log("Button 0 is select: " + toggle)
  }

  // Verify if main button is pressed
  function Button0() {
    return (
      <a>
        <button id='styled' onClick={triggerToggle}><strong>Swygax</strong></button>
      </a>
    )
  }

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
      <header className="navbar" id="styled">
        <Button0 />
      </header >
    </div >
    )
  }
}

export default Navbar
