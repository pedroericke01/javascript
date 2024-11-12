var array_numeros = [4,2,10]

var maior = array_numeros[0]
var menor = array_numeros[0]

for(let cont=0; cont < array_numeros.length; cont+=1){

    if(array_numeros[cont] >= maior){
        maior = array_numeros[cont];
    }
    else if(array_numeros[cont] <= menor){
        menor = array_numeros[cont];
    }
}
console.log(maior)
console.log(menor)
