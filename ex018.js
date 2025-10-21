/*
Ex Aproveitamento de um aluno.
Crie um programa em que o usuário digite duas notas e o programa apreente a média das notas e o aproveitamento do aluno, sendo: se a media for maior ou igual a 9, aproveitamento A, 
se a nota for maior ou igual a 7, aproveitamento B, 
se a nota for maior ou igual a 5, aproveitamento C, 
se a nota for maior ou igual a 3 aproveitaento D, 
se a nota for maior ou igual a 1, aproveitamento E, e se a nota for menor do que 1, aproveitamento F. 
*/

var readlineSyc = require('readline-sync');

var nota1 = readlineSyc.questionFloat('Informe a primeira nota: ');
var nota2 = readlineSyc.questionFloat('Informe a segunda nota: ');
var media = ((nota1 + nota2)/2);

if(media >= 9){
    console.log('Aproveitamento A');
}else if(media >= 7){
    console.log('Aproveitamento B');
}else if(media >= 5){
    console.log('Aproveitamento C');
}else if(media >= 3){
    console.log('Aproveitamento D');
}else if(media >= 1){
    console.log('Aproveitamento E');
}else{
    console.log('Aproveitamento F')
}