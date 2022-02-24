function criarObjetos() {
    return {
        nome: 'Vaso',
        valor: 50
    }
}

console.log(criarObjetos());

//factory com parametros
function criarObjetos2(nome, valor){
    var desconto = 0.2;
    return {
        nome,
        valor,
        valorComDesconto: (valor - (valor*desconto)) 
    }
}

console.log(criarObjetos2('Carro', 20000));