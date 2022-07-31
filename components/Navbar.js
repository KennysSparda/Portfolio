import Box from './Box'

function Navbar(props) {
  return (
    <header className="navbar" id="styled">
      <Box style='styled' ><strong>Swygax</strong></Box>
      <div className="navbar-right">
        <Box style='unstyled' link="/">Início</Box>
        <Box style='unstyled' link="/projects">Projetos</Box >
        <Box style='unstyled' link="/skills">Habilidades</Box>
        <Box style='unstyled' link="/contact">Contato</Box>
        <Box style='unstyled' link="/about">Sobre</Box >
      </div>
    </header >
  )
}

export default Navbar
