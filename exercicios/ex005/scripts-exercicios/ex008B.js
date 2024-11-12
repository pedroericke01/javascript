/*
aprendendo estrutura de repetição com teste lógico no início em javascript
eu quero escrever para o usuário:
vamos comer uma pizza de 12 fatias e no final da pizza dizer: 'a pizza acabou!'
*/

var quant_fatias = 12

while(quant_fatias > 0){
    console.log('Essa pizza é minha favorita!')
    quant_fatias -= 1
    
    if (quant_fatias == 0){
        console.log('A pizza acabou!')
    }
}
console.log('Fim do programa!')
