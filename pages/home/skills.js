import Section from '../../components/Section'

export default function Skills() {
  return (
      <Section id='skills'>
        <h1>Habilidades</h1>
        <div id='styled'>
          <h3>Hard Skills</h3>
          <ui>
            <li><strong>Sistemas operacionais:</strong> Linux e Windows</li>
            <li><strong>Linguagens de programação:</strong> C#, Python, Javascript, ShellScript</li>
            <li><strong>Sistema de versionamento:</strong> Git e Github</li>
            <li><strong>FrontEnd:</strong> HTML, CSS, ( React + NextJS )</li>
            <li><strong>BackEnd:</strong> SQL Server Express, MySQL, SQLite</li>
            <li><strong>Outros:</strong> Pacote Office</li>
          </ui>
        </div>
        <br/>
        <div id='styled'>
          <h3>Soft Skills</h3>
          <ul>
            <li>Comunicação</li>
            <li>Solução de problemas</li>
            <li>Trabalho em equipe</li>
            <li>Suportar críticas</li>
            <li>Atitude positiva</li>
          </ul>
        </div>
        <br/>
        <div id='styled'>
          <h3>Idiomas</h3>
          <ul>
            <li><strong>Português</strong>: Fluente</li>
            <li><strong>Inglês</strong>: Intermediário</li>
          </ul>
        </div>
      </Section>
  )
}
