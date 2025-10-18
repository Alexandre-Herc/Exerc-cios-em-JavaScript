/*
Ex calculo Imc 
Desenvolva um programa que lia o peso e a estatura de uma pessoa, determine o seu IMC e classifique de acordo com a tabela abaixo.

menor que 17   == muito abaixo do peso
maior igual a 17 e menor que 18.5 == abaixo do peso 
maior igual a 18.5 e menor que 25 == peso ideial 
maior igual a 25 e menor que 30 == sobrepeso 
maior igual a 30 e menor que 35 == obesidade
maior igual a 35 e menor que 40 == obseidade severa 
maior igual a 40 == obsesidade morbida 
*/

var readlineSync = require('readline-sync');

var altura = readlineSync.questionFloat('Qual a sua altura: ');
var peso = readlineSync.questionFloat('Qual seria o seu peso: ');

var imc = (peso / Math.pow(altura, 2))

imc = imc.toFixed(2)

if (imc < 17) {
    console.log('Muito abaixo do peso!');
} else if (imc >= 17 && imc < 18.5) {
    console.log('Abaixo do peso!')
} else if (imc >= 18.5 && imc < 25) {
    console.log('Peso ideal');
} else if (imc >= 25 && imc < 30) {
    console.log('Sobrepeso');
} else if (imc >= 30 && imc < 35) {
    console.log('Obesidade')
} else if (imc >= 35 && imc < 40) {
    console.log('Obseidade Severa');
} else if (imc > 40) {
    console.log('Obesidade morbida')
}