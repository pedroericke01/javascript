//calculando o fatorial de um numeor a partir de uma função:

function fatorial(num){
    
    let fatorial = 1

    for(let cont = num; cont >= 1; cont -= 1){
        fatorial *= cont
    }
    return `O Fatorial de ${num} é ${fatorial}`

}

num1 = 4
console.log(`Seu numero escolhido foi ${num1}`)

var resultado = fatorial(num1)
console.log(resultado)