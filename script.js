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
  const slides = document.querySelectorAll(".slide");
  if(slides.length === 0) return;

  indiceSlide += direccion;

  if(indiceSlide < 0) indiceSlide = slides.length - 1;
  if(indiceSlide >= slides.length) indiceSlide = 0;

  actualizarCarrusel();
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
  if (distancia > 40) {
    moverSlide(1); // swipe izquierda → siguiente
  } else if (distancia < -40) {
    moverSlide(-1); // swipe derecha → anterior
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const indicatorsContainer = document.querySelector(".carousel-indicators");

  if (!slides.length || !indicatorsContainer) return;

  indicatorsContainer.innerHTML = "";

  slides.forEach((_, index) => {
    const dot = document.createElement("span");
    if (index === 0) dot.classList.add("active");

    dot.addEventListener("click", () => {
      indiceSlide = index;
      actualizarCarrusel();
    });

    indicatorsContainer.appendChild(dot);
  });

  actualizarCarrusel();
});

function actualizarCarrusel(){
  const track = document.querySelector(".carousel-track");
  const dots = document.querySelectorAll(".carousel-indicators span");

  track.style.transform = `translateX(-${indiceSlide * 100}%)`;

  dots.forEach(dot => dot.classList.remove("active"));
  if (dots[indiceSlide]) {
    dots[indiceSlide].classList.add("active");
  }
}
