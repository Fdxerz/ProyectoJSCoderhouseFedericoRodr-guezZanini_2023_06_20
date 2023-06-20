const roja = document.querySelector('.roja');
const amarilla = document.querySelector('.amarilla');
const verde = document.querySelector('.verde');

function encenderLuz(luz) {
  roja.classList.remove('encendida');
  amarilla.classList.remove('encendida');
  verde.classList.remove('encendida');
  luz.classList.add('encendida');
}

let contador = 1;

setInterval(() => {
  if (contador === 1) {
    encenderLuz(roja);
  } else if (contador === 2) {
    encenderLuz(amarilla);
  } else if (contador === 3) {
    encenderLuz(verde);
  }
  contador = (contador % 3) + 1;
}, 1000);