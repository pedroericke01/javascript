/*
aprendendo estrutura de repetição com teste lógico no final(do, while) em 
javascript:

vamos comer uma pizza de 12 fatias e no final da pizza dizer: 'a pizza acabou!'
*/

var quant_fatias = 12

do{
    console.log('Essa pizza é minha favorita!')
    quant_fatias -= 1
} while(quant_fatias > 0)

if (quant_fatias == 0){
    console.log('A pizza acabou!')
}

console.log('Fim do programa!')
