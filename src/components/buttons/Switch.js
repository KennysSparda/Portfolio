export default function Slider(props){
  function playChange() {
    var Audio = document.createElement("AUDIO");
    if (Audio.canPlayType("audio/mpeg")) {
      Audio.setAttribute("src","/audio/mixkit-collect-material-3209.wav");
      Audio.volume = 0.1;
    }
    Audio.play()
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
