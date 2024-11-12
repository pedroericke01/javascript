//script que da bom dia, boa tarde e boa noite para um usuário dependendo da hora
//a partir da data atual do sistema. 
//a função: new Date(): me permite tocar na data e todas as informações relacionadas
// a data atual do sistema.//

var data = new Date()

var hora = data.getHours()
console.log(`Agora são ${hora} horas`)

if (hora < 12){
    console.log('Bom Dia!')
} else if(hora == 12 || hora <= 18){
    console.log('Boa tarde!')
} else{
    console.log('Boa Noite!')
}
