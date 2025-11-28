// -------------------------------------------------
//  VALIDACIÓN DEL FORMULARIO DE LOGIN
// -------------------------------------------------

function validarFormulario() {
  const ADMIN_EMAIL = "admin@correo.com";      // CREDENCIALES DEL ADMIN
  const ADMIN_PASS  = "admin1234";

  const adminEmail  = document.getElementById('id_email').value.trim();
  const adminPasswd = document.getElementById('id_passwd').value.trim();

  let esValido = true;
  
  // EMAIL VACÍO
  if (adminEmail === "") {
    mostrarError("email_vacio_error", "El campo email no puede estar vacío");
    esValido = false;
  } else {
    ocultarError('email_vacio_error');
  }


  // FORMATO DE EMAIL
  if (!validarFormatoEmail(adminEmail)) {
    mostrarError("email_format_error", "El formato del email es inválido");
    esValido = false;
  } else {
    ocultarError('email_format_error');
  }

  // PASSWORD VACÍA
  if (adminPasswd === "") {
    mostrarError("passwd_vacio_error", "El campo contraseña no puede estar vacío");
    esValido = false;
  } else {
    ocultarError('passwd_vacio_error');
  }

  // CREDENCIALES INCORRECTAS
  if (adminEmail !== ADMIN_EMAIL || adminPasswd !== ADMIN_PASS) {
    mostrarError("login_error", "Las credenciales no son válidas");
    esValido = false;
  } else {
    ocultarError('login_error');
  }

  // SI TODO ESTÁ OK
  return esValido;
}


// -------------------------------------------------
//  MANEJO DE ERRORES
// -------------------------------------------------

// MUESTRA UN MENSAJE DE ERROR EN UN ELEMENTO
function mostrarError(id, message) {
  const el = document.getElementById(id);
  el.textContent = "❌ " + message;
  el.style.display = "block";
}


function ocultarError(Id) {
  const errorElement = document.getElementById(Id);
  errorElement.style.display = 'none';
}

// -------------------------------------------------
//  VALIDACIÓN DE FORMATO DE EMAIL POR REGEX
// -------------------------------------------------

function validarFormatoEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}


// -------------------------------------------------
//  EVENTO DEL BOTÓN DE INGRESO
// -------------------------------------------------

const btnIngresar = document.getElementById('btn_login');
btnIngresar.addEventListener('click', function(event) {
  event.preventDefault();
  console.log("Ejecutando validación...");

  if (validarFormulario()) {
    window.location.href = "pages/PanelAdmin.html";
  }
});