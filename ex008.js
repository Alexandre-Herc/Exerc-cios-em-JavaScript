/*
Ex importo 
Você comprou muita muamba e quer saber quanto vai pagar de imposto. Construa um sistema que resolva este problema.
*/

var readlineSync = require('readline-sync');

var valorProd = readlineSync.questionInt('O valor da compra: ');
var valorDolar = (valorProd / 5.59).toFixed(2)
var impostoV = valorProd * 20 / 100
var impostoS = valorProd * 60 / 100

if(valorDolar <= 50){
    console.log(`O valor da compra em dolar ${valorDolar}, não excedeu o limite e o imposto será de ${impostoV} reais, equivalente a 20% do produto.`)
} else if(valorDolar > 50){
    console.log(`O valor da compra em dolar ${valorDolar}, excedeu o limite e o imposto será de ${impostoS} reais, equivalente a 60% do produto.`)
}
console.log('Faz o L')