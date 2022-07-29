import Header from "../components/Header"
import Footer from "../components/Footer"
import Section from "../components/Section"
import Btn from "../components/Btn"


function App() {
  return (
    <div>
      <Header />
      <Section>
        <h1>Contact</h1>
        <Btn className="_styled_layout" link="https://contate.me/Swygax">Me mande um "Oi" no Whatsapp</Btn>
        <p></p>
      </Section>
      <Footer />
    </div>
  )
}

export default App
