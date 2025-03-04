const text = "Este é um efeito de digitação!";
let index = 0;
const speed = 100; // Velocidade do efeito em milissegundos
const textElement = document.getElementById("typing-text");

function typeWriter() {
  if (index < text.length) {
    textElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;
