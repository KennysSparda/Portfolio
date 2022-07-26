import Btn from "./Btn.js"

var idHeader = "header_id"

function Cabecalho() {
  return (
    <header id={idHeader}>
      <a src="google.com">Search</a>
      <a src="./index.js">Home</a>
      <Btn>Me Pressione</Btn>
      <Btn>Pressione Ele</Btn>
    </header>
  )
}

export default Cabecalho
