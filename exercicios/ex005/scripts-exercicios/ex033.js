/* script que recebe o nome completo de uma pessoa e no final retorna o primeiro e
ultimo nome dessa pessoa:*/

/* variável que recebrá o nome da pessoa:
.trim()->apaga os espaços vazios tanto do início quanto do final da string informada;
*/
var nome = "pedro ericke marques gomes".trim().toUpperCase()

/* quebrar a string em substrings, informando que cada espaço em branco existente
dentro da string será um ponto de quebra da string. Será criado um Array; */
var array_nome = nome.split(' ')
console.log(array_nome)

console.log(`Seu primeiro nome é:${array_nome[0]}`)
console.log(`Seu ultimo nome é ${array_nome[(array_nome.length)-1]}`)