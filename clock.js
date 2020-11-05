var tempoAtual = document.getElementById("numClock").value * 60

if (tempoAtual > 0) {
    document.getElementById("start").addEventListener("click", () => setInterval(() => {

        let minRestante = Math.floor(tempoAtual / 60)
        let segRestante = tempoAtual - minRestante * 60

        tempoAtual--

        document.getElementById("timer").innerHTML = duasCasas(minRestante, 2) + ":" + duasCasas(segRestante, 2)
    }, 1000))
} else if (tempoAtual === 0) {
    document.getElementById("timer").innerHTML = "Hora do descanço!"
}

function duasCasas(num, casas) {
    return num.toString().padStart(casas, 0)
}

function pausar() {

}

function reset() {

}

document.getElementById("botMais").addEventListener("click", function () {
    document.getElementById('numClock').stepUp()
})

document.getElementById("botMenos").addEventListener("click", function () {
    document.getElementById('numClock').stepDown()
})