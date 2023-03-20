import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Container from '../components/Container'
import Footer from '../components/Footer'
import Button from '../components/buttons/Button'
import Viewer from '../components/PdfViewer'

export default function Resume() {
  const [lightTheme, setLightTheme] = useState(false)

  const switchTheme = (e) => {
    setLightTheme(event.target.checked)
  }

  useEffect(() => {
    if(lightTheme) {
      document.documentElement.setAttribute("data-theme", "light");
      window.localStorage.setItem("theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
      window.localStorage.setItem("theme", "dark");
    }
  }, [lightTheme]);

  var links = ["/files/KennyVargas-pt_BR.pdf", "/files/KennyVargas-en_US.pdf"]
  const [selected, setSelected] = useState(links[0])

  const changeResume = (resumeFile) => {
    setSelected(resumeFile)
  }

  return (
    <div>
        <Navbar theme={lightTheme} setTheme={switchTheme}/>
        <Container>
          <h1>Curriculo</h1>
          <br/>
          <h2>Baixar</h2>
          <br/>
          <Button id="btnStyled" type='linkEx' path={links[0]}>Português</Button>
          <br/>
          <br/>
          <Button id="btnStyled" type='linkEx' path={links[1]}>English</Button>
          <br/>
          <br/>
          <h2>Visualização</h2>
          <div className='frame'><Viewer source={selected} /></div>
        </Container>
        <Footer />
    </div>
  )
}
 