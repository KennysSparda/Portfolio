import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import PdfViewer from '../../components/PdfViewer'

export default function Resume() {

  return (
    <div>
      <Head>
        <title>Kenny Curriculo</title>
      </Head>
      <Navbar />
      <PdfViewer source='/files/KennyVargas-pt_BR.pdf'/>
      <Footer />
    </div>
  )
}
