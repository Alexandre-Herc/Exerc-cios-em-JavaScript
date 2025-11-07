/*
Ex Numero primo

Crie um programa em que o usuário digite um número e mostre como resultado se esse número é primo ou não. 

Dica: um numero primo é aquele que só pode ser dividido por um e por ele mesmo. 
*/

var readlineSync = require('readline-sync');

var num = 0;
var divisores = 0;

num = readlineSync.questionInt('Digite um numero: ');

for (var cont = 1; cont <= num; cont++) {

    if (num % cont == 0) {
        divisores++
    }
}

if (divisores == 2) {
    console.log(`O numero ${num} é primo`);
} else {
    console.log(`O numero ${num} não é primo`);
}