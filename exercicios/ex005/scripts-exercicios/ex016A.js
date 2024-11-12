/*criando uma calculadora simples que permite ao usuário escolher qual operação
aritimética será realizada. podemos criar esse exercício com o uso de:
1-funções;
2-estrutura de decisão(condicionais)
3-estrutura de repetição com teste lógico no início;
4-estrutura de repetição com teste lógico no final;
5-estrutura de condições multiplas(switch, case, break);
6-estrutura de repetição com variável de controle;

nesse exercício (A) vamos praticar com as estruturas de decisão:*/

var num1 = 7
var num2 = 5

var operacao_aritmetica = 'subtração'.toUpperCase()

if (operacao_aritmetica == 'SOMAR' || operacao_aritmetica == 'SOMA' || operacao_aritmetica == 'ADIÇÃO'){
    let soma = (num1 + num2)
    console.log(`O resultado da soma de ${num1} + ${num2} é: ${soma}`)

} else if(operacao_aritmetica == 'SUBTRAIR' || operacao_aritmetica == 'SUBTRAÇÃO'){
    let subtracao = (num1 - num2)
    console.log(`O resultado da subtração de ${num1} - ${num2} é: ${subtracao}`)

} else if(operacao_aritmetica == 'MULTIPLICAR' || operacao_aritmetica == 'MULTIPLICAÇÃO'){
    let multiplicacao = (num1 * num2)
    console.log(`O resultado da multiplicação de ${num1} x ${num2} é: ${multiplicacao}`)

} else if(operacao_aritmetica == 'DIVIDIR' || operacao_aritmetica == "DIVISÃO"){
    let divisao = (num1 / num2)
    console.log(`O resultado da divisão de ${num1} % ${num2} é: ${divisao}`)

} else{
    console.log('Operação Inválida, tente novamente!')
}