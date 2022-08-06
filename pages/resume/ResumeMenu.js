import Box from '../../components/Box'
import Viewer from './PdfViewer'

export default function ResumeMenu() {
  var links = [ "/files/KennyVargas-en_US.pdf", "/files/KennyVargas-pt_BR.pdf" ]

  return (
    <div>
      <label>Português: </label><Box type='external' style='styled' link={links[0]}>Baixar</Box>
      <br/>
      <br/>
      <label>English: </label><Box type='external' style='styled' link={links[1]}>Download</Box>
      <br/>
      <br/>
      <div className='frame'><Viewer source={links[1]} /></div>
    </div>
  )
}