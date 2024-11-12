/*
código que pergunta a quantidade de KM percorridos em um carro alugado.
Assim como a quantidade de dias em que o carro foi utilizado.
calcule o preço a pagar sabendo que a diária/aluguel é R$60.0 e a cada 1KM rodade é cobrado R$0.15#

*/

var dias_alugados = 5
console.log(`Dias Alugados:${dias_alugados}`)

var km_percorridos = 15
console.log(`Km percorridos:${km_percorridos}`)

var total_diaria = (dias_alugados*60).toFixed(2)
var total_km = (km_percorridos*0.15).toFixed(2)

var total = (Number(total_diaria) + Number(total_km))

console.log(`\nTotal por dias alugados: R$${total_diaria}`) 
console.log(`Total por km percorridos: R$${total_km}`)
console.log(`Total a ser Pago: R$${total}\n`)
