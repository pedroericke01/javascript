fonte_dados = [1,2,3,4,5]

var maior = fonte_dados[0]
var menor = fonte_dados [1]

for(let cont = 0; cont < fonte_dados.length; cont += 1){
    if (fonte_dados[cont] > maior){
        maior = fonte_dados[cont]
    } else if (fonte_dados[cont] < menor){
        menor = fonte_dados[cont]
    }
}
console.log(`Meu maior Vale:${maior}`)
console.log(`Meu menor Vale:${menor}`)
