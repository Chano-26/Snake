let canvas = document.querySelector(".canvas")
let ctx = canvas.getContext("2d")

//propiedades y metodos para dibujar en canvas
// ctx.fillStyle = "blue"
// ctx.fillRect(15,15,200,200)
// ctx.clearRect(0,0,500,500)

function dibujar(){
    ctx.fillStyle = "blue"
ctx.fillRect(15,15,200,200)

}
function borrar(){
    ctx.clearRect(0,0,500,500)
    
}

//array de strings
let nums = ["uno", "dos", "tres"]

// bucle forEach
nums.forEach(function contar(num){
    alert(num)

})

//split()
function splitDemo(){
    let cadena = "Hola, buenos dias colega"
    let valores = cadena.split('')
    alert(valores)
}

splitDemo()
//informacion alamcenada en vairbales
let nombre = "Maria"
let apellido = "Pia"

//informacion almacenada de objetos

let persona = {
    nombre: "Maria",
    apellido: "PIa",
    saludo: function Hola(){
        alert(persona.nombre + " " + persona.apellido)
    }
}
persona.saludo()

//objeto serpiente

let serpiente = {
    partes: [
        {x:4, y:2},
        {x:3, y:2},
        {x:2, y:2}
    ],
    direccion: "E"
}
