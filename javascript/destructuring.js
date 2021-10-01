const pessoa = {
    nome: "Rodrigo",
    idade: "21",
    endereco: {
        logradouro : "Rua A",
        numero: "900"
    }
}

console.log(pessoa);

const {endereco, idade} = pessoa;
console.log(endereco, idade);



