
let arreglo_usuarios = [];

function validardatos() {
  let nombre = document.getElementById("nombree");

  let apellido = document.getElementById("apellidoo");

  for (let i = 19; i <= 18; i++) {
    let edadd = document.getElementById("edadd");

    edadd = parseInt(edadd);

    if (edadd >= 18) {
      prompt("SOS MAYOR DE EDAD, PUEDE SEGUIR: ", edadd);
      break;
    } else if (edadd < 18);
    {
      alert("SOS MENOR DE EDAD, NO PUEDE SEGUIR: ", edadd);
      continue;
    }
  }

  let dni = document.getElementById("dnii");

  let fecha = document.getElementById("fechaa");

  let email = document.getElementById("emaill");

  let tel = document.getElementById("tell");

  let usuario = {
    nombree: nombre.value,
    apellidoo: apellido.value,
    edadd: edadd.value,
    dnii: dni.value,
    fechaa: fecha.value,
    emaill: email.value,
    tell: tel.value,
  };

  //arreglo_usuarios.push(usuario);

  //localStorage.setItem("usuario" , arreglo_usuarios);

  let usuario_json = JSON.stringify(usuario);
  console.log(usuario_json);
  return usuario;
}

//let boton = document.getElementById("boton");
let btnEnviar = document.getElementById("enviar");
/* boton validar datos */

/* Simulación al hacer click al btn validar datos, si esta bien mosrtar el boton para ir al prestamo */
btnEnviar.addEventListener("click", () => {
  /* variables con datos */
  let nombre = document.getElementById("nombree");
  let apellido = document.getElementById("apellidoo");
  let edadd = document.getElementById("edadd");
  let dni = document.getElementById("dnii");
  let fecha = document.getElementById("fechaa");
  let email = document.getElementById("emaill");
  let tel = document.getElementById("tell");

  /* Bandera para verificar si los datos fueron correctos */
  let bandera = true;

  /* valido los campos */
  if (nombre.value == "") {
    document.getElementById("nombree");
    return bandera == false;
  }
  if (apellido.value == "") {
    document.getElementById("apellidoo");
    return bandera == false;
  }
  if (edadd.value == 0) {
    document.getElementById("edadd");
    return bandera == false;
  }
  if (dni.value == 0) {
    document.getElementById("dnii");
    return bandera == false;
  }
  if (fecha.value == 0) {
    document.getElementById("fechaa");
    return bandera == false;
  }
  if (email.value == "") {
    document.getElementById("emaill");
    return bandera == false;
  }
  if (tel.value == 0) {
    document.getElementById("tell");
    return bandera == false;
  } 

  /* Condicional, si es Verdadero envia a la siguiente pagina */
  if (bandera) {
    /* libreria */
    Swal.fire({
      title: "Completado Correctamente",
      text: "Click en el boton, para ir al prestamo",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#68ddbd",
      cancelButtonColor: "#d33",
      confirmButtonText: "Pedir Prestamo",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(setInterval(location.assign("seccion2.html")));
      }
    });
  }
});

function pedirprestamo() {
  let banco = document.getElementById("bancoo");

  //console.log(banco);
  //console.log(banco.checked);

  let monto = document.getElementById("montoo");

  //console.log(monto);
  //console.log(monto.value);

  let cuota = document.getElementById("cuotass");

  //console.log(cuota);
  //console.log(cuota.checked);


  function calcular_iva(precio){

    let iva = precio * 0.21;
    return iva
  
  }
  
  let precio = document.getElementById("montoo");
  
  let precio_mas_iva = precio + calcular_iva(precio)
  document.getElementById("ivaa: ", precio_mas_iva);

}

calcular_iva("ivaa");

//typeof para buscar un dato en especifico
//length para saber cuantos objetos hay
/*
function calcularporcentaje(numero, porcentaje) {
  return (numero / 100) * porcentaje;
}

calcularporcentaje = Document.getElementById("interess")

console.log(calcularporcentaje (100000, 25));


//console.log("el 30% de 300.000 es:", calcularporcentaje(300000, 30)); //30%
//console.log("el 20% de 150.000 es:", calcularporcentaje(150000, 20)); //20% */
/*
function calcular_iva(precio){

  let iva = precio * 0.21;
  return iva

}

let precio = document.getElementById("montoo");

let precio_mas_iva = precio + calcular_iva(precio)
console.log("el precio mas iva es: ", precio_mas_iva)
*/

