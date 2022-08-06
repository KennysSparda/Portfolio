/*    Section is the element to put
 *  all contents self related
 */
export default function Section(props) {
  return (
    <div id={props.id}>
      <section id='layout'>
        {props.children}
      </section>
    </div>
  )
}
