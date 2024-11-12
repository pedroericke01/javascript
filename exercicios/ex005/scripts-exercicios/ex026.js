/*
forma1:
codigo que lê um numero Real e informa sua parte inteira Utilizando a função nativa 
ParseInt() do javascript:

forma2:
Utilizando o Modulo 'math' nativa do javascript e a função 'floor'
que informa a parte Inteira de um numero Real.
Realizando o arredendamento para baixo e ignora as casas decimais do numero.
ex:5.27 == 5 #

*/
var num1 = 10.50

console.log(`\nTipo de dado: ${typeof(num1)}`)

console.log(`\nForma 1: ${parseInt(num1)}`)

console.log(`\nForma 2: ${Math.floor(num1)}`)
