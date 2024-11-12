/*script que recebe as notas dos 4 bimestres de um aluno e  verifica se a media:
1-se a média for maior que 6, o aluno está aprovado;
2-se a média do aluno for igual a 6, o aluno está em recuperação;
2-se a nota do aluno for menor que 6, o aluno está reprovado;
*/

var b1 = 3
var b2 = 7
var b3 = 10
var b4 = 10

var media = (b1+b2+b3+b4)/4 .toFixed(2)

//verificando a aprovação ou reprovação do estudante segundo sua média:
if(media > 6){
    console.log(`Média do Aluno: ${media}`)
    console.log('Aluno Aprovado!')

} else if(media == 6){
    console.log(`Média do Aluno:${media}`)
    console.log('Aluno em Recuperação')
} else{
    console.log(`Média do Aluno:${media}`)
    console.log('Aluno Reprovado!')
}
console.log('Fim do Programa!')
