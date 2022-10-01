export default function Slider(props){

  return (
    <nav>
        <form>
          <label className="switch">
            <input type="checkbox" checked={props.theme} onChange={props.setTheme}/>
            <span className="slider"></span>
          </label>
        </form>
    </nav>
  ) 
}
