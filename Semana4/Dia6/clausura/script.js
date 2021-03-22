
//scope:espacio disponible entre llaves
//clausure :tomar datos de fuera de una funcion 
/* function mostrar(){
    let texto="texto inicial";
    function mostrarTexto(){
        alert(texto)
    }
    mostrarTexto();
}
mostrar();

function crearFun(){
    let a="Repa";
    function mosFun(){
        alert(a);
    }
    return mosFun()
}

let llamar=crearFun();
llamar(); */

function suma(x){
   /*  return function (y){//funcion anonima
        return x+y
    } */
    return (y) =>x+y// funcion anonima
    //funcion  que recibe parametro y realiza la suma
}
alert(suma(2)(2))