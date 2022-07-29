import Btn from '../components/Btn'

function Header(props) {
  return (
    <header className="header" id="styled_box" >
      <Btn link="#defaut">Kenny Vargas</Btn>
      <div className="header-right">
        <Btn active="active" link="/">Home</Btn>
        <Btn active="desactive" link="/contact">Contact</Btn>
      </div>
    </header >
  )
}

export default Header
