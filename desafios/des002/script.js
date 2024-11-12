/*
1-script que a partir do ano de nascimento informada pelo usuáro no input
medir a idade do usuário.

2-assim como carregar uma imagem seguindo os seguintes parâmetros:
da idade e do genero do usuário:
*/

function verificar(){
    //ligando as principais tags do html5 no script//
    var mensagem = window.document.getElementById('mensagem')

    var txt_data_nascimento = window.document.getElementById('txt_nascimento')
    
    //criando uma tag img no html5 dinamicamente através do comando:
    var imagem = window.document.createElement('img')
    //atribuindo um id="foto" a essa tag, através do seguinte comando:
    imagem.setAttribute('id', 'foto')
    
    //sabendo que a imagem fica dentro da section, e não queremos que ela vase de
    //dentro dasection(pelo seu tamanho), precisaremos configurar que no momento
    //que a imagem for aparecer, a section acompanhe seu crescimento:
    var corpo_sessao = window.document.querySelector('main > section')

    //convertendo a string em valor numérico e extraindo o valor do dado inserido
    //pelo usuário do input 'ano de nascimento':
    var data_nascimento = Number(txt_data_nascimento.value)
    /*
    para medir a idade de uma pessoa precisamos realizar o seguinte calculo:
    idade = (ano atual - ano do nascimento)
    vamor executar esse script a partir da função: new Date() e seu método interno
    .getFullYear():
    */
    var data_atual = new Date()
    var ano_atual = data_atual.getFullYear()
    /*
    script para validação de dados na web:
    1-se o usuário inserir um numero <=0 ou > ano atual no input do ano de
    nascimento vai aparecer uma janela de alerta informando erro ao usuário e
    pedindo para inserir um valor valido.
    enquanto o usuário não inserir o valor certo, ele não vai conseguir avançar
    no sistema.
    */
    if (data_nascimento <= 0 || data_nascimento > ano_atual){
        window.alert('[ERRO]verifique os dados e tente novamente!')

    } else{
        var idade = (ano_atual - data_nascimento)
            
        if (idade < 0 || idade > 110){
            window.alert('[ERRO!]verifique os dados e tente novamente')
        } else{

        
            /*
            os 2 inputs para genero, seja masculino ou feminino sempre vão possuir
            o mesmo nome, nesse caso foi:
            
            (name='txt_genero'),
            
            isso me permitirá selecionar apenas 1 das N possibilidades de marcações,
            assim como na execução do script corretamente.

            para toca-los, vamos utilizar o metodo document.getElementByName('')[]: 
            precisaremos informar a posição do elemento específico, como em listas
            do python, de 0 a N posições:
            */
            
            var genero = window.document.getElementsByName('txt_genero')
            
            /*script para validar a marcação de genero pelos usuários: */
            var tipo_genero = ''

            if(genero[0].checked){
                tipo_genero = 'MASCULINO'
                
                if (idade> 0 && idade <= 10){
                    //criança
                    imagem.setAttribute('src', "imagens/masculino/criança-menino.png")

                } else if(idade > 10 && idade <= 21){
                    //jovem
                    imagem.setAttribute('src', "imagens/masculino/jovem-menino.png")
            
                } else if(idade > 21 && idade <= 50){
                    //adulto
                    imagem.setAttribute('src', "imagens/masculino/homem-adulto.png")
            
                } else{
                    //idoso
                    imagem.setAttribute('src', "imagens/masculino/idoso-homem.png")
                    
                }
            } else if(genero[1].checked){
                tipo_genero = 'FEMININO'

                if (idade >0 && idade <= 10){
                    //criança
                    imagem.setAttribute('src', "imagens/feminino/criança-menina.png")

                } else if(idade > 10 && idade <= 21){
                    //jovem
                    imagem.setAttribute('src', "imagens/feminino/jovem-menina.png")
                    
                } else if(idade > 21 & idade <= 50){
                    //adulta
                    imagem.setAttribute('src', "imagens/feminino/mulher-adulta.png")
                    
                } else{
                    //idoso
                    imagem.setAttribute('src', "imagens/feminino/idosa-mulher.png")
            
                }

            } else{
                window.alert('[ERRO!] verifique os dados e tente novamente!')
            }

            mensagem.innerText = `detectamos o genero ${tipo_genero} com ${idade} anos`
            mensagem.appendChild(imagem)       
        }

    }
}