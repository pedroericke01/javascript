/*
script que processa automaticamente através da função: analisar
a data e suas respectivas informações. a partir dessa variável que todo o sistema
html5, css3 serão alterados, seguindo a logica de saudações, informando as 
horas e o bom dia, boa tarde ou boa noite:
*/

function carregar(){

//ligando a section principal e suas 2 sub-tags principais do sistema para iniciar
//a interação com o javascript:
var mensagem = window.document.getElementById('mensagem')
var imagem = window.document.querySelector('#conteudo > img')

//tocando na data do sistema(maquina) e armazenando na variável data.
//captando a hora, com base nos dados da variável Data:
var data = new Date()
var hora = data.getHours()

//informando no proprio html5 as horas atuais do sistema:
mensagem.innerHTML = `Agora são ${hora} horas`

//criando a iteração do sistema com base nas horas do sistema:
if (hora >= 0 && hora < 12){
    //bom dia 
    //carregando a imagem do dia:
    imagem.src = "imagens/manha-imagem.png"
    
    //alterando a cor de fundo do site seguindo a hora da manhã:
    document.body.style.background = "#e8c39e"
    
} else if(hora == 12 || hora <= 18){
    //boa tarde
    //carregando a imagem da tarde:
    imagem.src = "imagens/tarde-imagem.png"
    
    //alterando a cor de fundo do site segundo a imagem da tarde:
    document.body.style.background = "#e4a65aeb"
} else{
    //boa noite
    //carregando a imagem da noite:
    imagem.src = "imagens/noite-imagem.png"
    
    //alterando a cor de fundo do site seguindo a imagem da noite:
    document.body.style.background= "#001348"
}
}