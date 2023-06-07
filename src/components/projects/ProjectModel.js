import Image from 'next/image'
import Button from '../buttons/Button'

export default function ProjectModel(props) {

  return (
    <div id='galery-project'>
      <Button 
        type='linkEx'
        id="btnStyled"
        path={props.projetoPath}>
        <h3>{props.projectName}</h3>
        <Image 
          className='ProjectImage'
          src={props.projectImage}
          alt="Picture of project"
          width={400}
          height={400}
        />
       <p>{props.projectInfo}</p>
      </Button>
     </div>
  )
}
