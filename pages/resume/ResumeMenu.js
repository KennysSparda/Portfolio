import Button from '../../components/Button'
import Viewer from '../../components/PdfViewer'

export default function ResumeMenu() {
  var links = ["/files/27-10-22-KennyVargas-pt_BR.pdf", "/files/27-10-22-KennyVargas-en_US.pdf"]

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
