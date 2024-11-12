/*
script que informa o dia da semana, através da função: new Date() que me permite
tocar na data atual do sistema.

os metodos internos dessa função me permite o acesso a todas as informações
relacionadas a data no meu sistema.

por padrão, a função: new Date(): me

*/
/*
esse método:new Date(): me retorna o dia da semana, mês, dia do mês, ano, hora,
minuto, segundo, sistema de fuso horario.
*/
var data = new Date()
console.log(`data atual: ${data}`)

/*
essa função me retorna o dia da semana em valor numérico de 0 a 6:
0-domingo
1-segunda-feira
2-terça-feira
3-quarta-feira
4-quinta-feira
5-sexta-feira
6-sabado
7-domigo
*/
var dia_semana = data.getDay()

switch(dia_semana){
    case(0):
        console.log('Hoje é Domingo')
        break
    case(1):
        console.log('Hoje é Segunda-feira')
        break
    case(2):
        console.log('Hoje é Terça-feira')
        break
    case(3):
        console.log('Hoje é Quarta-feira')
        break
    case(4):
        console.log('Hoje é Quinta-feira')
        break
    case(5):
        console.log('Hoje é Sexta-feira')
        break
    case(6):
        console.log('Hoje é Sabado')
    default:
        console.log('[ERRO] dia inválido!')

}