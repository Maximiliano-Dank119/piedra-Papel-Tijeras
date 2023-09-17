
const botAleatorio = () => {
    let numero = Math.round(Math.random()*2)
    return numero
}

const prideraPapelTijeras = () => {
    let victorias = 0
    let derotas = 0
    let empate = 0
    let numeroDeParitdas = 0
    let jugadaJ1
    let jugadaJ2
    
    alert ("Este partido es al mejor de 5")

    for (let i = 1; i <= 5;i++) {
        numeroDeParitdas++
        do {
            jugadaJ1 = prompt (`Ronda ${numeroDeParitdas}
            Por fabor escriba una de las 3 opciones:
            => piedra
            => papel
            => tijera`)
            jugadaJ1 = jugadaJ1.toLowerCase (jugadaJ1)
            jugadaJ2 = botAleatorio ()
            if (jugadaJ1 === "piedra" && jugadaJ2 === 0){
            empate++
            alert (`Piedra vs Piedra 
            => Empate`)
            } else if (jugadaJ1 === "papel" && jugadaJ2 === 1){
            empate++
            alert (`Papel vs Papel 
            => Empate`)
            } else if (jugadaJ1 === "tijera" && jugadaJ2 === 2){
            empate++
            alert (`Tijera vs Tijera 
            => Empate`)
            } else if (jugadaJ1 === "piedra" && jugadaJ2 === 1){
            derotas++
            alert (`Piedra vs Papel 
            => Perdiste`)
            } else if (jugadaJ1 === "papel" && jugadaJ2 === 2){
            derotas++
            alert (`Papel vs Tijeras 
            => Perdiste`)
            } else if (jugadaJ1 === "tijera" && jugadaJ2 === 0){
            derotas++
            alert (`Tijeras vs Piedra
            => Perdiste`)
            } else if (jugadaJ1 === "piedra" && jugadaJ2 === 2){
            victorias++
            alert (`Piedra vs Tijeras 
            => Ganaste`)
            } else if (jugadaJ1 === "papel" && jugadaJ2 === 0){
            victorias++
            alert (`Papel vs Piedra 
            => Ganaste`)
            } else if (jugadaJ1 === "tijera" && jugadaJ2 === 1){
            victorias++
            alert (`Tijera vs Papel
            => Ganaste`)
            }
        } while (jugadaJ1 != "piedra" && jugadaJ1 != "papel" && jugadaJ1 != "tijera")
    } alert (`Fin del partido:
    Victorias: ${victorias}
    Derrotas: ${derotas}
    Empates: ${empate}`)
}

prideraPapelTijeras ()