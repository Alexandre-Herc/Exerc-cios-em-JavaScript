/*
Ex Soma Valores for

Faça um programa em que receba 5 valores e no final apresente a soma desses valores. Use a estrutura de repetição for
*/

var readlineSync = require('readline-sync');

console.log('-----------------------');
console.log('-------- SOMA --------');
console.log('-----------------------');

var num = 0;

for(var cont = 1; cont <= 5; cont++){
    num += readlineSync.questionInt(`Informe o ${cont} número: `);
}

console.log(`A soma dos valores é: ${num}`);