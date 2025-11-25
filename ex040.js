/*
Ex Quantos entre 0 e 10

Desenvolva um programa em que o usuário digite até 6 valores e no final o programa apresente o total de valores entre 0 e 10; e a soma desses valores entre 0 e 10 que forem impares. use a estrutura de repetição for
*/

var readlineSync = require('readline-sync');

var valor = 0;
var soma = 0;
var selecao = 0;

console.log('-------------------------------');
console.log('***** Valores // valores *****');
console.log('-------------------------------');

for(var cont = 1; cont <= 6; cont++){
    valor = readlineSync.questionInt(`Digite o ${cont}° numero: `);

    if(valor <= 10){
        selecao++

        if(valor % 2 == 1){
            soma += valor
        }
    }
}

console.log(`Entre os valores digitados tivemos ${selecao} que foram de 0 a 10`);
console.log(`E a soma dos valores impares é: ${soma}`);
