import Button from '../../components/Button'
import Viewer from './PdfViewer'

export default function ResumeMenu() {
  var links = ["/files/KennyVargas-pt_BR.pdf", "/files/KennyVargas-en_US.pdf"]

  return (
    <div>
      <label>Português: </label><Button type='linkEx' path={links[0]}>Baixar</Button>
      <br />
      <br />
      <label>English: </label><Button type='linkEx' path={links[1]}>Download</Button>
      <br />
      <br />
      <div className='frame'><Viewer source={links[0]} /></div>
    </div>
  )
}
