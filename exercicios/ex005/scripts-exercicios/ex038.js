/* funções CallBack são todas aquelas que são executadas após a finalização de uma função
antecessora, pois depende dessa para ser executada corretamente: */

/* nesse caso vamos criar uma callback que vai imprimir o resultado das operações
aritméticads de uma calculadora básica: para que ela seja executada corretamente, essa
deverá ser invocada dentro da função antecessora por exemplo:*/
function callback(resultado){
    console.log(`O resultado dessa operação é ${resultado}`);
}

function somar(n1, n2){
    callback(n1+n2);
}

function subtrair(n1, n2){
    callback(n1-n2);
}

function multiplicar(n1, n2){
    callback(n1*n2);
}

function dividir(n1, n2){
    callback(n1/n2);
}

var num1 = 4
var num2 = 4

console.log('Olá')
console.log('Mundo')
console.log('meu')

const resultado = dividir(num1, num2)

console.log('nome')
console.log('é')
console.log('pedro')