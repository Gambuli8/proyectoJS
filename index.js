
/*
let nombre_usuario = document.getElementsByClassName("nombree");
console.log("el nombre ingresado es " + nombre_usuario);
let apellido_usuario = prompt("ingresar apellido");
alert("el apellido ingresado es " + apellido_usuario);

for (let i = 16; i <= 18; i++) {

    let EDAD_usuario = prompt("ingrese edad");

    EDAD_usuario = parseInt(EDAD_usuario);

        if (EDAD_usuario >= 18) {
        alert("SOS MAYOR DE EDAD, PUEDE SEGUIR: ", EDAD_usuario);
            break;
    } 
    
        else if (EDAD_usuario < 18); {
        alert("SOS MENOR DE EDAD, NO PUEDE SEGUIR: ", EDAD_usuario);
        continue;
    } 
}
function pedirdni() {
let DNI_usuario = prompt("ingresar DNI");
alert("el DNI ingresado es " + DNI_usuario);
}
    pedirdni();

function pedirfecha() {
let nacimiento_usuario = prompt("ingresar fecha de nacimiento");
alert("la fecha de nacimiento ingresada es " + nacimiento_usuario);
}
    pedirfecha();

function pedirMail() {
    let EMAIL_usuario = prompt("ingresar email");
    alert("el email ingresado es " + EMAIL_usuario);
}
    pedirMail();

function pedirtel() {
    let tel_usuario = prompt("ingresar telefono");
    alert("el tel ingresado es " + tel_usuario);
}
    pedirtel();

function usuario(nombre , apellido , edad , dni , nacimiento , email , telefono){

    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.dni = dni;
    this.nacimiento = nacimiento; 
    this.email = email;
    this.telefono = telefono;

}
*/
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

function iralprestamo(){ 

    let nombre = document.getElementsByClassName("nombree");

    console.log( nombre);
    console.log("bienvenido al sistema: " , nombre.value );

    let apellido = document.getElementsByClassName("apellidoo");

console.log( apellido );
console.log("bienvenido al sistema: " , apellido.value );

let edad = document.getElementsByClassName("edadd");

console.log( edad );
console.log("bienvenido al sistema: " , edad.value );

let dni = document.getElementsByClassName("dnii");

console.log( dni );
console.log("bienvenido al sistema: " , dni.value );

let fecha = document.getElementsByClassName("fechaa");

console.log( fecha );
console.log("bienvenido al sistema: " , fecha.value );

let email = document.getElementsByClassName("emaill");

console.log( email );
console.log("bienvenido al sistema: " , email.value );

let tel = document.getElementsByClassName("tell");

console.log( tel );
console.log("bienvenido al sistema: " , tel.value );

}

function pedirprestamo(){

    let monto = document.getElementsByClassName("montoo");

    console.log(monto);
    console.log(monto.value);

    let cuota = document.getElementsByClassName("cuotass");

    console.log(cuota);
    console.log(cuota.value);

    let interes = document.getElementsByClassName("interess");

    console.log(interes);
    console.log(interes.value);
}

