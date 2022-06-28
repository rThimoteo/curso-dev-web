/**
 * 01)​ Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
    multiplicação e divisão desses valores.
 * 
 * @param {int} a 
 * @param {int} b 
 */

    function calcular(a, b) {
        console.log(`${a} + ${b} = ${a+b}`)
        console.log(`${a} - ${b} = ${a-b}`)
        console.log(`${a} x ${b} = ${a*b}`)
        console.log(`${a} ÷ ${b} = ${a/b}`)
    }

    calcular(10,3);