/*
Ex Placar do jogo
Construa um programa em que seja digitado o placar de um jogo e no final apresente o status da partida de acordo com as seguintes condições: se a diferença for igual a zero, status empate, se a diferença for de um até três gols, então status normal e se a diferença for maior do que três, então status goleada.
*/

var readlineSync = require('readline-sync');

var time1 = readlineSync.questionInt('Gols do time A: ');
var time2 = readlineSync.questionInt('Gols do time B: ');

var empate = Math.abs(time1 - time2) == 0 && Math.abs(time2 - time1) == 0
var normal = Math.abs(time1 - time2) >= 1 && Math.abs(time1 - time2) <= 3 && Math.abs(time2 - time1) >= 1 && Math.abs(time2 - time1) <= 3
var goleada = Math.abs(time1 - time2) > 3 && Math.abs(time2 - time1) > 3

console.log(`Placar do jogo Time1 ${time1} x Time2 ${time2}`)

if (empate == true) {
    console.log('Empate');
} else if (normal == true) {
    console.log('Normal')
} else if (goleada == true) {
    console.log('Goleada')
}