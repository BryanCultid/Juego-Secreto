let numeroSecreto = 0;
let intentos = 1;
let listaNumeroSorteados = [];
let numeroMaximo = 10;



condicionesIniciales();



//--------------------------------------------------------------------------------------------------------------
//                                    BOTON INTENTAR
//----------------------------------------------------------------------------------------------------------------
 function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto){ 
       AsignarTextoElemento ('p', `Felicidades acertaste en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos' } :D¡`);
       document.getElementById('reiniciar').removeAttribute('disabled');

      }else {
           //aquí es cuando el usuario no acierta // 
         
      if (numeroDeUsuario > numeroSecreto){
         AsignarTextoElemento ('p','el numero secreto es menor ');
      }else {
         AsignarTextoElemento ('P','el numero secreto es mayor');
      }
         intentos++; 
         
         limpiarCaja();
            }
     return;
}
//  hacer document.querySelector('#valorUsuario') es lo mismo que document.getElementById('valorUsuario')
//  limpia el input cuando no acierta //
function limpiarCaja(){
   let valorcaja = document.querySelector('#valorUsuario');
   valorcaja.value = '';
}
//texto//
function AsignarTextoElemento (elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


//numero aleatorio//
function GenerarNumeroSecreto() {
   
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo+1);
   console.log(numeroGenerado);
   console.log(listaNumeroSorteados);
   // preguntar si ya se sortearon todos los numeros
   if(listaNumeroSorteados.length === numeroMaximo){
         AsignarTextoElemento('p','ya se sortearon todos los numeros posibles');
         
   }else{

   // si el numero generado esta en la lista else
   if(listaNumeroSorteados.includes(numeroGenerado)){
       return GenerarNumeroSecreto();
   }else{
         listaNumeroSorteados.push(numeroGenerado);      
         return numeroGenerado; 
   }

}
    
}

//--------------------------------------------------------------------------------------------------------------
//                                        BOTON NUEVO JUEGO
//--------------------------------------------------------------------------------------------------------------
function reiniciarJuego(){
   
   limpiarCaja();
   condicionesIniciales();
   document.getElementById('reiniciar').setAttribute('disabled','true');

}
//en esta funcion se encapsula para reutilizarlo en reiniciarjuego()//
function condicionesIniciales(){
   AsignarTextoElemento('h1','juego del numero secreto :D');
   AsignarTextoElemento('p',`Selecciona un numero del 1 al ${numeroMaximo}`);
   numeroSecreto = GenerarNumeroSecreto();
   intentos = 1;
   console.log (intentos); 

}
