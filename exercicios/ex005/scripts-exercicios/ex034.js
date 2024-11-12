/* script que escolhe automaticamente um numero entre 0 e 5 e pede para o usuário
advinhar qual numero foi escolhido;

vamos utilizar a biblioteca Math() nativa do javascript e a função Random() que 
escolhe um numero aleatório entre 0 e 1(com ponto flutuante por padão);
para corrigir esse 'problema' vamos informar para a função que o numero escolhido
deve ser inteiro.*/

var escolha_sistema = parseInt(Math.random()*5)
console.log(escolha_sistema)

var escolha_usuario = 1 ;

if(escolha_usuario == escolha_sistema){
    console.log('Você Acertou!');
} else{
    console.log('Você Errou!')
}
console.log('Fim do Jogo!')
