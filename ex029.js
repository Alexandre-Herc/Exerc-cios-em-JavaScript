/*
Ex minha tabuada
Desenvolva um programa que pede para o usuário escolher um número e seja mostrado a tabuada desse número
*/

var readlineSync = require('readline-sync');

var cont = 1;

console.log('------------------------------------');
console.log('---------- Tabuada ----------');
console.log('------------------------------------');

var numero = readlineSync.questionInt(`Digite o numero: `);

for(var cont = 1; cont <= 10; cont++){
    console.log(`${numero} x ${cont} = ${numero*cont}`);
}

console.log('------------------------------------');
console.log(`---------- Tabuada do ${numero}----------`);
console.log('------------------------------------');