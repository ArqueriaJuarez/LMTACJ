let indiceSlide = 0;

function abrirModal(src){
  document.getElementById("modalImagen").style.display = "flex";
  document.getElementById("imagenModal").src = src;
  document.getElementById("btnDescargar").href = src;
}

function cerrarModal(){
  document.getElementById("modalImagen").style.display = "none";
}

document.querySelector(".modal").addEventListener("click", e => {
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

setInterval(() => {
  moverSlide(1);
}, 5000);
fetch("https://opensheet.elk.sh/ID_DE_TU_HOJA/Hoja1")
  .then(res => res.json())
  .then(data => {
    const track = document.querySelector(".carousel-track");
    track.innerHTML = "";

    data.forEach(noticia => {
      track.innerHTML += `
        <div class="slide" onclick="abrirModal('${noticia.imagen}')">
          <img src="${noticia.imagen}" alt="${noticia.titulo}">
          <div class="slide-text">
            <h3>${noticia.titulo}</h3>
            <p>${noticia.fecha}</p>
          </div>
        </div>
      `;
    });
  });
