/*
Ex melhor aluno
Desenvolva um programa que receba a quantidade total de alunos de uma sala. Em seguida receba os nomes e notas desses alunos e no final mostre o aluno com a melhor nota e sua respectiva nota.
*/

var readlineSync = require('readline-sync');
var cont = 1;
var melhorNota = 0;
var melhorAluno = '';
var media = 0;

var qtAlunos = readlineSync.questionInt('Digite quantos alunos tem na turma: ');
for(var cont = 1; cont <= qtAlunos; cont++){
    nomeAluno = readlineSync.question(`Nome do ${cont}° aluno: `);
    notaAluno = readlineSync.questionFloat(`E a sua nota: `);
    
    if(notaAluno > melhorNota){
        melhorNota = notaAluno
        melhorAluno = nomeAluno
    }

    media += notaAluno
}

console.log(`A turma tem ${qtAlunos} alunos`);
console.log(`E o aluno ${melhorAluno} teve a maior nota ${melhorNota}`);
console.log(`A media da turma é de: ${(media/qtAlunos).toFixed(2)}`);