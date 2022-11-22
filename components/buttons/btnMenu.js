import Button from '../Button'

export default function BtnMenu(props) {
  return <Button function={props.function}>{props.children}</Button>
}
