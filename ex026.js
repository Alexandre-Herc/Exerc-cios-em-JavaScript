/*
Desenvolva um programa em que o usuário faça conversões de moeda. O usuário deve escolher quantas conversões ele realizará antes de digitar o valor em real que ele tem. O valor em real deve ser convertido para dólar. 
*/

var readlineSync = require('readline-sync');

var cont = 1;
var valor = 0;

var times = readlineSync.questionInt(`Quantas vezes você deseja converter? `);

while(cont <= times){
    valor = readlineSync.questionFloat(`Informe o valor da conversão: `);

    console.log(`${(valor / 5.49).toFixed(2)}`)
    cont++
}