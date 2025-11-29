// -------------------------------------------------
//  VALIDACIÓN DEL FORMULARIO DE LOGIN
// -------------------------------------------------

/*
    La función validarFormulario crea una LISTA (array) llamada "errores".
    Cada vez que detecta un problema, agrega un texto a esa lista.
    Cuando termina, si la lista NO está vacía, se la pasa al modal.
*/


function validarFormulario() {

  // CREDENCIALES DEL ADMIN
  const ADMIN_EMAIL = "admin@correo.com";     
  const ADMIN_PASS  = "admin1234";

  // ENTRADAS DEL FORMULARIO
  const adminEmail  = document.getElementById('id_email').value.trim();
  const adminPasswd = document.getElementById('id_passwd').value.trim();

  // LISTA QUE ALMACENA TODOS LOS ERRORES ENCONTRADOS
  let errores = [];

  // ---------------------------
  // VALIDACIONES INDIVIDUALES
  // ---------------------------

  // Email vacío
  if (adminEmail === "") {
    errores.push("El campo email no puede estar vacío");
  }

  // Email con formato incorrecto (solo si no está vacío)
  if (adminEmail !== "" && !validarFormatoEmail(adminEmail)) {
    errores.push("El formato del email es inválido");
  }

  // Contraseña vacía
  if (adminPasswd === "") {
    errores.push("El campo contraseña no puede estar vacío");
  }

  // Credenciales incorrectas
  if (adminEmail !== ADMIN_EMAIL || adminPasswd !== ADMIN_PASS) {
    errores.push("Las credenciales no son válidas");
  }


// -------------------------------------------------
//  MANEJO DE ERRORES
// -------------------------------------------------
if (errores.length >0) {
  mostrarModalErrores(errores);
  return false;
}

return true;
}

// -------------------------------------------------
//  VALIDACIÓN DE FORMATO DE EMAIL POR REGEX
// -------------------------------------------------

function validarFormatoEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}


// ================================================================
//  FUNCIÓN QUE MUESTRA EL MODAL DE ERRORES
// ================================================================

/*
    El modal tiene un <ul> vacío.
    Esta función recibe la lista de errores y la va agregando
    como <li> uno por uno.
*/

function mostrarModalCompacto(errores) {
  const overlay = document.getElementById("modal-compacto-overlay");
  const lista = document.getElementById("modal-compacto-lista");

  // Limpio el "lista" por si quedó algo previo
  lista.innerHTML = "";

  // Inserto cada error como un <li>
  errores.forEach(err => {
    const li = document.createElement("li");
    li.textContent = err;
    lista.appendChild(li);
  });

  // Muestro el modal (flex lo centra)
  overlay.style.display = "flex";
}

document.getElementById("cerrar-modal").addEventListener("click", () => {
  document.getElementById("modal-compacto-overlay").style.display = "none";
});


// Botón para cerrar el modal
document.getElementById("cerrarModal").addEventListener("click", () => {
    document.getElementById("modalErrores").style.display = "none";
});


// -------------------------------------------------
//  EVENTO DEL BOTÓN DE INGRESO
// -------------------------------------------------

const btnIngresar = document.getElementById('btn_login');

btnIngresar.addEventListener('click', function(event) {
  event.preventDefault();
  console.log("Ejecutando validación...");

    if (validarFormulario()) {
      // Al estar en pages/FormValidAdmin.html, la redirección debe ser relativa a la misma carpeta
      window.location.href = "PanelAdmin.html";
    }
  })