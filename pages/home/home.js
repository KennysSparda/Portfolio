import Container from '../../components/Container'
import Button from '../../components/Button'
import Banner from '../../components/banner'
import Icon from '../../components/Icon'

export default function Home() {
  var links = ["https://github.com/KennysSparda"]


  return (
    <div id="home">
      <Banner/>
      <div id="box">
        <div id="box-left">
          <h1>Olá, eu sou</h1>
          <h1>Kenny Vargas</h1>
        </div>
        <div id="box-right">
          <Button 
            type='linkEx'
            id="btnStyled"
            path={links[0]}>
            <Icon type={0}></Icon>
            Github
          </Button>
          <br/>
          <br/>
          <Button 
            type='linkIn'
            id="btnStyled"
            path='/resume'>
            <Icon type={1}></Icon>
            Curriculo
          </Button>
        </div>
      </div>
    </div>
  )
}
