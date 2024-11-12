/*
script que lÊ a velocidade de um carro e caso ele ultrapasse a media de:80hm/h,
será multado cada novo km/h acima da media será cobrado R$7.00.
*/

var velocidade = 60;

if(velocidade > 80){
    let multa_velocidade = ((velocidade - 80) * 7).toFixed(2);
    console.log('Você ultrapassou o limite de velocidade de 80KM/H');
    console.log(`Você será multado com R$${multa_velocidade}`)
} else{
    console.log('Limite de velocidade permitido!');
    console.log('Dirija sempre com o cinto de segurança');
}
console.log('\nFim do Programa!');