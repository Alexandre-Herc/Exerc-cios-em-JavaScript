/*
Ex calculo Idade 
Desenvolva um programa em que o usuário digite o ano de nascimento e o programa mostre a idade do usuário e uma mensagem informando se ele já atingiu a maioridade.
*/

var readlineSync = require('readline-sync');

var diaDM = new Date();
var mes = diaDM.getMonth();
var ano = diaDM.getFullYear();

var mesNasc = readlineSync.questionInt('O mês: ');
var anoNasc = readlineSync.questionInt('Ano: ');

var idade = ano - anoNasc
var mesT = Math.abs(mes - mesNasc)

if(mesT < mes){
    console.log(idade - 1)
}else{
    console.log(idade)
}
 if(idade < 18){
    console.log(`Você é menor de idade`)
 }else{
    console.log('Você é maior de idade')
 }

 console.log(mesT)
