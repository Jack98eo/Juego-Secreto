/*
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego Secreto';

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un numero del 1 al 10';
*/
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
//console.log(numeroSecreto);
function asignarTextoElemento(elemnto, texto){
    let elemntoHTML = document.querySelector(elemnto);
    elemntoHTML.innerHTML = texto;
    return;
}
//alert('Click desde el boton');
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   /*
    console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario);
    console.log(numeroDeUsuario === numeroSecreto);
    */
    console.log(intentos);
   if(numeroDeUsuario === numeroSecreto)
   {
    asignarTextoElemento('p',`Acertaste el numeró en ${intentos}  ${(intentos === 1) ? 'vez':'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
}
   else
   //El usuario no acertó.
   {
    if (numeroDeUsuario > numeroSecreto)
    {
        asignarTextoElemento('p','El numeró secreto es menor');
    }
    else 
    {
        asignarTextoElemento('p','El numeró secreto es mayor');
    }
    intentos++;
    limpiarCaja();
   }
    return;
}

function limpiarCaja()
{
    let valorCaja = document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1;
}
function condicionesIniciales()
{
    asignarTextoElemento('h1', 'Juego Secreto!!');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
}
function reiniciarJuego()
{
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros, generar el numero aleatorio e inicializar el numero de intentos
    condicionesIniciales();
    //Desahabilitar el boton de juego nuevo
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}
condicionesIniciales();
function generarNumeroSecreto()
{
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo)
    {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    }   
     else 
    {
                //si el numero generado esta en la lista
        if (listaNumerosSorteados.includes(numeroGenerado))
            {
                return generarNumeroSecreto();
            }
        else
            {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
            }
    }

    
}