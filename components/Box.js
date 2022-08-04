/*   Box like button but for whatever
 *   
 *   accept styles= {'styled', 'unstyled'}
 *   accept link= {'/home', '/about'}
 */
function Box(props) {

  if(props.type == 'external') {
    return (
      <a
        id={props.style}
        href={props.link}
        onClick={props.function}
        // Open in new page
        target="_blank"
        // Security: to prevent malicious attacks from the pages how can you make a link
        rel="noopener noreferrer"
      >
        {props.children}
      </a>
    )
  } else {
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
}

export default Box
