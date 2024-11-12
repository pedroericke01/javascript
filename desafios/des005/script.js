var fonte_dados = []

//função para validação do numero inserido pelo usuário//
function numero_valido(n){
    
    let numero = Number(n.value)

    if (numero <= 0 || numero > 100){
        return false
    } else{
        return true
    }
} 

//funçaõ para analise da fonte dos dados, verificando se o numero que meu usuário
//deu de entrada no sistema, ja exista ou não na lista//
function numero_lista(num, lista){
    
    let numero = Number(num.value)

    if(lista.indexOf(numero) == -1){
        //numero não existe na lista//
        return false
    } else{
        //numero existe na lista e será informado seu indice respectivo//
        return true
    }
}

//criando a principal funçção do sistema//
function adicionar(){

    // ligando as principais variáveis do html5 ao script são estruturas globais que
    //fcarão disponíveis para todo meu sistema:
    var txt_numero = window.document.getElementById('txt_numero')
    
    var painel_dados = window.document.getElementById('painel_dados')

    //chamada da função de validação dos numeros:
    var resultado_numero = numero_valido(txt_numero)

    if(resultado_numero == false){
        //numero inválido//
        window.alert('[ERRO!]revise os dados e tente novamente!')
    } else{
        //numero válido!//

        //chamada para a função que verifica se o numer(ja autenticado) existe ou
        //não dentro de minha fonte de dados//
        var resultado_lista = numero_lista(txt_numero, fonte_dados)

        if (resultado_lista == true){
            //numero ja existe na lista, não poderá ser adicionado//
            window.alert('[ERRO!]Numero ja existe na lista!')
        } else{
            //numero não existe na lista, poderá SIM ser adicionado//
            
            //adicionando o numero inserido pelo usuário, ja auteticado e que
            //não existe na lista, no final de minha fonte de dados:
            fonte_dados.push(Number(txt_numero.value))
            
            //criando um elemento <option> dinamicamente pelo javascript,
            //atribuindo ao mesmo uma string e adicionando-o no final da tag
            //<select> do meu html5
            var mensagem = window.document.createElement('option')
            mensagem.text = `Numero ${txt_numero.value} adicionado!`
            painel_dados.appendChild(mensagem)
            
        }
        //automatizando a limpeza do input Numero: com javascript seja no momento
        //de o input ser valido ou não:
        txt_numero.value = ''
        txt_numero.focus()
    }
}

/*função para percorrer a fonte dos dados e no momento que o usuário clicar em
finalizar o sistema deve:
1-informar quantos numero foram adicionados ao todo;
2-informar qual é o menor numero;
3-informar qual é o maior numero;
4-informar a soma dos numeros;
5-informar a média dos numeros; 
*/
function finalizar(){
    if (fonte_dados.length == 0){
        // no caso de a lista está vazia, não será possível interajir com a 
        //função finalizar:
        window.alert('[ERRO!]revise os dados e tente novamente!')
    } else{
        
        var resposta_final = window.document.getElementById('res')

        var maior = fonte_dados[0]
        var menor = fonte_dados [0]
        var soma = 0

        for(let cont = 0; cont < fonte_dados.length; cont += 1){
            
            soma += fonte_dados[cont]

            if (fonte_dados[cont] > maior){
                maior = fonte_dados[cont]
            } else if(fonte_dados[cont] < menor){
                menor = fonte_dados[cont]
            }
        }

        var media = (soma/fonte_dados.length)

        resposta_final.innerHTML = ``

        resposta_final.innerHTML += `<p>Foram adicionados: ${fonte_dados.length} numeros ao todo!</p>`

        resposta_final.innerHTML += `<p>O maior numero adicionado foi: ${maior}</p>`

        resposta_final.innerHTML += `<p>O menor numero adicionado foi: ${menor}</p>`

        resposta_final.innerHTML += `<p>A soma dos valores adicionados é: ${soma}</p>`

        resposta_final.innerHTML += `<p>A média dos valores adicionados é: ${media}</p>`
        
}

}
