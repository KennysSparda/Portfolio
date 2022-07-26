import styled from 'styled-components'
import Image from 'next/image'
import _plano_fundo from "./img/background.jpg"
import PreviousMap from 'postcss/lib/previous-map'

function Planofundo() {
  // Definindo variável da imagem
  var fundo = () => styled.div`
    background: "#ff0000";
`
  return fundo
}
export default Planofundo
