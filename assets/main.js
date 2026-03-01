/* ============================================
   MAIN.JS — JavaScript para index.html
   Illadi Sushi · Landing Page
   ============================================ */


/* ------------------------------------------
   FUNCIÓN: pedirProducto()
   Se llama con onclick desde los botones de
   cada card del menú.
   Muestra un alert con el nombre del producto.
------------------------------------------ */
function pedirProducto(nombreProducto) {
  alert("¡Agregado! 🍣\n\n" + nombreProducto + "\n\nPronto habilitaremos el pedido online completo.\nPor ahora también puedes pedir por WhatsApp o Uber Eats.");
}


/* ------------------------------------------
   FUNCIÓN: abrirRed()
   Se llama con onclick desde los botones de
   redes sociales en el footer.
   Avisa qué red se va a abrir.
------------------------------------------ */
function abrirRed(red) {
  alert("¡Síguenos en " + red + "! 🤙\nPronto tendrás el link directo aquí.");
}


/* ------------------------------------------
   FUNCIÓN: enviarReserva()
   Se llama con onclick del botón "Confirmar
   reserva" en el formulario.

   Pasos:
   1. Captura todos los datos del formulario
   2. Valida que no estén vacíos
   3. Muestra un alert de confirmación
   4. Limpia el formulario
------------------------------------------ */
function enviarReserva() {

  // 1. Capturar datos con getElementById
  var nombre      = document.getElementById("nombre").value;
  var email       = document.getElementById("email").value;
  var telefono    = document.getElementById("telefono").value;
  var personas    = document.getElementById("personas").value;
  var fecha       = document.getElementById("fecha").value;
  var hora        = document.getElementById("hora").value;
  var comentarios = document.getElementById("comentarios").value;

  // 2. Validar campos obligatorios
  if (nombre === "") {
    alert("⚠️ Por favor ingresa tu nombre completo.");
    return;
  }

  if (email === "" || !email.includes("@")) {
    alert("⚠️ Por favor ingresa un correo electrónico válido.");
    return;
  }

  if (telefono === "") {
    alert("⚠️ Por favor ingresa tu número de teléfono.");
    return;
  }

  if (personas === "") {
    alert("⚠️ Por favor selecciona el número de personas.");
    return;
  }

  if (fecha === "") {
    alert("⚠️ Por favor selecciona la fecha de tu visita.");
    return;
  }

  if (hora === "") {
    alert("⚠️ Por favor selecciona la hora de tu reserva.");
    return;
  }

  // 3. Mostrar resumen de confirmación
  alert(
    "✅ ¡Reserva confirmada!\n\n" +
    "👤 Nombre:    " + nombre + "\n" +
    "📧 Correo:    " + email  + "\n" +
    "📱 Teléfono:  " + telefono + "\n" +
    "👥 Personas:  " + personas + "\n" +
    "📅 Fecha:     " + fecha + "\n" +
    "⏰ Hora:      " + hora + "\n\n" +
    (comentarios !== "" ? "💬 Comentarios: " + comentarios + "\n\n" : "") +
    "¡Te esperamos en Illadi Sushi! 🍣"
  );

  // 4. Limpiar formulario después del envío
  document.getElementById("nombre").value      = "";
  document.getElementById("email").value       = "";
  document.getElementById("telefono").value    = "";
  document.getElementById("personas").value    = "";
  document.getElementById("fecha").value       = "";
  document.getElementById("hora").value        = "";
  document.getElementById("comentarios").value = "";
}


/* ------------------------------------------
   EVENTO: Cambio visual del navbar al hacer scroll
   Modifica el estilo del navbar dinámicamente.
   Esto cumple con: "Modificación simple de
   contenido o estilos desde JavaScript"
------------------------------------------ */
window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");

  if (window.scrollY > 80) {
    // Al bajar: más compacto con sombra
    navbar.style.padding    = "4px 0";
    navbar.style.boxShadow  = "0 4px 20px rgba(123, 45, 139, 0.25)";
  } else {
    // Al subir: vuelve al estilo original
    navbar.style.padding    = "8px 0";
    navbar.style.boxShadow  = "none";
  }
});
