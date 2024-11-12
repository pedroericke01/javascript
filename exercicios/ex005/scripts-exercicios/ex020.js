/*
código que lê um valor em Metros e converta em Centimetros e Milimetros:

100 Centimetros == 1 metro#
1.000 Milimetros == 1 metro#
*/

var distancia_metros = 5

var centimetros = (distancia_metros * 100)
var milimetros = (distancia_metros * 1000)

console.log(`A medida de ${distancia_metros} metros corresponde á ${centimetros} centimetros e ${milimetros} milimetros`)