import Box from '../components/Box'

function Header(props) {
  return (
    <header className="header" id="styled_box">
      <Box><strong>Kenny Vargas</strong></Box>
      <div className="header-right">
        <Box link="/">Home</Box>
        <Box link="/contact">Contact</Box>
        <Box link="/about">About</Box >
      </div>
    </header >
  )
}

export default Header
