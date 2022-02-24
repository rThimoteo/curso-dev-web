const soma = function (x, y) {
    return (x + y)
}

const imprimirResultado = (a, b, operacao = soma) => {
    console.log(operacao(a,b))
}

imprimirResultado(4, 9)
imprimirResultado(10, 5, (x, y) => x * y)

//Função anonima em objeto
const pessoa = {
    falar: function () {
        console.log('Olá')
    }
}

pessoa.falar()