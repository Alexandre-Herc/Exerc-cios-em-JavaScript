/*
Ex aluno aprovado ou reprovado
Desenvolva um programa em que o usuário digite duas notas e o mostre a média das notas e se o aluno está aprovado ou reprovado. Considerando aprovado o aluno com média maior igual a 7.
*/

var readlineSync = require('readline-sync');

var nota1 = readlineSync.questionFloat('Informe a primeira nota: ');
var nota2 = readlineSync.questionFloat('Informe a segunda nota: ');
var media = (nota1 + nota2)/2

if(media < 7){
    console.log(`Reprovado, sua média foi de ${media}`)
}else{
    console.log(`Parabéns! Aprovado. Sua media foi de ${media}.`)
}