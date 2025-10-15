/*
Ex Calculo IMC
Elabore um programa em que o usuário digite o seu peso (kg) e altura (metros) e o programa informe o IMC do usuário e se ele está dentro do peso ideal ou fora do peso ideal. 
Dica: faixa de peso ideal entre 18.5 e 25
*/

var readlineSync = require('readline-sync');


console.log('CALCULO IMC');
console.log(' ');

var altura = readlineSync.questionFloat('Qual seria a sua altura: ');
var peso = readlineSync.questionFloat('Qual seria o seu peso: kg');

var imc = peso / Math.pow(altura, 2)

imc = imc.toFixed(1)

if(imc >= 18.5 && imc <= 25){
    console.log('Você está no peso ideal')
}else{
    console.log('[Cuidado] Você está fora do peso')
}