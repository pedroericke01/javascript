//calculando o fatorial de um numeor a partir de um procedimento:

function fatorial(num){
    
    let resultado = 1

    for(let cont = num; cont >= 1; cont -= 1){
        resultado *= cont
    }
    console.log(`O Fatorial de ${num} é ${resultado}`)

}

num1 = 4
console.log(`Seu numero escolhido foi ${num1}\n`)

fatorial(num1)