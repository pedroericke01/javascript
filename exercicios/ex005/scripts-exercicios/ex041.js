function sum(array){
    var soma = null;
    for(let cont=0; cont<array.length;cont+=1){
        soma += array[cont];
    }
    console.log(`O resultado da soma será:${soma}`);
}

var notas_bimestre = [5, 4, 3, 2];
sum(notas_bimestre);
