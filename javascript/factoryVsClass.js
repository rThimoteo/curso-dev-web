// Class
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    apresentar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

// Factory
const criarPessoa = function (nome) {
    return {
        apresentar: () => console.log(`Meu sobrenome é ${nome}`)
    }
}

const p1 = new Pessoa ('Rodrigo');
const p2 = criarPessoa('Thimoteo');

p1.apresentar();
p2.apresentar();