import { useEffect, useState, useRef } from 'react'
import Container from '../container/Container'
import ProjectModel from './ProjectModel'

export default function Projects() {
  const [dataProjects, setDataProjects] = useState(null)

  useEffect(() => {
    const getDataProjects = async () => {
      const response = await fetch('/projects/projects.json')
      const dataProjectsJson = await response.json() // funcao que faz a solicitacao pro back end vai aqui
      setDataProjects(dataProjectsJson)
    }

    getDataProjects()
  }, [])

  if (!dataProjects) {
    return <Container><h1>CARREGANDO PROJETOS</h1></Container>
  }

  return (
    <div className='allProjects'>
      <Container id='projects'>
        <h2>Projetos</h2>
        <div id='galery' className='galery1'>
        {dataProjects.slice(0, 3).map((project, index) => (
            <ProjectModel
              key={index}
              projectName={project.projectName}
              projectPath={project.projectPath}
              projectImage={project.projectImage}
              projectInfo={project.projectInfo}
            />
          ))}
        </div>
        <div id='galery' className='galery2'>
          {dataProjects.slice(4, 8).map((project, index) => (
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


