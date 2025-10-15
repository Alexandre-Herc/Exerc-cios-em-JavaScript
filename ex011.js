/*
Ex: Par ou impar
Construa um sistema que o usuário digite um valor e o programa informe se aquele valor é par ou ímpar
*/

var readlineSync = require('readline-sync');

var num = readlineSync.questionInt('Par ou Imar: ');

if(num % 2 == 0){
    console.log(`O número ${num} é par`)
}else{
    console.log(`O numero ${num} é impar`)
}