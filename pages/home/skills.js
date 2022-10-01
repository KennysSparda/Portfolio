import Container from '../../components/Container'

export default function Skills() {
  return (
    <div>
      <Container  id='skills'>
        <h2>Habilidades</h2>
      </Container>
      <Container  id='skills'>
        <div>
          <h2>Soft Skills</h2>
          <div id="item">Pró-atividade</div>
          <div id="item">Comunicação</div>
          <div id="item">Solução de problemas</div>
          <div id="item">Trabalho em equipe</div>
          <div id="item">Suportar críticas</div>
          <div id="item">Atitude positiva</div>
        </div>
        <br/>
        <div>
          <h2>Hard Skills</h2>
          <div id="item">Sistemas operacionais: Linux e Windows</div>
          <div id="item">Linguagens de programação: C#, Python, Javascript, ShellScript</div>
          <div id="item">FrontEnd: HTML, CSS, ( React + NextJS )</div>
          <div id="item">BackEnd: SQL Server Express, MySQL, SQLite</div>
          <div id="item">Sistema de versionamento: Git e Github</div>
          <div id="item">Automação de testes: Jest</div>
        </div>
        <br/>
        <div>
          <h2>Idiomas</h2>
          <div id="item"><strong>Português</strong>: Fluente</div>
          <div id="item"><strong>Inglês</strong>: Intermediário</div>
        </div>
      </Container>
    </div>
  )
}
