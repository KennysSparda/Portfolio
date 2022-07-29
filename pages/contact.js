import Header from '../components/Header'
import Section from '../components/Section'
import Box from '../components/Box'
import Footer from '../components/Footer'

function Contact() {
  return (
    <div>
      <Header />
      <Section>
        <h1>Contact</h1>
        <Box className="_styled_layout" link="https://contate.me/Swygax">Me mande um "Oi" no Whatsapp</Box>
      </Section>
      <Footer />
    </div>
  )
}

export default Contact
