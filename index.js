function calcularporcentaje(numero, porcentaje){
    return numero / 100 * porcentaje;

}

console.log("el 30% de 300.000 es:" , calcularporcentaje(300000, 30));//30%
console.log("el 20% de 150.000 es:" , calcularporcentaje(150000, 20));//20%

let interes = document.getElementsByClassName("intereses");

console.log(calcularporcentaje);

let arreglo_usuarios = []

function validardatos(){ 

    let nombre = document.getElementById ("nombree");

    let apellido = document.getElementById ("apellidoo");

for (let i = 19; i <= 18; i++) {

    let edadd = document.getElementById ("edadd");

    edadd = parseInt(edadd);

        if (edadd >= 18) {
        prompt("SOS MAYOR DE EDAD, PUEDE SEGUIR: ", edadd);
            break;
    } 
    
        else if (edadd < 18); {
        alert("SOS MENOR DE EDAD, NO PUEDE SEGUIR: ", edadd);
        continue;
    } 
}

    let dni = document.getElementById ("dnii");

    let fecha = document.getElementById ("fechaa");

    let email = document.getElementById ("emaill");

    let tel = document.getElementById ("tell");

    let usuario = {"nombree": nombre.value , "apellidoo": apellido.value , "edadd": edadd.value , "dnii": dni.value , "fechaa": fecha.value , "emaill": email.value , "tell": tel.value};

    //arreglo_usuarios.push(usuario);
    
    //localStorage.setItem("usuario" , arreglo_usuarios);

    let usuario_json = JSON.stringify(usuario);
    console.log(usuario_json);
}

//let boton = document.getElementById("boton");
let btnEnviar = document.getElementById("enviar");
    /* boton validar datos */

    /* Simulación al hacer click al btn validar datos, si esta bien mosrtar el boton para ir al prestamo */
btnEnviar.addEventListener("click", () => {
    let email = document.getElementById("emaill");
    /* acá van todos los getelementByID de los inputs para validar los campos */



    /* condicional para validar todos los datos */
    if (email.value == "" ) {// Si el input de mail esta vacio no se muestra el boton
    boton.style.display = "none";
    } else {//si esta relleno que muestre el boton de ir al prestamo
    boton.style.display = "block";
}
});

btnEnviar.addEventListener("click" , validardatos);

Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Completado Correctamente',
    showConfirmButton: false,
    timer: 1500
})
function pedirprestamo(){

    let banco = document.getElementById("bancoo");

    console.log(banco);
    console.log(banco.checked);

    let monto = document.getElementById("montoo");

    console.log(monto);
    console.log(monto.value);

    let cuota = document.getElementById("cuotass");

    console.log(cuota);
    console.log(cuota.checked);

    let interes = document.getElementById("interess");

    console.log(interes);
    console.log(interes.value);
}

//typeof para buscar un dato en especifico
//length para saber cuantos objetos hay


