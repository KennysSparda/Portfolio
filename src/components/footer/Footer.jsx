import BtnGithub from '../buttons/btnGithub'
import BtnLinkedin from '../buttons/btnLinkedin'
import BtnWhatsapp from '../buttons/btnWhatsapp'

export default function Footer() {
  return (
    <footer>
      <div id="content-footer">
        <BtnGithub/>
        <BtnLinkedin/>
        <BtnWhatsapp/>
      </div>
      <p id="footerText">27/10/2023 - Campo Largo / PR</p>
      <p>versão do projeto: 3.7.6</p>
     <div className="copyright">Swygax ©</div> 
    </footer>
  )
}
