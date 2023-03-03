import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/Footer'
import ResumeMenu from './resume/ResumeMenu'
import Container from '../components/Container'

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

  return (
    <div>
        <Navbar theme={lightTheme} setTheme={switchTheme}/>
        <Container>
          <h1>Curriculo</h1>
        </Container>
        <ResumeMenu />
        <Footer />
    </div>
  )
}
 