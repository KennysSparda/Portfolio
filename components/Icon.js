export default function Icon(props) {
  var icons = [               // Type
    '/images/github.png',     // 0  github
    '/images/user.png',       // 1  user
    '/images/link.png',       // 2  link
    '/images/whatsapp.png',   // 3  whatsapp
    '/images/linkedin.png']   // 4  linkedin
  var ico = icons[props.type]
  return (
    <img id='ico' src={ico}></img>
  )
}