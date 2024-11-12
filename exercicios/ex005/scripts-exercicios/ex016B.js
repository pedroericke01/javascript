/*criando uma calculadora simples que permite ao usuário escolher qual operação
aritimética será realizada. podemos criar esse exercício com o uso de:

1-estrutura de decisão(condicionais)
2-estrutura de condições multiplas(switch, case, break);
3-estrutura de repetição com teste lógico no início;
4-estrutura de repetição com teste lógico no final;
6-estrutura de repetição com variável de controle;
7-funções;

nesse exercício (B) vamos praticar com as estruturas de condições multiplias:*/

var num1 = 7
var num2 = 5

var operacao_aritmetica = 'cabeçalho http'.toUpperCase()
//estrutura para validação dos dados inseridos pelo usuário, esses devem auxiliar
//a execução do case principal://
if(operacao_aritmetica == 'ADIÇÃO' || operacao_aritmetica == 'SOMA' || operacao_aritmetica == 'SOMAR'){
    operacao_aritmetica = 'SOMA'

} else if(operacao_aritmetica == 'SUBTRAIR' || operacao_aritmetica =='SUBTRAÇÃO'){
    operacao_aritmetica = 'SUBTRAÇÃO'

} else if( operacao_aritmetica == 'MULTIPLICAR' || operacao_aritmetica == 'MULTIPLICAÇÃO'){
    operacao_aritmetica = 'MULTIPLICAÇÃO'

} else if(operacao_aritmetica == 'DIVIDIR' || operacao_aritmetica == 'DIVISÃO'){
    operacao_aritmetica = 'DIVISÃO'

} else{
    operacao_aritmetica = 'inválida!'
}
//estrutura case principal para a execução do programa//
switch(operacao_aritmetica){

    case('SOMA'):
        let soma = (num1 + num2)
        console.log(`O resultado da soma de: ${num1} + ${num2} é: ${soma}`)
        break
    
    case('SUBTRAÇÃO'):
        let subtracao = (num1 - num2)
        console.log(`O resultado da subtração de: ${num1} - ${num2} é: ${subtracao}`)
        break

    case('MULTIPLICAÇÃO'):
        let multiplicacao = (num1 * num2)
        console.log(`O resultado da multiplicação de: ${num1} x ${num2} é: ${multiplicacao}`)
        break

    case('DIVISÃO'):
        let divisao = (num1 / num2)
        console.log(`O resultado da divisão de: ${num1} % ${num2} é: ${divisao}`)
        break

    default:
        console.log('Operação inválida!')

}
console.log('Fim do Programa!')
