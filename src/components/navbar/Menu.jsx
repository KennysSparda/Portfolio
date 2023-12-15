import ButtonHome from '../buttons/btnHome'
import BtnAbout from '../buttons/btnAbout'
import BtnProjects from '../buttons/btnProjects'
import Button from '../buttons/Button'

export default function Menu(props) {
  return (
    <nav className="menu"> 
      <ButtonHome function={props.function}/>
      <BtnProjects function={props.function} navbar={true} />
      <BtnAbout function={props.function}/>
      <Button function={props.muteFunction}>
        {props.muteVar ?
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-volume-mute-fill" viewBox="0 0 16 16">
          <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z"/>
        </svg>
        :
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-music-note-beamed" viewBox="0 0 16 16">
          <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2m9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2"/>
          <path fill-rule="evenodd" d="M14 11V2h1v9zM6 3v10H5V3z"/>
          <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4z"/>
        </svg>
        }
      </Button>
    </nav>
  )
}
