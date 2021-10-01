//colocando valores padrões caso n envie parametros

function soma (a = 1, b = 2, c = 3){
    return a + b + c;
}

console.log(soma(10,10,10), soma(13,22), soma(32), soma());