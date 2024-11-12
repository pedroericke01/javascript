//verificando se um numero é Par ou Impar através de um procedimento//

// passando o valor 'n' como um parâmetro formal que deverá ser passado para a função//
function verificar(n){
    
    if (n % 2 == 0){
        console.log(`O numero ${n} é PAR!`)
    } else{
        console.log(`o numero ${n} é IMPAR!`)
    }
}

numero = 6

//passando o valor armazenada na variavel 'numero' como parâmetro real e ativando
//o procedimento 'verificar()' acima:

verificar(numero)