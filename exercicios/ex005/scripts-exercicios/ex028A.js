/*
um professor escolhe aleatoriamente um de seus alunos para apagar o quadro;

É utilizado modulos para esse fim, nesse caso o módulo:'Math' nativo da linguagem
javascript e a função 'Random()' desse módulo;

Será criada uma lista que seus parametros são variáveis que armazenam um dado,
quando algum desses parâmetros foram 'acionados' uma função será ativada.

tambem foi criado uma variável que vai controlar e armazenar essa escolha
aleatória do professor 'random.choice(parametro)' é o comando que vai realizar
a escolha aleatória dentro do parametro do 'choice'#
*/

var lista_alunos = ['pedro', 'eva', 'matheus', 'felipe']

var escolha = parseInt(Math.random() * lista_alunos.length)

console.log(`Èscolha do Sistema:${escolha}`)

console.log(`O aluno ${lista_alunos[escolha]} foi o escolhido!`)
