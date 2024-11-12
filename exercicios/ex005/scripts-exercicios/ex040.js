/* 
script que verifica a aprovação de um empréstimo para a compra de uma casa
o valor da prestação mensal não pode ultrapassar 30% do salário do comprador do imóvel
o script vai perguntar o valor da casa, o salário do comprador, e em quantas vezes
ele deseja parcelar a compra:
*/

var renda_mensal = 4000;
console.log(renda_mensal.toFixed(2))

var valor_imovel = 100000;
console.log(valor_imovel.toFixed(2));

/* é possível parcelar em até 48x */
var quant_parcelas = 48

/* inicializando so calculos para analise de aprovação do empréstimo: */
var total_parcelas = (valor_imovel/quant_parcelas).toFixed(2);
var meta_aprovacao = (30/100)*renda_mensal.toFixed(2);

/* validando se o total das parcelas ultrapasse 30% do salário da pessoa: */
if(total_parcelas > meta_aprovacao){
    console.log('Empréstimo REPROVADO!');
    console.log(`O parcelamento em ${quant_parcelas}x será de R$${total_parcelas}, a meta de aprovação baseado no seu salário é R$${meta_aprovacao}`)
}else{
    console.log(`Èmpréstimo APROVADO!`);
    console.log(`O total de suas parcelas será de R$${total_parcelas} em ${quant_parcelas}x`);
    console.log(`Aproveite sua casa!`);
}
console.log('Fim do Programa!');
