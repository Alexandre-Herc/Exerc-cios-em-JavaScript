/*
Você chegou nos EUA olhou para o termômetro e viu 100 graus fahrenheit, mas você quer saber quanto é esta temperatura em graus celsius. Construa um sistema que solucione este problema.
*/

var readlineSync = require('readline-sync');

var fahrenheit = readlineSync.questionInt('Qual seria a temperatura em fahrenheit: ');
var celsius = Math.floor((fahrenheit - 32) / 1.8)

console.log(`A temperatura em fahrenheit é ${fahrenheit}° e em Celsius ${celsius} graus`)