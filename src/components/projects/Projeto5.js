import Image from 'next/image'
import Button from '../buttons/Button'
import Icon from '../Icon'
export default function Project1() {
  return (
    <div id='galery-project'>
      <h3>Blog Pessoal</h3>
      <Button 
        type='linkEx'
        id="btnStyled"
        path="https://cesiane-and-mayke.vercel.app/">
        <Image className='ProjectImage'
          src='/img/blogpessoal.png'
          alt="Picture of project"
          width={400}
          height={400}
        />
      </Button>
           <p>Projeto feito com</p>
      <Button >
        <Icon type="7"></Icon><strong>NextJS</strong>
      </Button>
      <Button >
            <Icon type="8"></Icon><strong>ReactJS</strong>
      </Button>
      <Button >
        <Icon type="10"></Icon><strong>Javascript</strong>
      </Button>
    </div>
  )
}
