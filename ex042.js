/*
Ex Sequencia de Fibonacci

Construa um programa em que mostre 10 primeiros números da sequencia de fibonacci. Use a estrutura de repetição for
*/

var a = 0;
var b = 1;
var c = 0;
var sequencia = '';

sequencia += a + " " + b

for(var cont = 1; cont <= 8; cont++){
    c = a + b
    sequencia += " " + c 
    a = b
    b = c
}

console.log(sequencia);


/* 

var a = 0;
var b = 1;
var c = 1;

for(var cont = 1; cont <= 10; cont++){
    
    if(cont === 0){
        console.log(a)
    }else if(cont === 1){
        console.log(b)
    }else{
        console.log(c)
    }

    a = b + c 
    b = c 
    c = a
    
} */