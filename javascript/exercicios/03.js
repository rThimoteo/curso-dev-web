/**
 * 03)​ Crie uma função que recebe dois parâmetros, base e expoente, 
 * e retorne a base elevada ao expoente.
 * 
 * @param {int} base 
 * @param {int} exp 
 */

var rodadas = 1;

function potencia (base , exp){
    
    console.log(`Base: ${base}`)
    console.log(`Expoente: ${exp}`)
    console.log(`Resultado ${Math.pow(base, exp)}!`)
    console.log('-----------------------------')
}

for (i=0; i<rodadas; i++){
    base = Math.floor(Math.random() * 10) + 1;
    expoente = Math.floor(Math.random() * 5) + 1;
    potencia(base, expoente);
}