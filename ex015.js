/*
Ex Aluno aprovado ou reprovado
Construa um programa em que o usuário digite duas notas e mostre a média das notas e se o aluno está aprovado, em recuperação ou reprovado. 
Considerando aprovado o aluno com a média ou igual a 7, em recuperação com média entre 7 e 5 e reprovado com média menor que cinco.
*/

var readlineSync = require('readline-sync');

var nota1 = readlineSync.questionFloat('Informe a primeira nota: ');
var nota2 = readlineSync.questionFloat('Informe a segunda nota: ');

var media = ((nota1 + nota2)/2)

if(media < 5){
    console.log(`Aluno com a media ${media} está reprovado!`)
}else if (media <= 6){
    console.log(`Aluno com a media ${media} está de recuperação!`)
}else{
    console.log(`Parabéns, aprovado com a media ${media}.`)
}