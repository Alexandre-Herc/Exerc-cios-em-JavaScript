/*
Ex soma
Desenvolva um programa que solicite ao usuário digitar dois números e no final apresente o resultado da soma entre os dois números.
*/

var readlineSync = require('readline-sync');
var num1 = readlineSync.questionInt('Digite o primeiro numero: ');
var num2 = readlineSync.questionInt('Digite o segundo numero: ');
console.log(`A soma entre os números ${num1} e ${num2} é: ${num1+num2}`);