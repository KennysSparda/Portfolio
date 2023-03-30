import {useEffect, useState} from 'react'
import dynamic from "next/dynamic";
import { Suspense } from "react";

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
  
  const Navbar = dynamic(() => import("../Components/navbar/Navbar"), {
    suspense: true,
  });
  const Home = dynamic(() => import("../Components/Home"), {
    suspense: true,
  });
  const Contact = dynamic(() => import("../Components/Contact"), {
    suspense: true,
  });
  const About = dynamic(() => import("../Components/About"), {
    suspense: true,
  });
  const Footer = dynamic(() => import("../Components/Footer"), {
    suspense: true,
  });

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar theme={lightTheme} setTheme={switchTheme}/>
        <Home />
        <Contact />
        <About />
        <Footer />
      </Suspense>
    </div>
  );
}
