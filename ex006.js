/*
Ex Seus dolares
Você vai viajar para os estados unidos e quer saber quanto vai levar em dólares. Construa um sistema que resolva este problema.
*/
var readlineSync = require('readline-sync');

var reais = readlineSync.questionInt('Digite o valor e reais: ')
var dolar = reais / 5.35

console.log(`Eu tenho R$ ${reais} reais e convertendo em dolar ${dolar.toFixed(2)} dolares`)