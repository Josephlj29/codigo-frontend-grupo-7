/* let a=window.prompt("hello")

while(a.toLowerCase()!== "josue"){
    let input=prompt("sigue Intentando");
    if(a.toLowerCase() ==="josue"){
        console.log("Adivinaste")
        break
    }
    a=input;
}
 */
/* let a=" "
do{
    a=prompt("ingresa el nombre")
    if(a.toLowerCase()==="josue"){
        alert("bien")
    }
    else{
        alert("error")
    }

}
while(a.toLowerCase()!= "josue")
 */
function adivina(){
    let a=prompt("ingresa tu nombre")
    if(a=="josue"){
        alert("bien")
        return
    }
    alert("mal")
    adivina()
    
}
adivina();














/* function recursividad(contador){
    if(contador>=10){
        return
    }
    console.log(contador)
    recursividad(contador+1)
    
}
recursividad(0); */






























