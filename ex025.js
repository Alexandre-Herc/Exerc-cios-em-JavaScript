/*
Ex somador maior menor
Crie um programa em que o usuário digite cinco valores e no final o programa apresente a soma total dos valores digitados, qual o maior valor e qual o menor valor digitado.
*/

var readlineSync = require('readline-sync');

var cont = 1;
var arr = [];

for(var cont = 1; cont <= 5; cont++){
    arr.push(readlineSync.questionInt(`Digite o ${cont} numero: `));
}

var soma = arr.reduce(function(soma, cont){
    return soma + cont;
})

console.log(`Esses foram os valores inseridos: ${arr}`);
console.log(`O maior valor entre eles é o: ${Math.max(...arr)}`);
console.log(`O menor valor entre eles é o: ${Math.min(...arr)}`);
console.log(`E a soma dos valores é: ${soma}`);
