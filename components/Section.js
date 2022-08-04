function Section(props) {
  return (
    <div id={props.id}>
      <section className="layout" id={props.style}>
        {props.children}
      </section>
    </div>
  )
}

export default Section
