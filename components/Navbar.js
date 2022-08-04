import { useState } from 'react'
import Box from './Box'


export default function Navbar(props) {
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
    var links = [ "/files/KennyVargas-pt_BR.pdf", "/files/KennyVargas-en_US.pdf" ]
    var ico = ['/images/link.png']

    function Button1() {
      return (
        <div>
          <Box style='unstyled' link="/#home" function={triggerToggle}>Início</Box>
        </div>
      )
    }
    
    function Button2() {
      return (
        <div>
          <Box style='unstyled' link="/#projects" function={triggerToggle}>Projetos</Box >
        </div>
      )
    }
    
    function Button3() {
      return (
        <div>
          <Box style='unstyled' link="/#skills" function={triggerToggle}>Habilidades</Box>
        </div>
      )
    }
    
    function Button4() {
      return (
        <div>
          <Box style='unstyled' link="/#contact" function={triggerToggle}>Contato</Box>
        </div>
      )
    }
    
    function Button5() {
      const [toggle, setToggle] = useState(false);

      const triggerToggle = () => {
        setToggle( !toggle )
      }
    
      if(toggle == true ) {
        return (
          <div>
            <Box style='styled' function={triggerToggle}>Meu Curriculo
              <table>
                <tr>
                  <th>Português</th>
                  <th>English</th>
                </tr>
                <tr>
                  <td><Box style='unstyled' link='/resume/pt'>Visualizar</Box></td>
                  <td><Box style='unstyled' link='/resume/en'>Visualizar</Box></td>
                </tr>
                <tr>
                  <td><Box type='external' style='styled' link={links[0]}>Baixar</Box></td>
                  <td><Box type='external' style='styled' link={links[1]}>Baixar</Box></td>
                </tr>
              </table>
            </Box>
          </div>
        )
      } else {
        return (
          <div>
            <Box style='unstyled' function={triggerToggle}>Meu Curriculo</Box>
          </div>
        )
      }
    }

    function Button6() {
      return (
        <div>
          <Box style='unstyled' link="/#about" function={triggerToggle}>Sobre
          </Box >
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
        <Button6 />
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
