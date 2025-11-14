/*
Ex Super contador For

Construa um programa em que conte de 0 até 10 e de 10 até zero, usando a estrutura de repetição for. 

*/

var readlineSync = require('readline-sync');

var cont = 0;
var limite = 10;

while(cont <= limite){
    console.log(cont);
    cont++
} 

console.log('_______--------_______-------_______')

while(limite >= cont){
    console.log(limite);
    limite--
}