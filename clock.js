let segundos = 0
let tempoRestante = 0
let cronometro = 0
let isPaused = true
let isPlaying = true
const botaoIniciar = document.getElementById("start")
const botaoPausar = document.getElementById("pause")
const botaoReset = document.getElementById("reset")
const tempoTrab = document.getElementById("tempoTrab")
const trabMais = document.getElementById("botMais")
const trabMenos = document.getElementById("botMenos")



//Início do relógio Pomodoro ao clicar start
function timer() {
    segundos--
    if (tempoTrab > 0) {
        botaoIniciar.addEventListener("click", function play() {
            myVar = setInterval(() => {
                segundos = tempoTrab.textContent * 60
                let minRestante = Math.floor(segundos / 60)
                let segRestante = segundos - minRestante * 60

                document.getElementById("timer").innerHTML = duasCasas(minRestante, 2) + ":" + duasCasas(segRestante, 2)
            }, 1000)
        })
    } else if (tempoTrab === 0 && document.getElementById("start").clicked == true) {
        document.getElementById("timer").innerHTML = "Hora do descanço!"
    }
}

if (isPaused) {
    botaoPausar.addEventListener("click", () => {
        clearInterval(myVar)
        isPaused = false
    })
} else {
    botaoPausar.addEventListener("click", () => {
        play()
        isPaused = true
    })
}


function reset() {

}

function iniciarTimer() {
    if (tempoRestante != 0) {
        segundos = tempoRestante
    } else {
        segundos = tempoTrab.textContent * 60
    }
    cronometro = setInterval(timer, 1000)
}

//função de incremento do botão +
trabMais.addEventListener("click", () => {
    let x = parseInt(tempoTrab.textContent)
    if (x < 60) {
        tempoTrab.textContent = x + 5
    }
})

//Não estão alterando o valor inicial do input

//função de decremento do botão -
trabMenos.addEventListener("click", () => {
    let x = parseInt(tempoTrab.textContent)
    if (x > 5) {
        tempoTrab.textContent = x - 5
    }
})

//formatação para os números de 0 a 9 aparecerem com 2 casas
function duasCasas(num, casas) {
    return num.toString().padStart(casas, 0)
}