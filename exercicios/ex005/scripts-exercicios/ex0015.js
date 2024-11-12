//script em javascript que pergunta o nome e a idade de uma pessoa e no final
//vai imprimir essas informações para ela//

var nome = 'pedro'

var idade = 20

if(nome.length <= 0 || idade <= 0){
    console.log(`Nome e/ou idade inválida!`)
}else{
   console.log(`Olá ${nome} voce tem ${idade} anos!`)
}

