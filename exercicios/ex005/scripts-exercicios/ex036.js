/*
código que pergunta a distância de uma viagem em km#
calcule o preço da passagem, cobrando R$0,50 por km para viagens de até 200km.#
para viangens mais longas(maior que 200) será cobredo R$0,45 por km#
*/

var dist_viagem = 250;
console.log(`Distância da viagem: ${dist_viagem}km`)

if(dist_viagem <= 200){
    let tot_viagem = (dist_viagem*0.50).toFixed(2);
    console.log(`O total de sua passagem será R$${tot_viagem}`);
} else{
    let tot_viagem = (dist_viagem*0.45).toFixed(2);
    console.log('OBS:Sua viagem ultrapassou 200km')
    console.log(`O total de sua passagem será: R$${tot_viagem}`)
}
console.log('\nFim do programa!')
