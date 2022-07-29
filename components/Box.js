function Box(props) {
  return (
    <a
      id="unstyled_box"
      href={props.link}
    >
      {props.children}
    </a>
  )
}

export default Box
