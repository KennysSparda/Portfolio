import Button from './buttons/Button'

export default function BtnAbout(props) {
  return <Button type='linkIn' path="/#about" function={props.function}>Sobre</Button>
}
