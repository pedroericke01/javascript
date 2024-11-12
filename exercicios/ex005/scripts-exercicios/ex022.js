/*
código que lê a largura e altura de uma parede e calcula sua area;
1-tambem informa a quantidade de tinta necessaria para pinta-la totalmente;
2-com a cada 1litro de tinta, pintamos 2m² da parede;
3-Para encontrar a Area de uma figura, basta multiplicar sua Base pela Altura. 
isso é seu Comprimento/largura pela Altura. esse resultado será em m²#

*/

var comprimento = 6 

var altura = 6

var area = (comprimento*altura)

quant_tinta = (area/2) .toFixed(2)

console.log(`Será necessario ${quant_tinta} litros de tinta para pintar essa parede.`)