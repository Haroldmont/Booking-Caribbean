function salir() {
  alert("Fin de la operación");
}

function verReservas() {
  alert("No tienes reservas hechas.");
  seleccionarOperacion();
}

function volver() {
  seleccionarOperacion();
}

function hacerReserva(llegada, salida, hotel) {
  alert("¡Tu reserva se ha realizado exitosamente!");
  console.log(
    "Tienes una reserva en " +
      hotel +
      " desde el " +
      llegada +
      " hasta el " +
      salida +
      " del próximo mes"
  );
  seleccionarOperacion();
}

function seleccionarHotel(llegada, salida) {
  console.log("1: Caribbean Coast Hotel");
  console.log("2: Varadero Hotel");
  console.log("3: Volver");

  let hotel = prompt("Elige un hotel:");
  switch (hotel) {
    case "1":
      console.log("Elegiste Caribbean Coast Hotel");
      hacerReserva(llegada, salida, hotel);
      break;

    case "2":
      console.log("Elegiste Varadero Hotel");
      hacerReserva(llegada, salida, hotel);
      break;

    case "3":
      volver();
      break;

    default:
      console.log("Operación inválida.");
  }
}

function seleccionarOperacion() {
  console.log("1: Hacer una reserva");
  console.log("2: Ver mis reservas");
  console.log("3: Salir");

  let operacion = prompt("Ingresa una opción: ");
  switch (operacion) {
    case "1":
      let llegada = Number(prompt("Fecha de llegada: "));
      console.log("Su fecha de llegada es el " + llegada);
      let salida = Number(prompt("Fecha de salida: "));
      console.log("Su fecha de salida es el " + salida);
      seleccionarHotel(llegada, salida);
      break;

    case "2":
      verReservas();
      break;

    case "3":
      salir();
      break;

    default:
      console.log("Operación inválida.");
  }
}

function validarContraseña(contraseña) {
  if (contraseña === "0809") {
    seleccionarOperacion();
  } else {
    alert("Contraseña inválida.");
    console.log("Prueba con 0809");
  }
}

function ingresarContraseña(usuario) {
  if (usuario === "hamont") {
    let contraseña = prompt("Ingresa tu contraseña: ");
    validarContraseña(contraseña);
  } else {
    alert("Nombre de usuario inválido.");
    console.log("Prueba con hamont");
  }
}

function ingresarUsuario(cuenta) {
  if (cuenta) {
    let usuario = prompt("Ingresa tu nombre de usuario: ");
    ingresarContraseña(usuario);
  } else {
    alert("Es necesaria una cuenta de usuario.");
  }
}

function iniciarSesion() {
  let cuenta = confirm("¿Tiene cuenta de usuario?");
  ingresarUsuario(cuenta);
}

alert("¡Te damos la bienvenida a Reservas del Caribe!");
iniciarSesion();
