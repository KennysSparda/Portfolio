import Button from './Button'

export default function BtnMenu(props) {
    if (props.isHomeButton) {
      return <Button type='linkEx' id="btnMenu" function={props.function}>{props.children}</Button>
    } else {
      return <Button type='linkIn' id="btnMenu" function={props.function}>{props.children}</Button>
    }
}
