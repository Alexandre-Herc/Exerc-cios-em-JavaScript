/*
Ex Escolhendo Pessoas

Elabore um programa em que realize o cadastro de homens e mulheres, suas idades e a cor da pele. No final mostre total de homens com mais de 18 anos e cabelos castanhos e o total de mulheres entre 25 e 30 e cabelos loiros. menu da cor da pele: preto, castanho, loiro e ruivo.
*/

var readlineSync = require('readline-sync');

var totalH = 0;
var totalM = 0;

var sexo = 0;
var idade = 0;
var cor = 0;

do {

    console.log('-------------------------------');
    console.log('***** Cadastro de Pessoas *****');
    console.log('-------------------------------');


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
console.log('-------------------------------');
console.log('***** Cadastro de Pessoas *****');
console.log('-------------------------------');
console.log(`São ${totalH} homens maiores de 18 anos com cabelo castanho.`);
console.log(`E ${totalM} mulheres entre 25 e 30 anos e loira.`);