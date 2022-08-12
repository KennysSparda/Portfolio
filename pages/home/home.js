import Container from '../../components/Container'
import Button from '../../components/Button'
import Icon from '../../components/Icon'

export default function Home() {
  var links = ["https://github.com/KennysSparda"]

  return (
    <Container id='home'>
        <h1 id='start' >Hello world.
            My name is Kenny.</h1>
        <p>Me chamo Kenny Vargas e estudo programação por conta própria.</p>
        <p>Gosto de aprender coisas novas!</p>
        <Button type='linkEx'
                path={links[0]}>
                <Icon type={0}></Icon>
                Github
        </Button>
        <br/>
        <br/>
        <Button type='linkIn'
                path='/resume'>
                <Icon type={1}></Icon>
                Curriculo
        </Button>
    </Container>
  )
}
