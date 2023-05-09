import Image from 'next/image'
import Button from '../buttons/Button'
import Icon from '../Icon'
export default function Project3() {
  return (
    <div id='galery-project'>
      <h3>Verificador de idade</h3>
      <Button 
        type='linkEx'
        id="btnStyled"
        path="/projects/VerificadorDeIdade/index.html">
      <Image
        className='ProjectImage'
        src='/img/projects/verificadoridade.png'
        alt="Picture of project"
        width={400}
        height={400}
      />
      </Button>

      <p>Projeto feito com</p>
      <Button >
        <Icon type="10"></Icon><strong>Javascript</strong>
      </Button>
      <Button >
        <Icon type="11"></Icon><strong>CSS 3</strong>
      </Button>
      <Button >
        <Icon type="12"></Icon><strong>HTML 5</strong>
      </Button>
    </div>
  )
}
