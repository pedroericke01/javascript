/* 
algoritmo que verifica se uma pessoa tem 'Silva no nome';

Função 'variavel.trim()' ignora os caracteres de espaço vazio 'indesejado'
(inicio e fim e não os que separam nome e sobrenomes) no input do usuário;

*/

var nome = 'Ana Mosconi da Silva'.trim().toUpperCase()

var resultado = null;

if(nome.indexOf('SILVA') != -1){
    resultado = true;
} else{
    resultado = false;
}

console.log(`Seu nome tem silva? ${resultado}`)
