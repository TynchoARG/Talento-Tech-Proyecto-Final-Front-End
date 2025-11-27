// Vamos a identificar con un id al formulario, a los campos (email y psw) 
// y también al botón de Ingresar

//Vamos a extraer los datos de los campos email y psw

//Crear una función que permita comparar el email y psw con los datos válidos
//Utilizamos email y psw hardcodeados.

//Si los datos que ingresa el usuario son correctos, redireccionamos a 
//bienvenida.html

//Caso contrario , mostramos un mensaje de error.

/*
let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let isValid = mail.match(regex);
if (isValid) {
    console.log("Valid email address");
} else {
    console.log("Invalid email address");
}
*/


function validarFormulario() {
  console.log("Función ValidarFormulario Ejecutada");
  const emailAdminValido = "admin@correo.com";
  const passwdAdminValido = "admin1234";

  const adminEmail = document.getElementById('id_mail').value;
  const adminPasswd = document.getElementById('id_passwd').value;

  let esValido = true;

  //Condicionales para validar
  if(adminEmail.length < 1) {
    mostrarError('empty_email', 'El campo email no puede estar vacío');
    esValido = false;
  } else {
    ocultarError('empty_email');
  }

  if(adminPasswd.length < 1) {
    mostrarError('empty_psw', 'El campo password no puede estar vacío');
    esValido = false;
  } else {
    ocultarError('empty_psw');
  }

  if(emailAdminValido !== adminEmail || passwdAdminValido !== adminPasswd) {
    mostrarError('login_error', 'Las credenciales no son válidas');
    esValido = false;
  } else {
    ocultarError('login_error');
  }

  return esValido;

}

function mostrarError(fieldId, message) {
  const errorElement = document.getElementById(fieldId + '_error');
  errorElement.textContent = "❌ " + message;
  errorElement.style.display = 'block';
}

function ocultarError(fieldId) {
  const errorElement = document.getElementById(fieldId + '_error');
  errorElement.style.display = 'none';
}


/*
Agregamos un listener a nuestro botón Ingresar , que al hacer click el usuario
sobre el mismo, se dispare la función de validarForm.
*/
const btnIngresar = document.getElementById('btn_login');
btnIngresar.addEventListener('click', function(event) {
  event.preventDefault;
  console.log("Entramos en el listener");
  if(validarForm()) {
    window.location.href = "pages/bienvenida.html";
  }
});