/*
programa que lê o nome completo de uma pessoa e informa:
1- o nome com todos os caracteres maiúsculos;
2- o nome com todos os caracteres minúsculos;
3- o tamanho da string desconsiderando os caracteres vazios;
4- quantas letras tem o primeiro nome dessa pessoa.
obs:
I-'strip()' quebra a string em substrings onde ha espaços vazios e
reestrutura a contagem dos índices;
*/

var lista_nomes = ['pedro ericke', 'eva coutinho', 'nycolas marques', 'matheus']

var escolha_usuario = 'lucas'.toLowerCase()

var pos_item_array = null

if(lista_nomes.indexOf(escolha_usuario) != -1){
    /* atualizando o valor da variável pos_item_array, atribuindo o índice correspondente
    ao elemento buscado a mesam: */
    pos_item_array = lista_nomes.indexOf(escolha_usuario)

    /* quebrando a string(escolha_usuário/nome escolhido) em subtrings separando-as
    pelo: ' ' e todos os caracteres de espaços vazios serão desconsiderados como
    valores contáveis: */
    let espaco_vazio = (escolha_usuario.split(' ').length-1)

    /* imprimindo o resultado final processado pelo sistema ao usuário: */
    console.log(`O nome:${escolha_usuario} possui ${(escolha_usuario.length) - espaco_vazio} caracteres!`)

} else{
    console.log(`O nome ${escolha_usuario} NÃO existe na lista de nomes!`)
}
console.log('Fim do Programa!')
