/*
1-o usuário vai ser capaz de escolher um numero para iniciar uma contagem;
2-o usuário vai ser capaz de escolher um numero para finalizar a contagem;
3-o usuário vai escolher um numero que será o intervalo entra os numeros de inicio
e fim;
exemplo:
numero_inicio = 1
numero_final = 10
numero_intervalo = 2;
contagem:1,3,5,7,9
*/

//vamos utilizar a estrutura de repetição com variavel de controle:for();
/*
for(num = 1; num <= 10; num += 2){
    console.log(`Valor do numero:${num}`)
}
console.log('Fim do Programa!')
*/

function contagem(){
    //ligando os principais inputs do html5 ao script para começar a interação do
    //sistema com o usuário:
    var txt_comeco = window.document.getElementById('txt_inicio')
    var txt_final = window.document.getElementById('txt_fim')
    var txt_passos = window.document.getElementById('txt_intervalo')

    //convertendo os inputs de strings para valores numéricos e extraindo os
    //dados inseridos pelos usuários:
    var comeco = Number(txt_comeco.value)
    var final = Number(txt_final.value)
    var passos = Number(txt_passos.value)

    //desejo criar uma tag de paragrafo no html5 pelo javascript dinamicamente//
    //ligando a div msg do html5 para exibir a contagem dos valores para o usuário//
    var mensagem = window.document.querySelector('#msg > p')

    //estamos validando que os inpust do usuário sejam sempre numeros maiores que 0:
    if(comeco < 0 || final < 0 || passos < 0){
        window.alert('[ERRO!]revise os dados e tente novamente')
    } else{
        mensagem.innerHTML = `Contando:<br>`
        //inputs com numero válidos (maiores que zero)//
        /*
        precisamos validar os dados dos inputs do numero_começo e numero_final:
        
        1-no caso de o numero_começo for maior que o numero_final, a logica
        do script deverá ser decrementar.

        2-no caso de o numero_começo for menor que o numero_final, a lógica 
        do script devrá ser incrementar.
        */
        
        if (passos >= (comeco+final)){
            window.alert('[ERRO!]revise os dados e tente novamente')
        
        } else if(passos == 0){
            
            passos = 1
            
            if(comeco > final){
                //decrementar

                for(var n=comeco; n >= final; n -= passos){
                    mensagem.innerText+=` ${n}-> `   
                }
                mensagem.innerHTML += `Fim!`

            } else if(comeco < final){
                //incrementar:
                for(var n=comeco; n <= final; n += passos){
                    mensagem.innerText+=` ${n} -> `
                }
                mensagem.innerText+=` Fim!`
        
            } else{
                //mensagem de erro pois os numeros são iguais//
                window.alert('[ERRO!] revise os dados e tente novamente!')
            }

        } else{

            if(comeco > final){
                //decrementar
    
                for(var n=comeco; n >= final; n -= passos){
                    mensagem.innerText+=` ${n}-> `   
                }
                mensagem.innerHTML += `Fim!`
    
            } else if(comeco < final){
                //incrementar:
                for(var n=comeco; n <= final; n += passos){
                    mensagem.innerText+=` ${n} -> `
                }
                mensagem.innerText+=` Fim!`
        
            } else{
                //mensagem de erro pois os numeros são iguais//
                window.alert('[ERRO!] revise os dados e tente novamente!')
            }
    
        }

        
    }

}