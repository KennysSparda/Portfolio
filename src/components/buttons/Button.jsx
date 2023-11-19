export default function Button(props) {
  async function AudioOnMouseDown() {
    var Audio = document.createElement("AUDIO");
    if (Audio.canPlayType("audio/mpeg")) {
      await Audio.setAttribute("src","/audio/mixkit-modern-technology-select-3124.wav");
      Audio.volume = 0.03;
    }
    await Audio.play();
  }
  async function AudioOnMouseHover() {
    var Audio = document.createElement("AUDIO");
    if (Audio.canPlayType("audio/mpeg")) {
      await Audio.setAttribute("src","/audio/mixkit-interface-device-click-2577.wav");
      Audio.volume = 0.03;
    }
    await Audio.play();
  }

  if(props.type == 'linkEx') {
    return (
      <a className="Button"
        id={props.id}
        href={props.path}
        onClick={props.function}
        onMouseEnter={AudioOnMouseDown}
        onMouseDown={AudioOnMouseHover}
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
        onMouseEnter={AudioOnMouseDown}
        onMouseDown={AudioOnMouseHover}
      >
        {props.children}
      </a>
    )
  } else {
    return (
      <button className="Button"
        id={props.id}
        onClick={props.function}
        onMouseEnter={AudioOnMouseDown}
        onMouseDown={AudioOnMouseHover}
      >
        {props.children}
      </button>
    )
  }
}
