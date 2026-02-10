<script>
let indiceSlide = 0;

function abrirModal(src){
  document.getElementById("modalImagen").style.display="flex";
  document.getElementById("imagenModal").src=src;
  document.getElementById("btnDescargar").href=src;
}

function cerrarModal(){
  document.getElementById("modalImagen").style.display="none";
}

document.getElementById("modalImagen").parentElement.addEventListener("click", e => {
  if (e.target.classList.contains("modal")) cerrarModal();
});

function moverSlide(direccion){
  const track = document.querySelector(".carousel-track");
  const slides = document.querySelectorAll(".slide");

  indiceSlide += direccion;

  if(indiceSlide < 0) indiceSlide = slides.length - 1;
  if(indiceSlide >= slides.length) indiceSlide = 0;

  track.style.transform = `translateX(-${indiceSlide * 100}%)`;
}
  let intervalo = setInterval(() => {
  moverSlide(1);
}, 5000); // cambia cada 5 segundos  
</script>
