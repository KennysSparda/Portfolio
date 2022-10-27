import {useEffect, useState} from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/Footer'

import Home from './home/home'
import Contact from './home/contact'
import Projects from './home/projects'
import About from './home/about'

export default function App() {
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
      <Home />
      <Projects /> 
      <Contact />
      <About />
      <Footer />
    </div>
  )
}
