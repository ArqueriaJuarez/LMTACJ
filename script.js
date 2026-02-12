let indiceSlide = 0;

function abrirModal(src){
  document.getElementById("modalImagen").style.display = "flex";
  document.getElementById("imagenModal").src = src;
  document.getElementById("btnDescargar").href = src;
}

function cerrarModal(){
  document.getElementById("modalImagen").style.display = "none";
}

const modal = document.querySelector(".modal");
if(modal){
  modal.addEventListener("click", e => {
    if (e.target.classList.contains("modal")) cerrarModal();
  });
}

function moverSlide(direccion){
  const track = document.querySelector(".carousel-track");
  const slides = document.querySelectorAll(".slide");

  if(!track || slides.length === 0) return;

  indiceSlide += direccion;

  if(indiceSlide < 0) indiceSlide = slides.length - 1;
  if(indiceSlide >= slides.length) indiceSlide = 0;

  track.style.transform = `translateX(-${indiceSlide * 100}%)`;
}


setInterval(() => {
  moverSlide(1);
}, 5000);
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const slides = document.querySelectorAll(".slide");

  if(!track || slides.length === 0) return;

  track.style.transform = "translateX(0)";
});
// === SOPORTE SWIPE PARA CELULAR ===
let startX = 0;
let endX = 0;

const carousel = document.querySelector(".carousel");

if (carousel) {
  carousel.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
  });

  carousel.addEventListener("touchend", e => {
    endX = e.changedTouches[0].clientX;
    manejarSwipe();
  });
}

function manejarSwipe() {
  const distancia = startX - endX;

  // Sensibilidad (entre 40 y 70 es ideal)
  if (distancia > 50) {
    moverSlide(1); // swipe izquierda → siguiente
  } else if (distancia < -50) {
    moverSlide(-1); // swipe derecha → anterior
  }
}

