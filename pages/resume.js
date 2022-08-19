import Navbar from '../components/navbar/Navbar'
import Footer from '../components/Footer'
import ResumeMenu from './resume/ResumeMenu'
import Container from '../components/Container'

export default function Resume() {
  return (
    <div>
        <Navbar />
        <Container>
          <h1>Curriculo</h1>
          <ResumeMenu />
        </Container>
        <Footer />
    </div>
  )
}
 