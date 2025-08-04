/*
let titulo = document.querySelector('h1');
titulo.innerHTML = "Juego del número secreto";

let parrafo = document.querySelector('p');
parrafo.innerHTML = "Indica un número del 1 al 10";

function intentoDeUsuario(){
    alert("Click en el botón");
}
*/


let numeroSecreto = 0;
let contador = 1;
let numeroMaximo = 10;
let listaNumeroSecreto = [];



function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${contador} ${contador === 1 ? "intento" : "intentos"}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else{
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p',"Incorrecto, el número es menor");
        }else{
            asignarTextoElemento('p',"Incorrecto, el número es mayor");
        }
        contador++;
        limpiarCaja();
    }
}

function limpiarCaja(){
    document.getElementById('valorUsuario').value = '';
}

function condicionesIniciales(){
    asignarTextoElemento('h1',"Juego del número secreto");
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    limpiarCaja();
    numeroSecreto = generarNumeroSecreto();
    contador = 1;
}

function reiniciarJuego(){
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled','true');
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumeroSecreto);
    if(listaNumeroSecreto.length == numeroMaximo){
        asignarTextoElemento('p',"Ya se sortearon todos los números psoibles");
    }else{
        if (listaNumeroSecreto.includes(numeroGenerado)){
        return generarNumeroSecreto();
        }else{
            listaNumeroSecreto.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}

condicionesIniciales();

/*
//Desafio Listas
//1:
let listaGenerica = [];

//2:
let lenguajesDeProgramacion = ['JavaScript','C','C++','Kotlin','Python'];

//3:
lenguajesDeProgramacion.push('Java');
lenguajesDeProgramacion.push('Ruby');
lenguajesDeProgramacion.push('GoLang');

//4:
function mostrarLista(){
    console.log(lenguajesDeProgramacion);
}
mostrarLista();

//5:
function mostrarListaInversa(){
    console.log(lenguajesDeProgramacion.reverse());
}
mostrarListaInversa();

//6:
let notas = [5, 6, 7, 4, 3, 6, 2, 7];
function calcularPromedio(){
    let sumaNotas = notas.reduce((acumulador, notaActual) => acumulador + notaActual, 0);
    let promedio = sumaNotas / notas.length;
    console.log(`El promedio es: ${promedio}`);
}
calcularPromedio();

//7:
function notaGrandeyPequenia(){
    let notaMasGrande = Math.max(...notas);
    let notaMasPequenia = Math.min(...notas);
    console.log(`La nota más grande es ${notaMasGrande} y la más pequeña es ${notaMasPequenia}`);
}
notaGrandeyPequenia();

//8:
function sumaLista(){
    let sumaNotas = notas.reduce((acumulador, notaActual) => acumulador + notaActual, 0);
    console.log(`La suma de notas da: ${sumaNotas}`);
}
sumaLista();

//9:
function encuentraNumero(numeroBuscar){
        
}
*/
