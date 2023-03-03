import Container from '../../components/Container'
import Button from '../../components/Button'
import Icon from '../../components/Icon'
import Banner from '../../components/banner'

export default function Home() {
  var links = ["https://github.com/KennysSparda"]


  return (
    <Container id='home'>
      <Banner/>
      <div id="home">
        <div id="home-left">
          <h2>Eu sou</h2>
          <h1>Kenny Vargas</h1>
          <h2>Desenvolvedor</h2>
        </div>
        <div id="home-right">
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
     
    </Container>
  )
}
