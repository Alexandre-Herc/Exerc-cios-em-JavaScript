/*
Ex procedimento cabeçalho

volte para o exercicio 35 e coloque o cabeçalho dentro de um procedimento. Depois execute o programa!
*/


var readlineSync = require('readline-sync');

function letras(){
    console.log('-------------------------------');
    console.log('***** Cadastro de Pessoas *****');
    console.log('-------------------------------');
}

var totalH = 0;
var totalM = 0;

var sexo = 0;
var idade = 0;
var cor = 0;

do {

    letras(); 
    console.log('Informe o seu sexo');
    console.log('Digite [1] para Homem - [2] para Mulher');
    sexo = readlineSync.questionInt('');

    console.log('Informe a sua idade');
    idade = readlineSync.questionInt('');

    console.log('Informe a sua cor');
    console.log('[1] - Preto');
    console.log('[2] - Castanho');
    console.log('[3] - Loiro');
    console.log('[4] - Ruivo');
    cor = readlineSync.questionInt('');

    console.log('Deseja cadastrar mais alguém?');
    console.log('[s] - Sim / [n] - Não');
    var cont = readlineSync.question('');

    if (sexo == 1 && idade >= 18 && cor == 2) {
        totalH += 1
    }

    if (sexo == 2 && idade >= 25 && idade <= 30 && cor == 3) {
        totalM += 1
    }

} while (cont === 's')
console.log('Cadastro encerrado!');
letras();
console.log(`São ${totalH} homens maiores de 18 anos com cabelo castanho.`);
console.log(`E ${totalM} mulheres entre 25 e 30 anos e loira.`);