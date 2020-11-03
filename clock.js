document.getElementById("start").addEventListener("click", () => setInterval(() => {
    let tempoAtual = document.getElementById("numClock").value * 60
    if (tempoAtual > 0) {
        let minRestante = Math.floor(tempoAtual / 60),
            segRestante = tempoAtual - minRestante * 60

        tempoAtual--
        function duasCasas(num, casas) {
            return num.toString().padStart(casas, 0)
        }

        document.getElementById("timer").innerHTML = duasCasas(minRestante, 2) + ":" + duasCasas(segRestante, 2)


    } else {

    }


}), 1000)


function parar() {

}

function reset() {

}

document.getElementById("botMais").addEventListener("click", function () {
    document.getElementById('numClock').stepUp()
})

document.getElementById("botMenos").addEventListener("click", function () {
    document.getElementById('numClock').stepDown()
})