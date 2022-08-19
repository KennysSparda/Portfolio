import Button from '../../Button'

export default function BtnMain(props) {
  return <Button function={props.function}>{props.children}</Button>
}
