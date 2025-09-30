/* 
Ex: mensagem 

Desenvolva um programa que pergunte qual é o nome do usuário e no final mostre uma mensagem com o nome do usuário que foi digitado.
*/

var readlineSync = require('readline-sync');
var nome = readlineSync.question('Por favor, me informe o seu nome? ');
console.log(`Olá, ${nome}, seja bem vindo(a)`);
