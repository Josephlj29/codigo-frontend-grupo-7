/* function elClima (clima) {
    
    
    if(clima===undefined){
        
          return "Ingrese un clima"; 
    }
    else if(clima==""){
        return "Ingrese un clima valido"
    }
    else if(clima=="lluvioso"){
        return "a a recoger la ropa"
    }
    else if(clima=="nublado"){
        return "a dormir"
    }
    else if(clima=="seco"){
        return "frioooooo"
    }
    else if(clima=="soleado"){
        return "playaaaaa"
    }
    else if(clima=="Humedo"){
        return "resfriado"
    }
    else{
        return "no hay prediciones"
    }
  
    
}
 console.log(elClima());
console.log(elClima(""));
console.log(elClima("soleado"));
console.log(elClima("lluvioso")); */
let select=document.querySelector("select");
let parrafo=document.querySelector("p");
function establecerClima(){
//seleccionando mi etiqueta select del html

let opc=select.value;
if(opc==="soleado"){
    parrafo.textContent="El dia esta agradable";
}
else if(opc=="lluvioso"){
    parrafo.textContent="quedate en casa , esta lloviendo";
}
else if(opc=="nublado"){
    parrafo.textContent="Lleva paraguas y abrigate";

}
else if(opc=="seco"){
    parrafo.textContent="Bonito clima ";
}
else if(opc=="Humedo"){
    parrafo.textContent="Abrigarse ";
}
else{
    parrafo.textContent="nada";
}

}
select.addEventListener("change",establecerClima)

