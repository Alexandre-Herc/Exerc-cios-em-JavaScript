/*
Ex Somador numerico
construa um programa em que o usuário digite cinco valores e no final o programa apresente a soma total dos valores digitados. 
*/

var readlineSync = require('readline-sync');

var cont = 1;
var soma = 0;

for(var cont = 1; cont <= 5; cont++){
    soma += readlineSync.questionInt(`Digite o ${cont}° valor: `);
}
console.log(`A soma dos valores ${soma}`)