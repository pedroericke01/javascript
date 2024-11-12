/* 
código que verifica se o input que o usuário fez inicia com os caracteres:'pedro';

independente do tipo de str que o usuário digitar(maiúscula ou minúscula,
ou até ambas) o resultado será validado corretamente;

utiliza-se tambem a função trim() que remove espaços vazios 'indesejados' no início
e no final de uma string;

variavel.slice(0, 5) exprime a quantidade de caracteres que a str 'Santo' possui;
ou seja verifica os 5 primeiros caracteres da STR do input;

a função 'variavel.toUpperCase()' vai passar todos os caracteres do input do
usuário para MAIUSCULAS e fazer a comparação desejada.
E perceba que o cactere '== SANTO' deve estar de acordo com essa função;
*/


var nome = 'paulo ericke marques gomes'.toUpperCase().trim()

/* sistema que verifica se o início da minha string começa com pedro ou não:*/
var resultado = null;

if(nome.slice(0,5) == 'PEDRO'){
    resultado = true
} else{
    resultado = false;
}
console.log(`Seu nome inicia com PEDRO? ${resultado}\n`)
