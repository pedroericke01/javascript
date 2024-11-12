//verificando se um numero é Par ou Impar através de uma função//

// passando o valor 'n' como um parâmetro formal que deverá ser passado para a função//
function verificar(n){
    
    if (n % 2 == 0){
        return `O numero ${n} é PAR!`
    } else{
        return `O numero ${n} é IMPAR!`
    }
}

numero = 8

//passando o valor armazenada na variavel 'numero' como parâmetro real e ativando
//a função 'verificar()'. pelo fato de uma função retornar um valor, seu retorno
//deve ser armazenado em uma variável://

var resultado = verificar(numero)

console.log(resultado)
