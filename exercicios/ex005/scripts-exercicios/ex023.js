/* 
código que lê o preço de um produto e atribui 5% de desconto na compre de 10
unidades:
5% de um valor  == 0.05*produto #
*/

var preco_produto = 2.80 .toFixed(2)

var unidades_produto = 10

var val_integral = (preco_produto * unidades_produto)

if(unidades_produto >= 10){
    let desconto = (val_integral * 0.05)
    let val_desconto = (val_integral - desconto).toFixed(2)
    console.log(`Valor integral: ${val_integral} - 5% de desconto = Total R$${val_desconto}`)
} else{
    console.log(`Total a pagar = R$${val_integral}`)
}
console.log('Fim do Programa!')
