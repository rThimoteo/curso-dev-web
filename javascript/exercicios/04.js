/**
 * 04) ​ Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
 * e o resto da divisão destes dois valores.
 * 
 * @param {*} dividendo 
 * @param {*} divisor 
 */

function potencia (dividendo , divisor){
    
    console.log(`Dividendo: ${dividendo}`)
    console.log(`Divisor: ${divisor}`)
    console.log(`Resultado: ${parseInt(dividendo/divisor)}`)
    if (dividendo%divisor > 0){
        console.log(`Resto: ${dividendo%divisor}`)
    }
}
a = 20;
b = 3;
potencia(a, b)