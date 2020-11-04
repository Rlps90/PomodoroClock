var tempoAtual = document.getElementById("numClock").value * 60

//erro: tempo muito rápido

document.getElementById("start").addEventListener("click", () => setInterval(() => {

    if (tempoAtual > 0) {

        let minRestante = Math.floor(tempoAtual / 60)
        let segRestante = tempoAtual - minRestante * 60

        tempoAtual--

        document.getElementById("timer").innerHTML = duasCasas(minRestante, 2) + ":" + duasCasas(segRestante, 2)
    } else{
        document.getElementById("timer").innerHTML = "Hora do descanço!"
    }
}), 1000)

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