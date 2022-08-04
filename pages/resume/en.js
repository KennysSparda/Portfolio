import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import PdfViewer from '../../components/PdfViewer'

export default function Resume() {

  return (
    <div>
      <Head>
        <title>Kenny Resume</title>
      </Head>
      <Navbar />
      <PdfViewer source='/files/KennyVargas-en_US.pdf'/>
      <Footer />
    </div>
  )
}
