/* 
um professor vai definir a ordem de apresentação de seus 4 alunos na turma:

foi utilizado a biblioteca 'math', nativa do javascript e a funcionalidade 
'random()', que escolhe um numero aleatório de ponto flutuante entre 0 e 1. 
*/

/* inicializando a lista dos alunos */
var lista_alunos = ['pedro', 'eva', 'nycolas', 'matheus']

/* criando lista auxiliar para a ordenação das apresentações: */
var lista_apresentacao = []

/* criando função que valida a escolha aleatória do sistema pelo fato de não poder
ser escolhido alunos repetidos para realizar apresentações: */
function escolha_valida(escolha, lista){
    if(lista.indexOf(escolha) != -1){
        return false;
    } else{
        return true;
    }
}

/* criando sistema principal: */
for(let cont = 0; cont < 4; cont +=1){

    /* realizando a escolha de um numero aleatório existende dentro do tamanho
    da lista principal dos alunos: */
    var escolha_aluno = Math.floor(Math.random()*lista_alunos.length)

    /* variável que armazena o nome do aluno escolhido aleatóriamente: */
    var nome_aluno = lista_alunos[escolha_aluno]

    /*fazendo a chamada da funçaõ que valida se a escolha aleatória do sistema é 
    válida ou não dentro da lista de apresentação */
    var res_escolha = escolha_valida(nome_aluno, lista_apresentacao)

    /* sistema de validação dos dados que garante que o nome escolhido não seja
    repetido na lista de apresentação: */
    if(res_escolha == false){
        console.log('Nome ja escolhido!')
        /* como precisamos de 4 nomes exatos na lista de apresenração, no caso
        da escolha repetida de um nome, não podemos perder o sorteio, precisaremos
        escolher um novo nome que ainda não existe. */
        cont -= 1
    } else{
        /* caso o nome seja válido, basta adicioná-lo na lista de apresentação */
        lista_apresentacao.push(nome_aluno)
    }

}
console.log(`\nLista de Apresentação:[${lista_apresentacao}]`)
console.log('Fim do Programa!')