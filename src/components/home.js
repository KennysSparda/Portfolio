import Container from './Container'
import Button from './buttons/Button'
import Banner from './banner'
import Icon from './Icon'

export default function Home() {
  var links = ["https://github.com/KennysSparda"]


  return (
    <div id="home">
      <Banner/>
      <div id="box">
        <div id="box-left">
          <h2>Olá, meu nome é</h2>
          <h1>Kenny Vargas</h1>
          <h2>e quero me tornar um </h2>
          <h1>programador<strong id="cursor">|</strong></h1>
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
