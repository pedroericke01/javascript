/* programa que escolhe 5 numeros aleatórios entre 0 e 10, e não repetidos e os
coloca dentro de uma lista; */

var lista_nums = []
console.log(`Lista Principal:${lista_nums}`)
console.log(`Tam.Lista Principal:${lista_nums.length}\n`)

/* criando função que vai percorrer mina estrutura principal e verificar se o numero
escolhido é válido, ou seja não existe na lista, ou é inválido, isso é,
ja existe na lista. */
function numero_valido(numero, lista){
    if(lista.indexOf(numero) != -1){
        /* numero ja existe na lista */
        return false
    } else{
        /* numero não existe na lista */
        return true
    }
}

/* loop que vai escolher 5 numeros aleatórios */
for(let cont = 0; cont <= 4; cont+=1){
    /* implementando sistema que ecolhe o numero aleatório com arredondamento
    para baixo: */
    let num_aleatorio = Math.floor(Math.random()*10)
    /* fazendo a chamada a funçaõ de validação do numero, que verifica se o 
    escolhido é valido ou não: */
    let res_numero = numero_valido(num_aleatorio, lista_nums)
    /* estrutura de decisão que garante que so será adicionado numeros válidos
    dentro da minha lista: */
    if(res_numero == false){
        console.log('Numero Inválido!\n')
        /* no caso da eascolha de um valor inválido, não podemos perder o objetivo
        de alcançar ao todo 5 numeros válidos cadastrados na lista: */
        cont -= 1
    } else{
        /* sendo o numero válido, vamos adiciona-lo na lista! */
        lista_nums.push(num_aleatorio)
        console.log(`Lista Atualizada:[${lista_nums}]`)
        console.log(`tam.Atualizado:${lista_nums.length}\n`)
    }
}

console.log('Fim do Programa!')