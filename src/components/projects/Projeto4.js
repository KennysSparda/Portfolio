import Image from 'next/image'
import Button from '../buttons/Button'
import Icon from '../Icon'
export default function Project1() {
  return (
    <div id='galery-project'>
      <h3>Contador Sequencial</h3>
      <Image className='ProjectImage'
        src='/img/geradornumeros.png'
        alt="Picture of project"
        width={400}
        height={400}
      />
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
      <br/>
      <Button 
        type='linkEx'
        id="btnStyled"
        path="/projects/SuperContador/index.html">
        <Icon type={2}></Icon>
        Acessar
      </Button>
    </div>
  )
}