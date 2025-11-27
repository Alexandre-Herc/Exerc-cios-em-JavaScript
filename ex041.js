/*
Ex Combinações

Elabore um programa que mostre as combinações de três valores, agrupado de dois em dois. Use a estrutura de repetição for.
*/

var readlineSync = require('readline-sync');

for(var num1 = 1; num1 <= 3; num1++){
    for(var num2 = 1; num2 <= 3; num2++){
        console.log(`${num1} - ${num2}`);
    }
    console.log('');
}