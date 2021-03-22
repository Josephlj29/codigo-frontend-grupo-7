/* function sumar(numero,numero2){
    let total=numero+numero2
    console.log(total)
    return total +1000;
}


function restar(numero,numero2){
    console.log(numero-numero2)
    return numero-numero2
} */

//sumar(20,2)

/* const texto = document.getElementById("pe")
function ecuacion(a,b,c){
    let discriminante = b ** 2 - 4 * a * c;
    let x = 0;
    if (discriminante > 0) {
      x = -b + (Math.sqrt(discriminante) / 2) * a;
    }
    
    return x
}

//texto.textContent=ecuacion(56,34,3)
function cuarta(a,b){
   
    let x = 0;
   
      x = (a**4)+(4*a**3*b)+(6*a**2*b**2)+(4*a*b**3+b**4);
   
    
    return x
}

texto.textContent=cuarta(2,3)


 */
function recursividad(contador){
    if(contador>=10){
        return
    }
    console.log(contador)
    recursividad(contador+1)
    
}
recursividad(0);
































/* for(let i=1;i<300;i++){
    if(i%2==0){
        console.log(i+"\n")
    }

} */