const select = document.querySelector("select");
const parrafo = document.querySelector("p");
const titulo = document.querySelector("h1");

select.addEventListener("change", mostrarCanciones);

function mostrarCanciones() {
  let eleccion = select.value;
  let contenido = eleccion.value;

  switch (eleccion) {
    case 'El cantante':
      titulo.textContent = contenido;
      parrafo.textContent=
        "Yo soy el cantante y hoy han venido a escuchar lo mejor del repertorio"
      
      break;
    case 'De sol a sol':
        titulo.textContent = contenido;
      parrafo.textContent="De sol a sol te tengo presente en mi mentr"
      break;
  }
}
