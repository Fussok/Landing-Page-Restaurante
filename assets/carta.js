/* ============================================
   CARTA.JS — JavaScript para carta.html
   Illadi Sushi · Carta Completa
   ============================================ */


/* ------------------------------------------
   FUNCIÓN: agregarPlato()
   Se llama con onclick desde los botones
   "+ Agregar" de cada plato en la carta.
   Muestra un alert con el nombre del plato.
------------------------------------------ */
function agregarPlato(nombre) {
  alert("¡Agregado! 🍣\n" + nombre + "\n\nPor ahora puedes hacer tu pedido por:\n• WhatsApp\n• Uber Eats\n• tienda.illadi.cl");
}


/* ------------------------------------------
   FUNCIÓN: filtrarCategoria()
   Se llama con onclick desde los botones de
   filtro en la parte superior de la carta.

   Pasos:
   1. Quita la clase "activo" de todos los botones
   2. Pone "activo" en el botón clickeado
   3. Muestra u oculta secciones según la categoría
   4. Limpia el buscador
------------------------------------------ */
function filtrarCategoria(categoria, boton) {

  // 1. Resetear todos los botones de filtro
  var botones = document.querySelectorAll(".btn-filtro");
  botones.forEach(function (b) {
    b.classList.remove("activo");
  });

  // 2. Marcar el botón activo
  boton.classList.add("activo");

  // 3. Mostrar/ocultar secciones
  var secciones = document.querySelectorAll(".seccion-categoria");
  secciones.forEach(function (seccion) {
    if (categoria === "todas") {
      seccion.style.display = "block";
    } else if (seccion.getAttribute("data-categoria") === categoria) {
      seccion.style.display = "block";
    } else {
      seccion.style.display = "none";
    }
  });

  // 4. Limpiar el buscador y el mensaje de sin resultados
  document.getElementById("buscador").value          = "";
  document.getElementById("sin-resultados").style.display = "none";
}


/* ------------------------------------------
   FUNCIÓN: buscarPlato()
   Se llama con oninput desde el input de
   búsqueda. Filtra platos en tiempo real.

   Pasos:
   1. Obtiene el texto del input (en minúsculas)
   2. Muestra todas las secciones para buscar en todo
   3. Recorre cada card y la muestra/oculta
   4. Si no hay resultados, muestra mensaje
------------------------------------------ */
function buscarPlato() {

  // 1. Obtener texto ingresado
  var texto = document.getElementById("buscador").value.toLowerCase();

  // 2. Mostrar todas las secciones para buscar en toda la carta
  var secciones = document.querySelectorAll(".seccion-categoria");
  secciones.forEach(function (sec) {
    sec.style.display = "block";
  });

  // Resetear botones de filtro visualmente
  var botones = document.querySelectorAll(".btn-filtro");
  botones.forEach(function (b) {
    b.classList.remove("activo");
  });
  document.querySelector(".btn-filtro").classList.add("activo"); // "Todas" es el primero

  // 3. Filtrar cada tarjeta de plato
  var tarjetas   = document.querySelectorAll(".plato-card");
  var resultados = 0;

  tarjetas.forEach(function (card) {
    var nombrePlato = card.querySelector(".plato-nombre").textContent.toLowerCase();
    var descPlato   = card.querySelector(".plato-descripcion").textContent.toLowerCase();

    if (nombrePlato.includes(texto) || descPlato.includes(texto)) {
      // Mostrar: su columna padre (el div.col-...)
      card.closest("[class^='col']").style.display = "";
      resultados++;
    } else {
      // Ocultar
      card.closest("[class^='col']").style.display = "none";
    }
  });

  // 4. Mostrar mensaje si no encontró nada
  var sinResultados = document.getElementById("sin-resultados");
  if (texto !== "" && resultados === 0) {
    sinResultados.style.display = "block";
  } else {
    sinResultados.style.display = "none";
  }
}
