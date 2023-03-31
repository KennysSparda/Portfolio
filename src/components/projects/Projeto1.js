import Image from 'next/image'
import Button from '../buttons/Button'
import Icon from '../Icon'
export default function Project1() {
  return (
    <div id='galery-project'>
      <h3>Calculadora</h3>
      <Button 
        type='linkEx'
        id="btnStyled"
        path="/projects/Calculadora/index.html">
        <Image 
          className='ProjectImage'
          src='/img/calculadora.png'
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
