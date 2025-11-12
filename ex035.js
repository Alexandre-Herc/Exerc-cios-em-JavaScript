/*
Super contador

Desenvolva um programa em que o usuário escolha em um menu se quer contar de 0 a 10 ou de 10 a 0.
*/

var readlineSync = require('readline-sync');

console.log('--------------');
console.log('------- Menu -------');
console.log('--------------');
console.log('Selecione a opção abaixo');
console.log('Digite [1] - Para uma contagem crescente e [2] - Para uma contagem decrescente');

var cont = 0;
var limite = 10;

var num = readlineSync.questionInt('Qual opção?');

if (num == 0 || num >= 3) {
    console.log('[ERRO] operação inválida, reveja as opções!')
}

if (num == 1) {
    for (var cont = 0; cont <= limite; cont++) {
        console.log(`Contagem crescente ${cont}`);
    }
} else if (num == 2) {
    for (var cont = 0; limite >= cont; limite--) {
        console.log(`Contagem decrescente ${limite}`)
    }
}
