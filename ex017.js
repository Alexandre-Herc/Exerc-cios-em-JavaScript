/*
Ex Dependentes funcionario
Elabora um programa em que o usuário digite seu nome, o seu salário atual e quantos dependentes ele tem. No final o programa deve apresentar o novo salário do funcionário de acordo com a quantidade de dependentes. Se ele não tem dependente, aumento de 5%,
se ele tem de 1 até 3 depdentes, aumento de 10, 
se ele tem 4 a 6, aumento de 15%, 
e se ele tem mais de 6 dependentes, aumento de 18%
*/

var readlineSync = require('readline-sync');

var nome = readlineSync.question('Informe o seu nome: ');
var salario = readlineSync.questionFloat('Seu salário R$: ');
var dep = readlineSync.questionInt('Quantos filhos: ');

var cinco = ((5 * salario) / 100)
var dez = ((10 * salario) / 100)
var quinze = ((15 * salario) / 100)
var dezoito = ((18 * salario) / 100)

if (dep == 0) {
    console.log(`${nome}, Você terá 5% de aumento no salário. Valor atual: R$ ${(cinco + salario)}.`)
} else if (dep >= 1 && dep <= 3) {
    console.log(`${nome}, Você terá 10% de aumento no salário. Valor atual: R$ ${(dez + salario).toFixed(3)}.`)
} else if (dep >= 4 && dep <= 6) {
    console.log(`${nome}, Você terá 15% de aumento no salário. Valor atual: R$ ${(quinze + salario).toFixed(3)}.`)
} else if (dep > 6) {
    console.log(`${nome}, Você terá 18% de aumento no salário. Valor atual: R$ ${(dezoito + salario).toFixed(3)}.`)
}