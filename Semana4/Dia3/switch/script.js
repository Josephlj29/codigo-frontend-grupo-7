let  opc=prompt("Ingrese su opcion");
let opciones=["1) Suma","2) Resta","3)Multiplicacion"]
let i=0;
while(i<=opciones.length-1){
   console.log(opciones[i]+"\n");
    i++;
}
console.log(opc)
switch(opc){
    case "1":
        console.log(sumar(4,2));
        break;
    case "2":
        console.log(restar(4,2));
        break;
    case "3":
        console.log(multiplicar(4,2));
        break;
}




function sumar(a,b){
    let suma=parseInt(a)+parseInt(b);
    return suma;
}
function restar(a,b){
    let resta=a-b;
    return resta;
}
function multiplicar(a,b){
    let multi=a*b;
    return multi;
}
