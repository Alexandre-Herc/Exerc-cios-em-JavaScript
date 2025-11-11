/* Faça um programa que lê 10 números digitados pelo usuário e informa quais desses números são primos e quais não são. Nesse programa você precisa de uma repetição para contar os 10 números que serão digitados. Mas, vai precisar de outra repetição para calcular se o número é primo ou não. Então nesse problema você precisa de 2 repetições. Contudo essa repetição para descoberta do primo deve ser dentro da repetição dos 10 números. Assim como no if, você pode colocar uma repetição dentro de outra repetição. E vai precisar disso nesse problema. */

for(var contador = 0; contador < 10; contador++){

    var numero = readlineSync.questionInt('Digite um valor: ');

    var divisores = 0;

    for(var cont = 1; cont <= numero; cont++){

        if(numero % cont == 0){
            divisores++
        }
    }

    if(divisores == 2){
        console.log(`O numero ${numero} é primo`);
    }else{
        console.log(`O numero ${numero} não é primo`);
    }
}