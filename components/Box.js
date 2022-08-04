/*   Box like button but for whatever
 *   
 *   accept styles= {'styled', 'unstyled'}
 *   accept link= {'/home', '/about'}
 */
function Box(props) {
  return (
    <a
      id={props.style}
      href={props.link}
      onClick={props.function}
    >
      {props.children}
    </a>
  )
}

export default Box
