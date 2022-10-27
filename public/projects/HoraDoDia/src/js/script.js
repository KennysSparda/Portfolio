
function setTime() {
  var txtTime = document.getElementById("txtTime")
  var imgTime = document.getElementById("imgTime")
  var root = document.getElementById("root")

  var now = new Date()
  var hora = now.getHours()

  if ( hora >= 6 && hora < 12 ) {

    txtTime.innerHTML = `Agora são ${hora} horas`
    imgTime.src = "./src/img/day-8bit.jpg"
    root.style.background = "#FAFAD2"

  } else if (hora >= 12 && hora < 18 ) {

    txtTime.innerHTML = `Agora são ${hora} horas`
    imgTime.src = "./src/img/afternoon-8bit.jpg"
    root.style.background = "#FFDAB9"

  } else if (hora >= 18 || hora < 6 ) {

    txtTime.innerHTML = `Agora são ${hora} horas`
    imgTime.src = "./src/img/night-8bit.jpg"
    root.style.background = "#4169E1"

  } else {
    console.log('Erro inesperado 1')
  }
}
