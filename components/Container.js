/*    Section is the element to put
 *  all contents self related
 */
export default function Container(props) {
  return <section id={props.id}>
    <div 
      className='container'>
      {props.children}
    </div>
  </section>
}