mtsCuadrados(6,1)
mtsCuadrados(6,9)

function areacirculo (diametro)
{
    let radio= diametro/2;
    let area=3,14 * (radio * radio);
    console.log ( "el area del circulo es:" + area)
}




/*let refMytext = document.querySelector("#mytext");

function mostrartexto(){
    refMytext.innerHTML = "soy el nuevo parrafo";
}*/

const inputName = document.querySelector("#inp-nombre");
const outputText = document.querySelector("#salida-saludo");



function saludar(){
    if (inputName.value != ""){
        const saludoCompleto = "hola, me llamo Jarvis, un placer conocerte " + inputName.value;
        outputText.innerHTML = saludoCompleto;
    } else {
        outputText.innerHTML = "Por favor, ingresa tu nombre para empezar."
    }
}
const refTextAnim = document.querySelector('#mytext');
function cambiarColorEjemplo(){
    refTextAnim.classList.toggle('bg-color');
}
/*
function numeroMayor() {
    for(let i=0; i < 4; i++) {
        console.log(i);
    }
}
numeroMayor(4);*/

alert("MariaFlorenciaRuiz");

var nombre = "Maria Florencia";
var apellido = " Ruiz";
console.log(nombre + "" + apellido);


let calcularNumeroMayor = [ 1, 2, 3,4];

function calcularNumeroMayor() {
    calcularNumeroMayor.forEach(ia => 4 {
        console.log(ia + ': es el numero mayor');
    });
}

NumeroMayor(2);

let calcularNumeroMenor = [ 1, 2, 3];

function calcularNumeroMenor() {
    calcularNumeroMenor.forEach(ia => 1 {
        console.log(ia + ': es el numero menor');
    });
}

NumeroMenor(3);

var numero=propt("introduce un numero");
var resultado=parlmpar(numero);
alert("el numero"+numero+"es"+resultado);
fuction parlmpar(numero){
    if (numero%2==0){
        return "par";
    }
    else{
        return"impar";
    }
}

