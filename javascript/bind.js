const carro = {
    partida: "Vruuuuum",
    ligar() {
        console.log(this.partida)
    }
}

carro.ligar()

const ligar = carro.ligar
ligar() //conflito entre paradigmas funcional e OO

const ligarCarro = carro.ligar.bind(carro)
ligarCarro()