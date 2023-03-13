export default function Slider(props){
  function playChange() {
    var hoverAudio = document.createElement("AUDIO");
    if (hoverAudio.canPlayType("audio/mpeg")) {
      hoverAudio.setAttribute("src","/audio/mixkit-collect-material-3209.wav");
    }
    hoverAudio.play()
  }
  return (
    <nav>
        <form>
          <label className="switch">
            <input type="checkbox" checked={props.theme} onClick={playChange} onChange={props.setTheme}/>
            <span className="slider"></span>
          </label>
        </form>
    </nav>
  ) 
}
