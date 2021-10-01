const pessoa = {
    nome : 'Rodrigo',
    idade : 21,
    profissao : 'Dev',
    cidade : 'Sao Caeteano'
}

for (dado in pessoa) {
    console.log (`${dado} = ${pessoa[dado]}`)
}