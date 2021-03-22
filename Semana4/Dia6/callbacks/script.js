//callbacks funcion que recibe otra funcion

function alerta(){
    alert("Hola")
}
const button=document.querySelector("button")
button.addEventListener('click',alerta)

let segundo=30;
 function regresiva(){
     setInterval(() => {
         segundo--
         imprimirSegundos()
     }, 1000);
 }
 function imprimirSegundos(){
    console.log(segundo)
 }
 regresiva();