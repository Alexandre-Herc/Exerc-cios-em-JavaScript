/*
Ex conta negativos
Elabore um programa que receba até cinco números e no final mostre quantos números negativos foram digitados.
*/

var readlineSync = require('readline-sync');

var cont = 1;
var valores = 0;
var valoresN = 0;

for(var cont = 1; cont <= 5; cont++){
    valores = readlineSync.questionInt(`Informe o ${cont}° valor: `);

    if(valores < 0){
        valoresN++
    }
}

console.log(`Foram digitados ${valoresN} valores negativos.`)