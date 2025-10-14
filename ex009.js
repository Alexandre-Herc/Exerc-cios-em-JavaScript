/*
Ex emprestimo 
Você ficou sem dinheiro e teve que pegar um esmpréstimo. Você vai pegar um valor de 20% a mais do valor que tomou emprestado e vai poder dividir em quantas parcelas quiser. Construa um sistema que mostre quanto será o valor de cada parcela.
*/

var readlineSync = require('readline-sync');

var emprestimo = readlineSync.questionInt('Informe o valor do seu imprestimo: ');
var parcelas = readlineSync.questionInt('Pagará em quantas parcelas? ')
var juros = ((emprestimo * 20) / 100)
var emJuros = emprestimo + juros
var divParc = (emJuros / parcelas)

if(parcelas > 12){
    console.log('Não será possível parcelar nessa quantidade!')
}else{
    console.log(`Você pegou R$ ${emprestimo} reais de emprestimo.`)
    console.log(`Com o juros de R$ ${juros} reais, equivalente a 20% do valor pego.`);
    console.log(`O valor será pago em ${parcelas}x de R$ ${divParc} reais.`)
    console.log(`Totalizando o valor de R$ ${emJuros} reais.`)
}