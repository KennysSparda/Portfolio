import styled from 'styled-components'

function Btn(props) {

  const Btn = styled.button`
            background: #00ff00;
            color: #ffffff;
            font-size: 20px;
            font-weight: bold;
            border: none;
            border-radius: 10px;
            text-align: 'center';
            height: 100px;
            width: 100px;
            margin: 10px;
        `

  function hoverOn() {
    const Btnhover = styled(Btn)`
      background: #ff0000;
    `
  }

  function hoverOff() {
    const Btnhover = styled(Btn)`
      background: #ff0000;
    `
  }

  
  return <Btn onClick={props.function}
      onMouseEnter={hoverOn}
      onMouseOut={hoverOff}
    >{props.children}</Btn>
}

export default Btn
