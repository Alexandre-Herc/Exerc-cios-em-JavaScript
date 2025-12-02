/*
Ex analisador de valores

Faça um programa em que o usuário digite 5 valores e no final ele apresente: a soma dos valores, a média entre os valores, quanto são divisíveis por 5, quantos são nulos e a soma dos valores pares. Use a estrutura de repetição for.
*/

var readlineSync = require('readline-sync');

var valores = 0;
var valor = 0;
var soma = 0;
var media = 0;
var div = 0;
var nulo = 0;
var somaPares = 0;

for(var cont = 1; cont <= 5; cont++){
    valores = readlineSync.questionInt(`Digite o ${cont}° valor: `);
    soma += valores
    valor += " " +  valores
    if(valores % 5 === 0){
        div++
    }

    if(valores === 0){
        nulo++
    }

    if(valores % 2 == 0){
        somaPares += valores
    }
}

media = soma / 5

console.log(`Os numeros digitados: ${valor}`);
console.log(`A soma dos valores é: ${soma}`);
console.log(`A média é igual a: ${media}`);
console.log(`Numeros divisiveis por 5: ${div}`);
console.log(`Valores nulos: ${nulo}`);
console.log(`A soma dos valores Pares: ${somaPares}`);