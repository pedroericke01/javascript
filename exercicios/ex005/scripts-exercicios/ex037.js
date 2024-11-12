function isNumber(caractere){

    const conv_caractere = Number(caractere)

    const base_auxiliar = [0,1,2,3,4,5,6,7,8,9,10];

    if(base_auxiliar.indexOf(conv_caractere) != -1){
        return true;
    }else{
        return false;
    }
}

var palavra ='pedro1234'.trim()

for(let cont=0; cont<palavra.length;cont+=1){
    
    let resultado = isNumber(palavra[cont])
    
    if(resultado == true){
        console.log(`O caractere ${palavra[cont]} é Numérico!`);
    }else{
        console.log(`O caractere ${palavra[cont].toUpperCase()} é Alfabético!`);
    }
}
