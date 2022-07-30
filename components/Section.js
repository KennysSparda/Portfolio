function Section(props) {
  return (
    <section className="layout" id={props.style}>
      {props.children}
    </section>
  )
}

export default Section
