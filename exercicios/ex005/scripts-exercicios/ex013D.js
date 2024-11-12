//realizando a soma de 2 numeros a partir de uma função//

//atribuindo n1 e n2 como 2 parâmetros formais que deverão ser informados na chamada
// da função somar() para executar-la corretamente:

/*
utilizando parâmetros opcionais: (n1=0 e n2=0), no caso de não informar-mos
os parâmetros reais durante a chamada á função, o valor não informado será 
igual a zero(0) pois é um parâmetro opcional:
*/

function somar(n1 = 0, n2 = 0){
    let soma = (n1+n2)
    return `A soma de ${n1} + ${n2} será ${soma}`
}

num1 = 6
num2 = 6

//fazendo a chamada e passagem dos parâmetros reais da função, seu resultado será
//armazenado na variável 'resultado'//
var resultado = somar(num1, num2)
//imprimindo o valor da variável resultado//
console.log(resultado)