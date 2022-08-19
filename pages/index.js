import {useEffect, useState} from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/Footer'

import Home from './home/home'
import Contact from './home/contact'
import Projects from './home/projects'
import Skills from './home/skills'
import About from './home/about'

export default function App() {
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
      <Home />
      <Projects /> 
      <Skills />
      <Contact />
      <About />
      <Footer />
    </div>
  )
}
