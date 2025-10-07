/*
Ex Teste dos triangulos
Desenvolva um programa que solicite ao usuário digitar o valor de três lados de uma forma geométrica. O programa deverá informar se o valores digitados pelo usuário formam um triângulo, se esse triângula é equilátero ou escaleno.

Dica: Só irá existir um triângulo se, somente se, os seus lados obedeceram à seguinte regra: um de seus lados deve ser maior que o valor absoluto da diferença dos outros dois lados e menor que a soma dos outros dois lados. Para ser equilátero, todos os lados devem ser iguais. E para ser escaleno todos os lados devem ser diferentes um do outro.
*/

var readlineSync = require('readline-sync');

var a = readlineSync.questionInt('Digite o primeiro lado do triangulo: ');
var b = readlineSync.questionInt('Digite o segundo lado do triangulo: ');
var c = readlineSync.questionInt('Digite o terceiro lado do triangulo: ');

//verifica se a difrente entre b e c é menor que a, e se a é menor que b + c 
// verificando todos os lados para constatar se é um triangulo 

var tr = Math.abs(b - c) < a && a < b + c && Math.abs(c - a) < b && b < c + a && Math.abs(a - b) < c && c < a + b

// uma condicação para verificar se o triangulo é equilatero ou escaleno. 
// Se A é igual a B, e se B for igual a C, e C igual a A é um triangulo equilatero 

if(a == b && b == c && c == a){
    console.log(`O triangulo é equilátero`)
// e se A for difernte de B, e B for diferente de C, e C for diferente de A o triangulo é escaleno
}else if (a != b && b != c && c != a){
    console.log(`O triangulo é escaleno`)
}
console.log(`É um triangulo? ${tr}`)