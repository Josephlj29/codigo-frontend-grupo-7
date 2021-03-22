let alumnos_favoritos = ["Cristiano", "Messi", "Maradona", "Pele", "Iniesta"]
let informacion = "Mis alumnos favoritos son : "

const texto = document.getElementById("pe")
const text2 = document.getElementById("p2")



for (let indice = 0 ; indice < alumnos_favoritos.length; indice++){
    //texto.textContent=alumnos_favoritos[indice]+"\n"
    //text2.textContent=alumnos_favoritos[indice]+"\n"
    setTimeout(()=>{
        texto.textContent+=alumnos_favoritos[indice]+" \n"
    },1000*indice)
    //console.log(alumnos_favoritos[indice])
    //sleep(2000)
    
        
}
/* texto.content= */

 




































/* for(let i=1;i<300;i++){
    if(i%2==0){
        console.log(i+"\n")
    }

} */