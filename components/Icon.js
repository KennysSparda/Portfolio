export default function Icon(props) {
  var icons = [             // Type
    '/ico/github.png',      // 0  github
    '/ico/user.png',        // 1  user
    '/ico/link.png',        // 2  link
    '/ico/whatsapp.png',    // 3  whatsapp
    '/ico/linkedin.png',    // 4  linkedin
    '/ico/menu.png',         // 5  menu
    '/ico/git.png'         // 6  git
  ]
  var ico = icons[props.type]
  return (
    <img id='ico' src={ico}></img>
  )
}