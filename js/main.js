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

function hacerReserva(reserva1, hotel) {
  alert("¡Tu reserva en " + hotel + " se ha realizado exitosamente!");
  console.log("Datos de tu reserva:" + hotel, reserva1);
  seleccionarOperacion();
}

function seleccionarHotel(reserva1) {
  console.log("1: Caribbean Coast Hotel");
  console.log("2: Varadero Hotel");
  console.log("3: Volver");
  console.log("===================================");

  let hotel = prompt("Elige un hotel:");
  switch (hotel) {
    case "1":
      console.log("Elegiste Caribbean Coast Hotel");
      hacerReserva(reserva1, hotel);
      break;

    case "2":
      console.log("Elegiste Varadero Hotel");
      hacerReserva(reserva1, hotel);
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
      class Reserva {
        constructor(destino, entrada, salida, adultos, menores, habitacion) {
          this.destino = destino;
          this.entrada = entrada;
          this.salida = salida;
          this.adultos = adultos;
          this.menores = menores;
          this.habitacion = habitacion;
        }
      }

      console.log("===================================");
      let listadoDestinos = [
        "Punta Cana",
        "Cancún",
        "Los Roques",
        "Rio de Janeiro",
        "Isla de Margarita",
      ];
      console.log(listadoDestinos);

      let destino = prompt("Indique destino del Caribe");
      while (destino != listadoDestinos[0]) {
        alert("Destino no disponible");
        destino = prompt("Indique destino del Caribe");
      }

      let entrada = Number(prompt("Indique su fecha de entrada"));
      let salida = Number(prompt("Indique su fecha de salida"));
      let adultos = Number(prompt("Cantidad de adultos"));
      let menores = Number(prompt("Cantidad de menores"));
      let habitacion = Number(prompt("Cantidad de habitaciones"));

      let reserva1 = new Reserva(
        destino,
        entrada,
        salida,
        adultos,
        menores,
        habitacion
      );

      console.log("===================================");
      console.log(reserva1);
      console.log("===================================");
      seleccionarHotel(reserva1);
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

alert("¡Te damos la bienvenida a Booking Caribbean!");
iniciarSesion();
