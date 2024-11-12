/*
código que determina o Perimetro de uma figura geométrica seguindo o teorema de
pitágoras:
comprimento do cateto oposto e adjascente e
por fim o comprimento da hipotenusa formula:
    C²= A²+B²

obs:

forma1:
vamos utilizar o módulo nativo Math do javascript e a função pow(), e depois a
função sqrt() para calcular a raiz quadrada da soma dos lados da figura; 

forma2:
podemos utilizar a função interna hypot() que calcula o valor da hipotenusa a 
partir da soma dos lados da fugura ao cubo:
*/

var a = 10

var b = 5

var c = (Math.pow(a,2) + Math.pow(b,2))

var hipotenusa = parseInt(Math.sqrt(c))

console.log(`A hipotenusa dessa figura é ${hipotenusa}cm`)

