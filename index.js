/*
let usuario_uno = new usuario ("pepe" , "lopez" , 30 , "38.999.764");
let usuario_dos = new usuario ("lucas" , "rodriguez" , "32" , "38.432.875" , "26/04/1990" , "lucasrodriguez@gmail.com" , "355-327489");



console.log("el nombre del usuario 1 es:" , usuario_uno.nombre);
console.log("el apellido del usuario 1 es:" , usuario_uno.apellido);
console.log("la edad del usuario 1 es:" , usuario_uno.edad);

console.log("el dni del usuario 2 es:" , usuario_dos.dni);
console.log("el telefono del usuario 2 es:" , usuario_dos.telefono);
console.log("la email del usuario 2 es:" , usuario_dos.email);
*/

function calcularporcentaje(numero, porcentaje){
    return numero / 100 * porcentaje;

}

console.log("el 30% de 300.000 es:" , calcularporcentaje(300000, 30));//30%
console.log("el 20% de 150.000 es:" , calcularporcentaje(150000, 20));//20%

let interes = document.getElementsByClassName("intereses");

console.log(calcularporcentaje);

function iralprestamo(){ 

    let nombre = document.getElementById ("nombree");

    console.log( nombre);
    console.log("bienvenido al sistema: " , nombre.value );

    let apellido = document.getElementById ("apellidoo");

console.log( apellido );

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
console.log( edadd );

let dni = document.getElementById ("dnii");
console.log( dni );


let fecha = document.getElementById ("fechaa");
console.log( fecha );

let email = document.getElementById ("emaill");
console.log( email );

let tel = document.getElementById ("tell");
console.log( tel );
}

function pedirprestamo(){

    let banco = document.getElementById("bancoo").checked;

    console.log(banco);
    console.log(banco.checked);

    let monto = document.getElementById("montoo");

    console.log(monto);
    console.log(monto.value);

    let cuota = document.getElementById("cuotass").checked;

    console.log(cuota);
    console.log(cuota.checked);

    let interes = document.getElementById("interess");

    console.log(interes);
    console.log(interes.value);
}

