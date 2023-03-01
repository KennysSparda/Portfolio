/*    Button is the generalization of links and buttons with style and 
 *  protective security 
 *   if explicit declaration type='linkEx' then
 *      it accept link property ex:
 *      <Button type='linkEx' path='/about'>About</Button>
 *   if explicit declaration type='linkIn' then
 *      it accept link property ex:
 *      <Button type='linkIn' path='/about'>About</Button>
 *   else
 *      accept default a function on click it
 *      <Button function='reserve()'>Reserve it!</Button>
 */

export default function Button(props) {
  if(props.type == 'linkEx') {
    function play() {
      var hoverAudio = document.createElement("AUDIO");
      if (hoverAudio.canPlayType("audio/mpeg")) {
        hoverAudio.setAttribute("src","/audio/mixkit-interface-click-hover-1127.wav");
      }
      hoverAudio.play()
    }
    return (
      <a className="Button"
        id={props.id} // Add id="btnStyled" to highlight button
        href={props.path}
        onClick={props.function}
        onMouseEnter={play} 
        // Open in new page
        target="_blank"
        // Security: to prevent malicious attacks from the pages how can you make a link
        rel="noopener noreferrer"
      >
        {props.children}
      </a>
    )
  } else if(props.type == 'linkIn') {
    function play() {
      var hoverAudio = document.createElement("AUDIO");
      if (hoverAudio.canPlayType("audio/mpeg")) {
        hoverAudio.setAttribute("src","/audio/mixkit-interface-click-hover-1127.wav");
      }
      hoverAudio.play()
    }
    return (
      <a className="Button"
        id={props.id} // Add id="btnStyled" to highlight button
        href={props.path}
        onClick={props.function}
        onMouseEnter={play} 
      >
        {props.children}
      </a>
    )
  } else {
    function play() {
      var hoverAudio = document.createElement("AUDIO");
      if (hoverAudio.canPlayType("audio/mpeg")) {
        hoverAudio.setAttribute("src","/audio/mixkit-interface-click-hover-1127.wav");
      }
      hoverAudio.play()
    }
    return (
      <button className="Button"
        id={props.id} // Add id="btnStyled" to highlight button
        onClick={props.function}
        onMouseEnter={play} 
      >
        {props.children}
      </button>
    )
  }
}
