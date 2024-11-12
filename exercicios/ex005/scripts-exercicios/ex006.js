//script que da bom dia, boa tarde e boa noite para um usuário dependendo da hora
//informada (primeiramente nesse script) pelo usuario://

var hora = 20

if (hora < 12){
    console.log('Bom Dia!')
} else if(hora == 12 || hora <= 18){
    console.log('Boa tarde!')
} else{
    console.log('Boa Noite!')
}
