import Button from '../Button'
export default function Slider(props){

  return (
    <nav>
      <Button>
        <form>
          <label>Modo Escuro</label>
          <label className="switch">
            <input type="checkbox" checked={props.theme} onChange={props.setTheme}/>
            <span className="slider round"></span>
          </label>
        </form>
      </Button>
    </nav>
  ) 
}
