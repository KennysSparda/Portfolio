import Container from '../../components/Container'

export default function Skills() {
  return (
    <div>
      <Container  id='skills'>
        <h2>Habilidades</h2>
      </Container>
      <Container  id='skills'>
        <div>
          <h3>Hard Skills</h3>
          <ul>
            <li><strong>Sistemas operacionais:</strong> Linux e Windows</li>
            <li><strong>Linguagens de programação:</strong> C#, Python, Javascript, ShellScript</li>
            <li><strong>Sistema de versionamento:</strong> Git e Github</li>
            <li><strong>FrontEnd:</strong> HTML, CSS, ( React + NextJS )</li>
            <li><strong>BackEnd:</strong> SQL Server Express, MySQL, SQLite</li>
            <li><strong>Outros:</strong> Pacote Office</li>
          </ul>
        </div>
        <br/>
        <div>
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
        <div>
          <h3>Idiomas</h3>
          <ul>
            <li><strong>Português</strong>: Fluente</li>
            <li><strong>Inglês</strong>: Intermediário</li>
          </ul>
        </div>
      </Container>
    </div>
  )
}
