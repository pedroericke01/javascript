//script de sistema de votos, no brasil, um jovem tendo idade entre 16 e 18 anos
//tem a possibilidade do voto opcional, assim com na idade acima de 67 anos.
// para idades menores que 16, ainda não pode votar.
// para idades maiores 18 o voto é obriga partirtório.

var idade = 20

console.log(`Você tem ${idade} anos.`)

//praticando sobre estruturas de decisão aninhadas://
if(idade < 16){
    console.log('Não Vota!')
} else if(idade <= 18 || idade > 67){
    console.log('Voto opcional!')
} else{
    console.log('Voto obrigatório!')
}