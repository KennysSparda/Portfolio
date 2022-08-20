import { useEffect, useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/Footer'
import ResumeMenu from './resume/ResumeMenu'
import Container from '../components/Container'

export default function Resume() {
  const [darkTheme, setDarkTheme] = useState(undefined)

  const switchTheme = (e) => {
    setDarkTheme(event.target.checked)
  }

  useEffect(() => {
    if(darkTheme) {
      document.documentElement.setAttribute("data-theme", "dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
      window.localStorage.setItem("theme", "light");
    }
  }, [darkTheme]);

  return (
    <div>
        <Navbar theme={darkTheme} setTheme={switchTheme}/>
        <Container>
          <h1>Curriculo</h1>
          <ResumeMenu />
        </Container>
        <Footer />
    </div>
  )
}
 