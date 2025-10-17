/*
Ex apto carteira 
Crie um sistema em que o usuário digite o seu ano de nascimento eo programa informe se o usuário está apto ou inapto a tirar a carteira de trânsito. 
Considerando apto o usuário maior de ideia. 
*/

var readlineSync = require('readline-sync');

var anoAtual = new Date();
var mes = anoAtual.getMonth();
var ano = anoAtual.getFullYear();

var mesNasc = readlineSync.questionInt('Mês de nascimento: ');
var anoNasc = readlineSync.questionInt('Ano de nascimento: ');

var dif = Math.abs(mes - mesNasc)

var idade = ano - anoNasc

if(mesNasc > 12){
    console.log('[ERRO] Mês inválido')
}else{
    if(dif < mes){
        console.log('Você tem' + ' ' + (idade-1) + ' ' + 'anos')
    }else{
        console.log('Você tem' + ' '+ 'idade'+ ' '+ 'anos')
    }
    if(idade < 18){
        console.log('E não está apto a dirigir')
    }else{
        console.log('E está apto a dirigir')
    }
}