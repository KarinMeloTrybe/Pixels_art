function selectColor() { //nome para a função
  const colors = document.querySelectorAll(".color"); //criou uma variavel pra chamar uma classe no index que fala as cores da paleta
  for (let index = 0; index < colors.length; index++) { //percorreu cada cor da paleta
    colors[index].addEventListener("click", () => {
      const selectedColor = document.querySelector(".selected")
      selectedColor.classList.remove("selected")
      colors[index].classList.add("selected")
    })
  }
}


//8
function paintColor() { //nome para a função
  const pixels = document.querySelectorAll(".pixel"); //criou uma variavel pra chamar uma classe no index que fala as cores da paleta
  for (let index = 0; index < pixels.length; index++) { //percorreu cada cor da paleta
    pixels[index].addEventListener("click", () => {
      const selectedColor = document.querySelector(".selected")
      pixels[index].classList = `pixel ${selectedColor.classList[1]}` //chamou o segundo item da lista, no caso a segunda classe
    })
  }
}

//9
function clearBoard() { //nome para a função
  const pixels = document.querySelectorAll(".pixel"); //criou uma variavel pra chamar uma classe no index que fala dos pixels
  for (let index = 0; index < pixels.length; index++) { //percorreu cada pixel
    pixels[index].classList = "pixel"

  }
}



//10
function setSize() {
  const inputNumbers = document.querySelector("#board-size")
  const pixelBoard = document.querySelector("#pixel-board")
  let tamanhoDefinido = parseInt(inputNumbers.value)
  if (!tamanhoDefinido) {
    alert("Board inválido!")
    return
  } else if (tamanhoDefinido < 5) {
    tamanhoDefinido = 5
  } else if (tamanhoDefinido > 50) {
    tamanhoDefinido = 50
  }

  pixelBoard.innerHTML = ""
  for (let linha = 0; linha < tamanhoDefinido; linha++) {
    const grade = document.createElement("div")
    grade.classList.add("grade")
    for (let coluna = 0; coluna < tamanhoDefinido; coluna++) {
      const pixel = document.createElement("div")
      pixel.classList.add("pixel")
      grade.appendChild(pixel)
    }
    pixelBoard.appendChild(grade)
  }
}


//11 incluido na 10

//12
function corAleatoria() {
  const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
  document.documentElement.style.setProperty('--color1', `rgb(${randomBetween(0, 255)}, ${randomBetween(0, 255)}, ${randomBetween(0, 255)})`)
  document.documentElement.style.setProperty('--color2', `rgb(${randomBetween(0, 255)}, ${randomBetween(0, 255)}, ${randomBetween(0, 255)})`)
  document.documentElement.style.setProperty('--color3', `rgb(${randomBetween(0, 255)}, ${randomBetween(0, 255)}, ${randomBetween(0, 255)})`)
  document.documentElement.style.setProperty('--color4', `rgb(${randomBetween(0, 255)}, ${randomBetween(0, 255)}, ${randomBetween(0, 255)})`)
}


window.onload = () => {
    selectColor()
    paintColor()
    // corAleatoria()
}