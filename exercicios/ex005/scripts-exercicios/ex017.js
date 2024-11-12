/*
Código que lê um numero inteiro e mostra seus sucessores e antecessores para isso:
1-vamos utilizar uma lista, variável composta;
2-e a estrutura de repetição com variável de controle:for(): que vai auxiliar no 
desenvolvimento desse sistema;
*/

var num_usuario = 4

var numeros = [0,1,2,3,4,5,6,7,8,9,10]

//criando variáveis auxiliares, uma para armazenar valores antecessores do numero
//e outra para valores sucessores escolhido pelo usuário:
var aux_antecessor = []

var aux_sucessor = []

//loop que percorre a fonte e dados principal do sistema e verifica se existe
//algum numero maior e algum numero menor do que o escolhido:

for(let cont = 0; cont < numeros.length; cont+=1){
    if(numeros[cont] < num_usuario){
        aux_antecessor.push(numeros[cont])
    } else if(numeros[cont] > num_usuario){
        aux_sucessor.push(numeros[cont])
    }
}
console.log(`Lista Antecessores atualizada: ${aux_antecessor}`)
console.log(`Lista sucessores Atualizada:${aux_sucessor}`)
