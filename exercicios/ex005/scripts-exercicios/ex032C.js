/* sistema que pega o nome e sobrenome do usuário inserido: */

var nome = 'eva south da silva'.trim().toUpperCase();
/* sistema que percorre minha string e verifica quantas letras E existem:
var quant = null
for(let cont = 0; cont < nome.length; cont+=1){
    if(nome[cont].toUpperCase() == 'E'){
        quant += 1
        console.log(`O indice ${cont} corresponde ao caractere ${nome[cont]}`)
    }
}
console.log(`Èxistem ao todo ${quant} caracteres E.`)

*/

/* quebrando a string em substrings e informando ao sistema que todos os caracteres
vazios representam uma quebra de string uma entre a outra: */
var array_strings = nome.split(' ')

/* imprimindo o novo array com o processamento realizado acima */
console.log(array_strings)

/* extraindo o nome e sobrenome do usuário do meu array acima e convertendo para
o tipo de dado String(), pelo fato de ser um objeto, por padão: */
var nome_sobrenome = array_strings.slice(0, 2).toString()

/* montando o nome e sobrenome do usuário e trocando , por espaços vazios: */
console.log(`Olá ${nome_sobrenome.replace(',', ' ')} seja bem vindo!`)

/* contando a quant de caracteres que possuem o 1° nome: */
console.log(`Seu primeiro nome possui: ${array_strings[0].length} caracteres!`)

/* contando a quant de caracteres que possuem o 2° nome: */
console.log(`Seu segundo nome possui: ${array_strings[1].length} caracteres!`)
