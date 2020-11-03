document.getElementById("start").addEventListener("click", setInterval(() => {
    tempoRestante--
    tempoAtual = tempoRestante
    alert(tempoAtual)
    //let minRestante = Math.floor(tempoRestante / 60),
    //    segRestante = tempoRestante - minRestante * 60

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