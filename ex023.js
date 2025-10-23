/*
Ex conte de zero até onde quiser
Desenvolva um programa que conte de 0 até onde quiser. O usuário também deve escolher de quanto será o pulo.
*/

var readlineSync = require('readline-sync');

var fim = readlineSync.questionInt('Vamos contar de 0 até: ');
var incr = readlineSync.questionInt('saltar: ');
var inicio = 0;

if(incr == 0 || incr == 1){
    while(inicio <= fim){
        console.log(inicio)
        inicio++
    } 
}else{
    while(inicio <= fim){
        console.log(inicio)
        inicio += incr 
    }
}