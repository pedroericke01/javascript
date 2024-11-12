//script para criar uma tabuada de um numero inserido pelo usuário e exibi-lo em um
//painel no html5:
function contagem(){
    //ligando o input do numero do usuário ao meu script no js:
    var txt_numero = window.document.getElementById('txt_num')

    //convertendo o input do usuário de string para valor numerico:
    var numero = Number(txt_numero.value)
    
    if(numero < 0 ){
        window.alert('[ERRO!]revise as informações e tente novamente.')
    } else{
        //ligando a tag select do html5 no script js:
        var tabela = window.document.getElementById('sel_tabuada')

        tabela.innerText = ''

        //uma tabuada padrão possui até n x 10//
        for(var contador = 1; contador <= 10; contador += 1){
            //criando a tag option dinamicamente pelo javascript no html5:
            var item = window.document.createElement('option')

            //adicionando um texto a minha tag option criada acima://
            item.text = `${numero} x ${contador} = ${numero*contador}`
            
            //adicionando esse item criado dinamicamente no final do meu dataframe select:
            tabela.appendChild(item)
            
        }

    }
}
    
    