
export default function Button(props) {
  function soundOnDown() {
    var hoverAudio = document.createElement("AUDIO");
    if (hoverAudio.canPlayType("audio/mpeg")) {
      hoverAudio.setAttribute("src","/audio/mixkit-modern-technology-select-3124.wav");
    }
    hoverAudio.play()
  }
  function soundOnHover() {
    var hoverAudio = document.createElement("AUDIO");
    if (hoverAudio.canPlayType("audio/mpeg")) {
      hoverAudio.setAttribute("src","/audio/mixkit-interface-device-click-2577.wav");
    }
    hoverAudio.play()
  }
  if(props.type == 'linkEx') {

    return (
      <a className="Button"
        id={props.id}
        href={props.path}
        onClick={props.function}
        onMouseEnter={soundOnHover}
        onMouseDown={soundOnDown} 
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.children}
      </a>
    )
  } else if(props.type == 'linkIn') {
    return (
      <a className="Button"
        id={props.id}
        href={props.path}
        onClick={props.function}
        onMouseEnter={soundOnHover} 
        onMouseDown={soundOnDown} 
      >
        {props.children}
      </a>
    )
  } else {
    return (
      <button className="Button"
        id={props.id}
        onClick={props.function}
        onMouseEnter={soundOnHover} 
        onMouseDown={soundOnDown} 
      >
        {props.children}
      </button>
    )
  }
}
