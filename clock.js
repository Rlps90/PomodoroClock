let tempoAtual = document.getElementById("numClock").value * 60
let minutos = parseInt(document.getElementById("numClock").value, 10)
const botaoIniciar = document.getElementById("start")
const botaoPausar = document.getElementById("pause")
const botaoReset = document.getElementById("reset")
let isPaused = true

//Início do relógio Pomodoro ao clicar start
if (tempoAtual > 0) {
    botaoIniciar.addEventListener("click", function play() {
            myVar = setInterval(() => {

                let minRestante = Math.floor(tempoAtual / 60)
                let segRestante = tempoAtual - minRestante * 60

                tempoAtual--

                document.getElementById("timer").innerHTML = duasCasas(minRestante, 2) + ":" + duasCasas(segRestante, 2)
            }, 1000)
    })
} else if (tempoAtual === 0 && document.getElementById("start").clicked == true) {
    document.getElementById("timer").innerHTML = "Hora do descanço!"
}

if (isPaused){
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

//formatação para os números de 0 a 9 aparecerem com 2 casas
function duasCasas(num, casas) {
    return num.toString().padStart(casas, 0)
}

//função de incremento do botão +
document.getElementById("botMais").addEventListener("click", function () {
    minutos++
    document.getElementById("numClock").value = minutos
})

//Não estão alterando o valor inicial do input

//função de incremento do botão -
document.getElementById("botMenos").addEventListener("click", function () {
    minutos--
    document.getElementById("numClock").value = minutos
})