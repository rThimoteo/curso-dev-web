/**
 * 06)​ Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
    primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
    retornará o valor da aplicação sob o regime de juros compostos.
 * 
 * @param {*} capital 
 * @param {*} taxaJuros 
 * @param {*} tempo 
 */

function jurosSimples(capital, taxaJuros, tempo){
  return capital+(capital*taxaJuros*tempo)
}

function jurosComposto(capital, taxaJuros, tempo){
  for (i=0; i<tempo; i++){
    capital += capital*taxaJuros
  }

  return capital
}

console.log(jurosSimples(18000, 0.06, 5));
console.log(jurosComposto(18000, 0.06, 5));