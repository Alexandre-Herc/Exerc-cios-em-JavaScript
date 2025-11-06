/*
Ex fatorial repetição

Construa um programa em que o usuário digite um número e o programa mostre o fatorial desse número e no final pergunte se o usuário quer repetir a operação.
*/

var readlineSync = require('readline-sync');

do {

    var num = readlineSync.questionInt('Digite o valor: ');
    var cont = num - 1;
    var res = num;

    do {
        res *= cont
        cont--
    } while (cont != 0)

    console.log(`O fatorial de ${num} é: ${res}`);
    console.log('--------------------- x ---------------------');

    console.log('Deseja repetir a operação? ');
    console.log('[1] - Sim || [2] - Não');

    var repetir = readlineSync.question('Digite a opção: ');
} while (repetir == 1)

    console.log('Fim da operação');