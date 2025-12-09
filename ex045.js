/*
Ex Detector pesado
Desenvolva um programa em que o usuário digite o nome de cinco pessoas e o peso corporal de cada. A cada pessoa incluída no sistema, deve ser mostrado o maior peso cadastrado até o momento. No final deve ser apresentado o nome da pessoa que teve o maior peso e seu peso. Use estrutura de procedimentos -- vulgo função.
*/

var readlineSync = require('readline-sync');

function merlin(){
    console.log('------------------------------------');
    console.log('---------- Cadastro Unico ----------');
    console.log('------------------------------------');
}

var nomes = '';
var peso = 0;
var nome = '';
var gordo = 0;

merlin();
for(var cont = 1; cont <= 5; cont++){
    nomes = readlineSync.question(`${cont}° nome: `);
    peso = readlineSync.questionFloat('Seu peso: ');

    if(peso > gordo){
        gordo = peso
        nome = nomes
    }
}

merlin();
console.log(`O maior peso é do ${nome} com ${gordo}`);