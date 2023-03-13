import {useEffect, useState} from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/Footer'

import Home from './home'
import Contact from './contact'
import Projects from './projects'
import About from './about'

export default function App() {
  const [lightTheme, setLightTheme] = useState(false)

  const switchTheme = (e) => {
    setLightTheme(e.target.checked)
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
      <Home />
      <Projects /> 
      <Contact />
      <About />
      <Footer />
    </div>
  )
}
