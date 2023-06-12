export default function Container(props) {
  return <section id={props.id}>
      <div 
        className='container'>
        {props.children}
      </div>
    </section>
}
