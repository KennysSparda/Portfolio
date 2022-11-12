import { useState } from 'react'
import Button from '../../components/Button'
import Viewer from '../../components/PdfViewer'
import Container from '../../components/Container'

export default function ResumeMenu() {
  var links = ["/files/27-10-22-KennyVargas-pt_BR.pdf", "/files/27-10-22-KennyVargas-en_US.pdf"]
  const [selected, setSelected] = useState(links[0])

  const changeResume = (resumeFile) => {
    setSelected(resumeFile)
  }

  return (
    <Container>
      <h2>Baixar</h2>
      <Button type='linkEx' path={links[0]}>Português</Button>
      <Button type='linkEx' path={links[1]}>English</Button>
      <h2>Visualização</h2>
      <div className='frame'><Viewer source={selected} /></div>
    </Container>
  )
}
