// função comum
let dobro1 = function (num) {
    return 2 * num;
}

//versão arrow
dobro2 = num => {
    return 2 * num;
}

dobro3 = num => 2 * num; //return implicito
console.log(dobro1(1))
console.log(dobro2(2))
console.log(dobro3(3))

let ola = function () {
    return "Olá"
}

ola = () => "Olá"
console.log(ola())
