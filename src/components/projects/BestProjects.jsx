import { useEffect, useState, useRef } from 'react'
import Container from '../container/Container'
import ProjectModel from './ProjectModel'
import Button from '../buttons/Button'

export default function BestProjects() {
  const [dataProjects, setDataProjects] = useState(null)

  const scrollContainer1Ref = useRef(null)

  useEffect(() => {
    const getDataProjects = async () => {
      const response = await fetch('/projects/projects.json')
      const dataProjectsJson = await response.json() // funcao que faz a solicitacao pro back end vai aqui
      setDataProjects(dataProjectsJson)
    }

    getDataProjects()
  }, [])

  useEffect(() => {
    if (dataProjects) {
      const handleWheel = (evt) => {
        evt.preventDefault()
        evt.currentTarget.scrollLeft += evt.deltaY
      }

      const scrollContainer1 = scrollContainer1Ref.current
      scrollContainer1.addEventListener('wheel', handleWheel)

      return () => {
        scrollContainer1.removeEventListener('wheel', handleWheel)
      }
    }
  }, [dataProjects])

  if (!dataProjects) {
    return <Container><h1>CARREGANDO PROJETOS</h1></Container>
  }

  return (
    <div>
      <Container id='projects'>
        <div class="headerProjects">
          <h2>Projetos em destaque</h2>
          <Button id="btnStyled" type="linkIn" path="/projects">Todos os projetos</Button>
        </div>
        <div id='galery' className='galery1' ref={scrollContainer1Ref}>
          {dataProjects.map((project, index) => (
            <ProjectModel
            key={index}
            projectName={project.projectName}
            projectPath={project.projectPath}
            projectImage={project.projectImage}
            projectInfo={project.projectInfo}
            />
            ))}
        </div>
      </Container>
    </div>
  )
}
