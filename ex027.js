/*
Ex contador inteligente 

Elabore um programa em que o usuário digite o valor inicial e o valor final de uma contagem a ser mostrada pelo programa. Se o valor final for maior que o inicial, a contagem será progressiva, caso contrário, a contagem será regressiva.
*/

var readlineSync = require('readline-sync');

var inicial = 0;
var final = 0;

inicial = readlineSync.questionInt('Informe o valor inicial: ');
fim = readlineSync.questionInt('Informe o valor final: ');

if(fim > inicial){
    for(var cont = inicial; cont <= fim; cont++){
        console.log(cont)
    }
}else{
    for(var cont = inicial; cont >= fim; cont--){
        console.log(cont)
    }
}