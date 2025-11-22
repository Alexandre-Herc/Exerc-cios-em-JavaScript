/*
Ex valores pares
Crie um programa em que o usuário digite um valor e o programa apresente apenas os valores pares da contagem progressiva até o valor digitado e os valores pares da contagem regressiva partindo do valor digitado. Use a estrutura de repetição for
*/

var readlineSync = require('readline-sync');

console.log('-------------------------------------');
console.log('----------- Números Pares -----------');
console.log('-------------------------------------');

var cont = 0;
var fim = 0;
var tipo = 0;

console.log('Digite a opção');
console.log('[1] - Contagem progressiva / [2] - Contagem regressiva');
tipo = readlineSync.questionInt('Escolha a opção.');

if (tipo != 1 && tipo != 2) {
    console.log('[ERRO] Leia o Menu novamente!')
}

console.log('Digite o número final da contagem: ');
fim = readlineSync.questionInt('');

if (tipo == 1) {
    for (var cont = 0; cont <= fim; cont++) {
        if (cont % 2 == 0) {
            console.log(cont)
        }
    }
} else if (tipo == 2) {
    for (var cont = 0; fim >= cont; fim--) {
        if (fim % 2 == 0) {
            console.log(fim)
        }
    }
}