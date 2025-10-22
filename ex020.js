/*
Ex Criança Esperança
Desenvolva um programa em que o usuário escolha quanto será a sua doação e no final o programa apresente uma mensagem de quanto foi a doação
*/

var readlineSync = require('readline-sync');

console.log('---------------');
console.log('---- Bem vindo(a) ao Criança Esperança ----');
console.log('---------------');
console.log('Digite [1] para doar R$10 reais');
console.log('Digite [2] para doar R$25 reais');
console.log('Digite [3] para doar R$50 reais');
console.log('Digite [4] para doar outros valores.');
console.log('Digite [5] para Sair')

var doacao = readlineSync.questionFloat('Digite a opção: ');

if (doacao != 1 && doacao != 2 && doacao != 3 && doacao != 4 && doacao != 5) {
    console.log('[ERRO] Operação inválida!')
} else if (doacao == 1) {
    console.log(`Agradecemos a sua doação de R$ 10 reais`);
} else if (doacao == 2) {
    console.log(`Agracemos a sua doação de R$ 25 reais`);
} else if (doacao == 3) {
    console.log(`Agracemos a sua doação de R$ 50 reais`);
} else if (doacao == 4) {
    var valor = readlineSync.questionFloat('Qual valor deseja doar? R$');
    console.log(`Agradecemos a sua doação de R$ ${valor} reais`);
} else if (doacao == 5) {
    console.log('Fim da operação');
}