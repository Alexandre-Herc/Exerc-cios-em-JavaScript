/*
Ex Sua idade
Você está fazendo aniversário, mas não sabe quantas velas colocar no bolo. Sabe apenas o ano do seu nascimento. Construa um programa que solucione este problema.
*/

var readlineSync = require ('readline-sync');

var ano = new Date();
var anoAtual = ano.getFullYear();
var anoNasc = readlineSync.questionInt('Digite o ano que você nasceu: ');
var idade = anoAtual - anoNasc

if(anoNasc > anoAtual){
    console.log('[ERRO] ano inválido')
}else{
    console.log(`Você tem ${idade} anos`)
}

