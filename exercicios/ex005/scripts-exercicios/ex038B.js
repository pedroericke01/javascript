/* funções CallBack são todas aquelas que são executadas após a finalização de uma função
antecessora, pois depende dessa para ser executada corretamente: */

/* nesse caso vamos criar uma callback que vai imprimir o resultado das operações
aritméticads de uma calculadora básica: para que ela seja executada corretamente, essa
deverá ser invocada dentro da função antecessora por exemplo:*/
function callback(res){
    console.log(`O resultado dessa operação é ${res}`);
}

function somar(n1, n2, callback){
    let resultado = n1+n2;
    callback(resultado);
}

function subtrair(n1, n2, callback){
    let resultado = n1-n2;
    callback(resultado);
}

function multiplicar(n1, n2, callback){
    let resultado = n1*n2;
    callback(resultado);

}

function dividir(n1, n2, callback){
    let resultado = n1/n2;
    callback(resultado);
}

var num1 = 4
var num2 = 4

console.log('Olá')
console.log('Mundo')
console.log('meu')

const resultado = dividir(num1, num2, callback)

console.log('nome')
console.log('é')
console.log('Pedro!')
