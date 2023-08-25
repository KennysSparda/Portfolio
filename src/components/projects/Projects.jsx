import { useEffect, useState, useRef } from 'react'
import Container from '../container/Container'
import ProjectModel from './ProjectModel'

export default function Projects() {
  const [dataProjects, setDataProjects] = useState(null)

  const scrollContainer1Ref = useRef(null)
  const scrollContainer2Ref = useRef(null)

  useEffect(() => {
    const getDataProjects = async () => {
      const response = await fetch('/projects/projects.json')
      const dataProjectsJson = await response.json()
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

      const scrollContainer2 = scrollContainer2Ref.current
      scrollContainer2.addEventListener('wheel', handleWheel)

      return () => {
        scrollContainer1.removeEventListener('wheel', handleWheel)
        scrollContainer2.removeEventListener('wheel', handleWheel)
      }
    }
  }, [dataProjects])

  if (!dataProjects) {
    return <Container><h1>CARREGANDO PROJETOS</h1></Container>
  }

  return (
    <div>
      <Container id='projects'>
        <h1>Projetos</h1>

        <div id='galery' className='galery1' ref={scrollContainer1Ref}>
          {dataProjects.slice(0, 4).map((project, index) => (
            <ProjectModel
              key={index}
              projectName={project.projectName}
              projectPath={project.projectPath}
              projectImage={project.projectImage}
              projectInfo={project.projectInfo}
            />
          ))}
        </div>
        <div id='galery' className='galery2' ref={scrollContainer2Ref}>
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

