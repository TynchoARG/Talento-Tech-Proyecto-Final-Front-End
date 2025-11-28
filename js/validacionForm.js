// FUNCION PARA VALIDAR EL FORMULARIO DE INGRESO
function validarFormulario() {
  const emailAdminValido = "admin@correo.com"; // USER Y PASSWORD DEL ADMINISTRADOR
  const passwdAdminValido = "admin1234";

  const adminEmail = document.getElementById('id_mail').value.trim();
  const adminPasswd = document.getElementById('id_passwd').value.trim();

  ocultarTodosLosErrores();

  // VERIFICAR EMAIL VACÍO
  if (adminEmail === "") {
    mostrarError("empty_email", "El campo email no puede estar vacío");
    return false;
  }

  // VERIFICAR FORMATO EMAIL
  if (!validarFormatoEmail(adminEmail)) {
    mostrarError("format_email", "El formato del email es inválido");
    return false;
  }

  // VERIFICAR PASSWORD VACÍA
  if (adminPasswd === "") {
    mostrarError("empty_psw", "El campo password no puede estar vacío");
    return false;
  }

  // VERIFICAR LAS CREDENCIALES
  if (adminEmail !== emailAdminValido || adminPasswd !== passwdAdminValido) {
    mostrarError("login_error", "Las credenciales no son válidas");
    return false;
  }

  // SI ESTA TODO OK
  return true;
}


// FUNCIONES
function mostrarError(fieldId, message) {
  const el = document.getElementById(fieldId + "_error");
  el.textContent = "❌ " + message;
  el.style.display = "block";
}

function ocultarError(fieldId) {
  document.getElementById(fieldId + "_error").style.display = "none";
}

function ocultarTodosLosErrores() {
  const errores = document.querySelectorAll("[id$='_error']");
  errores.forEach(e => e.style.display = "none");
}

// SE USA REGULAR EXPRESSION PARA VERIFICAR EL FORMATO DE EMAIL
function validarFormatoEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}


// LISTENER al hacer click en el boton ejecuta la funcion de validar formulario
const btnIngresar = document.getElementById('btn_login');
btnIngresar.addEventListener('click', function(event) {
  event.preventDefault();
  console.log("Entramos en el listener");
  if(validarFormulario()) {
    window.location.href = "pages/PanelAdmin.html";
  }
});