/*
Ex media 
Desenvolva um programa que solicite ao usuário digitar dois números e no final apresente o resultado da média entre os dois números. 
*/

var readlineSync = require('readline-sync');

var num1 = readlineSync.questionInt('Digite a sua primeira nota: ');
var num2 = readlineSync.questionInt('Dite a sua segunda nota: ');
var media = (num1 + num2) / 2

console.log(`A sua média é: ${media}`)