//script que mede a velocidade do veículo de uma pessoa e no caso de ultrapassar 60
//km/h ele será multado:

var velocidade = 70

console.log(`A velocidade de seu Automovel é de: ${velocidade}km/h`)

if (velocidade > 60) {
    console.log('Você ultrapassou o limite de velocidade de 60km/h. MULTADO!')
}
console.log('Dirija sempre usando o cinto de segurança')