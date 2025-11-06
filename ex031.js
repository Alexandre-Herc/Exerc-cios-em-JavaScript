/*
Ex fatorial 
Desenvolva um programa em que o usuário digite um número e o programa mostre o fatorial desse número.
*/


// uma função que calcula o fatorial 

function fatorial(num){

    // começamos o laço for loop com i = 5 
    //diminuímos i em uma unidade após cada iteração

    for(var i = num - 1; i >= 1; i--){
        //armazenamos o valor de num a cada iteração
        num = num * i; // ou num *= i;
    }

    console.log(`O valor fatorial é igual: ${num}`)
}

fatorial(5)

/* 

var readlineSync = require('readline-sync');

var valor = readlineSync.questionInt('Vamos calcular o fatorial do numero: ');

var cont = valor - 1
var fatorial = valor;

do {
    fatorial *= cont
    cont--
}while (cont != 0)

    console.log(`fatorial ${fatorial}`);
*/