/*criando uma calculadora simples que permite ao usuário escolher qual operação
aritimética será realizada. podemos criar esse exercício com o uso de:

1-estrutura de decisão(condicionais)

2-estrutura de condições multiplas(switch, case, break);

3-funções;

nesse exercício (C) vamos praticar com o uso de funções:*/
function somar(n1, n2){
    let soma = (n1+n2)
    return soma
}

function subtrair(n1, n2){
    let subtracao = (n1-n2)
    return subtracao
}

function multiplicar(n1, n2){
    let multiplicacao = (n1*n2)
    return multiplicacao
}

function dividir(n1, n2){
    let divisao = (n1/n2)
    return divisao
}

var num1 = 6
var num2 = 2

var operacao_aritmetica = 'somar'.toUpperCase()

if (operacao_aritmetica == 'ADIÇÃO' || operacao_aritmetica == 'SOMA' || operacao_aritmetica == 'SOMAR'){
    var resultado = somar(num1, num2)
    console.log(`O resulatado da soma entre ${num1} e ${num2} será ${resultado}`)

} else if(operacao_aritmetica == 'SUBTRAIR' || operacao_aritmetica == 'SUBTRAÇÃO'){
    var resultado = subtrair(num1, num2)
    console.log(`O resultado da subtração entre ${num1} e ${num2} será ${resultado}`)

} else if(operacao_aritmetica == 'MULTIPLICAÇÃO' || operacao_aritmetica == 'MULTIPLICAR'){
    var resultado = multiplicar(num1, num2)
    console.log(`O resultado da multiplicação entre ${num1} e ${num2} será ${resultado}`)

} else if(operacao_aritmetica == 'DIVISÃO' || operacao_aritmetica == 'DIVIDIR'){
    var resultado = dividir(num1, num2)
    console.log(`O resultado da divisão entre ${num1} e ${num2} será ${resultado}`)
} else{
    console.log('Operação Inválida!')
}
console.log('Fim do Programa!')
