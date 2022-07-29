function Btn(props) {
  return (
    <a
      id="unstyled_box"
      className={props.active}
      href={props.link}
      onClick={props.function}
    >
      {props.children}
    </a>
  )
}

export default Btn
