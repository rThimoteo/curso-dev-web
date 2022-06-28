/**
 * 02)​ Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
    - Equilátero: Os três lados são iguais. 
    - Isósceles: Dois lados iguais. 
    - Escaleno: Todos os lados são diferentes.
    Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
    ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
    triângulo).
 * 
 * @param {int} lado1 
 * @param {int} lado2 
 * @param {int} lado3 
 */

    function triangulo (lado1, lado2, lado3){
        nome = ""
        if (lado1 == lado2 && lado1 == lado3){
            nome = "Equilátero"
        }else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
            nome = "Isósceles"
        }else {
            nome = "Escaleno"
        }
        
        console.log(`Lado 1: ${lado1}`)
        console.log(`Lado 2: ${lado2}`)
        console.log(`Lado 3: ${lado3}`)
        console.log(`Triangulo ${nome}!`)
        console.log('-----------------------------')
    }

    for (i=0; i<1; i++){
        num1 = Math.floor(Math.random() * 3) + 1;
        num2 = Math.floor(Math.random() * 3) + 1;
        num3 = Math.floor(Math.random() * 3) + 1;
        triangulo(num1, num2, num3);
    }