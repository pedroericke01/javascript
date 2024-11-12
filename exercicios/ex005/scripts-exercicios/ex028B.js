/*
um professor escolhe aleatoriamente 1 de seus alunos 4 para apagar o quadro;

É utilizado modulos para esse fim, nesse caso o módulo:'Math', uma biblioteca
nativa do javascript e o método Random() desse módulo:

Será utilizada uma lista principal do sistema que vai armazenar o nome dos 
alunos que farão parte do sorteio;

vamos utilizar o laço de repetição com variável de controle para inserir o numero
exato dos 4 alunos no sistema e no final, percorrer a estutura do dado e escolher
aleatóriamente 1 dentre os 4 alunos;

tambem foi criado uma variável que vai controlar e armazenar essa escolha aleatória do professor'random.choice(parametro)' é o comando que vai realizar a escolha aleatória dentro do parametro do 'choice'#
*/

//inicializando a estrutura principal do sistema, a princípio estaá vazia:
lista_alunos = []
console.log(lista_alunos)

console.log(`Tam.estrutura principal:${lista_alunos.length}\n`)

var nome1 = "pedro";
lista_alunos.push(nome1)
console.log(lista_alunos)
console.log(`Tam.Atualizado:${lista_alunos.length}\n`)

var nome2 = "eva";
lista_alunos.push(nome2)
console.log(lista_alunos)
console.log(`Tam.Atualizado:${lista_alunos.length}\n`)

var nome3 = "matheus";
lista_alunos.push(nome3)
console.log(lista_alunos)
console.log(`Tam.Atualizado:${lista_alunos.length}\n`)

var nome4 = "julia";
lista_alunos.push(nome4)
console.log(lista_alunos)
console.log(`Tam.Atualizado:${lista_alunos.length}\n`)

var escolha_sistema = parseInt(Math.random()*lista_alunos.length)
console.log(`O aluno(a): ${lista_alunos[escolha_sistema]} foi escolhido para apagar o quadro!\n`)
