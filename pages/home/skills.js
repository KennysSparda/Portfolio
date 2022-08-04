import Section from '../../components/Section'

function Skills() {
  return (
      <Section id='skills'>
        <h1>Habilidades</h1>
        <h3>Hard Skills</h3>
        <ui>
          <li><strong>Sistemas operacionais:</strong> Linux e Windows</li>
          <li><strong>Linguagens de programação:</strong> C#, Python, Javascript, ShellScript</li>
          <li><strong>Sistema de versionamento:</strong> Git e Github</li>
          <li><strong>FrontEnd:</strong> HTML, CSS, ( React + NextJS )</li>
          <li><strong>BackEnd:</strong> SQL Server Express, MySQL, SQLite</li>
          <li><strong>Outros:</strong> Pacote Office</li>
        </ui>

        <h3>Soft Skills</h3>
        <ul>
          <li>Comunicação</li>
          <li>Solução de problemas</li>
          <li>Trabalho em equipe</li>
          <li>Suportar Críticas</li>
          <li>Atitude positiva</li>
        </ul>

        <h3>Idiomas</h3>
        <li><strong>Português</strong>: Nativo</li>
        <li><strong>Inglês</strong>: Intermediário</li>
      </Section>
  )
}

export default Skills
