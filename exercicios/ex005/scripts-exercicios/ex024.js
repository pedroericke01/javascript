/*
código que lê o preço de um produto e segue a regra de um negocio:
1-para pagamentos a vista será dado 7% de desconto;
2-para pagamentos no cartão será acresentado 5% de taxa;
*/

var preco_produto = 2.00

var quantidade_produto = 5 

var total = (preco_produto*quantidade_produto)
/*

*/
var forma_pagamento = 'a vista' .toUpperCase()

if (forma_pagamento == 'CARTÃO DE CRÉDITO'){
    let taxa = (total * 0.05)
    let total_taxa = (total + taxa)
    console.log(`Total: R$${total} + 5% taxa de parcelamento = R$${total_taxa}`)

} else if(forma_pagamento == 'A VISTA'){
    let desconto = (total * 0.07)
    let total_desconto = (total - desconto)
    console.log(`Total: R$${total} - 7% desconto = R$${total_desconto}`)
} else{
    console.log('Escolha uma forma de pagamento disponível!')
}