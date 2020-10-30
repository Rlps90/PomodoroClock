function start() {
    document.getElementById('start').onclick = setInterval(function () {
        const diferenca = new Date(document.getElementById('timer')) - new Date()
        
    }, 1000)
}

}

function parar() {}

function reset() {}

function incremento() {
    document.getElementById('incrDecr').stepUp()
}

function decremento() {
    document.getElementById('incrDecr').stepDown()
}