// let canvas = document.querySelector(".canvas")
// let ctx = canvas.getContext("2d")

// *******************OBJETO GRAFICOS*********************

let graficos = {
    canvas: document.querySelector(".canvas"),
    tamCuadro: 30,
    dibujarTablero: function (ctx) {
        // let ctx = graficos.canvas.getContext("2d")
        let actualY = 0
        juego.tablero.forEach(function comprobarLinea(linea) {
            linea = linea.split('')
            let actualX = 0
            linea.forEach(function comprobarCaracter(caracter) {
                if (caracter == "#") {
                    ctx.fillStyle = 'black'
                    ctx.fillRect(actualX, actualY, graficos.tamCuadro, graficos.tamCuadro)
                }
                actualX += graficos.tamCuadro
            })
            actualY += graficos.tamCuadro
        })

    },
    dibujarSerpiente: function (ctx) {
        // let ctx = graficos.canvas.getContext("2d")
        serpiente.partes.forEach(function dibujarParte(parte) {
            let parteXloc = parte.x * graficos.tamCuadro
            let parteYloc = parte.y * graficos.tamCuadro
            ctx.fillStyle = "red"
            ctx.fillRect(parteXloc, parteYloc, graficos.tamCuadro, graficos.tamCuadro)

        })

    },
    dibujarJuego: function () {
        let ctx = graficos.canvas.getContext("2d")
        ctx.clearRect(0,0,graficos.canvas.width , graficos.canvas.height)
        graficos.dibujarTablero(ctx)
        graficos.dibujarSerpiente(ctx)
    }
}

// // *******************OBJETO GRAFICOS*********************

let juego = {
    timer: null,
    contadorTick: 0,
    tablero: ["################",
        "#              #",
        "#              #",
        "#              #",
        "#     ####     #",
        "#     ####     #",
        "#              #",
        "#              #",
        "#              #",
        "################",],
    tick: function () {
        window.clearTimeout(juego.timer)
        this.contadorTick++
        graficos.dibujarJuego()
        serpiente.mover()
        juego.timer = window.setTimeout("juego.tick()", 500)
        
        
        
        //setTimeout(function, ms)
    }

}



// // *******************OBJETO SERPIENTE*********************
let serpiente = {
    partes: [
        { x: 4, y: 2 },
        { x: 3, y: 2 },
        { x: 2, y: 2 }
    ],
    direccion: "E",
    siguientePosicion: function () {
        let cabeza = serpiente.partes[0] //x: 4, y: 2
        let objetivoX = cabeza.x
        let objetivoY = cabeza.y
        objetivoY = serpiente.direccion == "N" ? objetivoY-1: objetivoY
        objetivoY = serpiente.direccion == "S" ? objetivoY+1: objetivoY
        objetivoX = serpiente.direccion == "E" ? objetivoX+1: objetivoX
        objetivoX = serpiente.direccion == "O" ? objetivoX-1: objetivoX
        return {x: objetivoX, y: objetivoY}
    },
    mover: function () {
       // let posicion = {x:5, y:2}
       let posicion = serpiente.siguientePosicion()//{x:5, y:2}
       serpiente.partes.unshift(posicion)
       serpiente.partes.pop()
    },
}
// // *******************CONTROL DE JUEGO*********************
let controlJuego = {
    
    procesarInput: function(control){
     //   let tecla = control.key.toLowerCase()
     //   let direccionObjetivo = serpiente.direccion
     //   if(tecla == 'w') direccionObjetivo = "N"
     //   if(tecla == 'a') direccionObjetivo = "O"
     //   if(tecla == 's') direccionObjetivo = "S"
     //   if(tecla == 'd') direccionObjetivo = "E"
     if(tecla == 'w' && serpiente.direccion != "S") direccionObjetivo = "N"
     if(tecla == 'a' && serpiente.direccion != "E") direccionObjetivo = "O"
     if(tecla == 's' && serpiente.direccion != "N") direccionObjetivo = "S"
     if(tecla == 'd' && serpiente.direccion != "O") direccionObjetivo = "E"

        serpiente.direccion = direccionObjetivo
        //juego.tick()
    },
    inicioJuego: function () {
        window.addEventListener("keydown", controlJuego.procesarInput, false)
        juego.tick()
    }
}

// // *******************LLAMADAS*********************

//graficos.dibujarJuego()

controlJuego.inicioJuego()