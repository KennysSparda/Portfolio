import Head from 'next/head'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/Footer'
import ResumeMenu from './resume/ResumeMenu'
import Section from '../components/Section'

export default function Resume() {
  return (
    <div>
        <Navbar />
        <Section>
          <h1>Curriculo</h1>
          <ResumeMenu />
        </Section>
        <Footer />
    </div>
  )
}
 