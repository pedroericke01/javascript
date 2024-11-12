function login_usuario_promisse(email, senha){
    
    return new Promise((resolve, reject) => {
        /* variável que simula um erro: */
        const error = false;

        /* validando se existe erros na minha requisição assincrona: */
        if(error){
            reject(new Error('Não foi possível fazer login!'));
        }else{
            console.log('Usuário logado!')
            resolve({ email });
        }
    })

}

/* função que retorna a lista de jogos que o usuário tem salvo na sua conta, para 
encontrar esse usuário precisaremos de seu e-mail: */
function pegar_lista_jogos(email){
    /* criando a promise: */
    return new Promise((resolve, reject) => {
        /* criando o SetTimeOut() que simula o tempo de responsta que uma requisição
        assincrona leva para ser retornada: */
        setTimeout(()=>{
            console.log('\ncarregando jogos...')
            
            let jogos = []
            resolve(jogos =['Forza', 'Fortnite', 'Injustice 2']) 
            console.log(jogos)

        }, 1500);
    })
}

/* função que vai pegar a descrição do primeiro jogo salvo na lista do usuário: */
function pegar_descricao_jogo(jogo){
    
    let descricao = ['jogo de corrida', 'jogo de guerra e estratégia', 'jogo de luta e super poderes']

    if(jogo.toUpperCase() == 'FORZA'){
        descricao = descricao[0];
    }else if(jogo.toUpperCase() == 'FORTNITE'){
        descricao = descricao[1];
    }else if(jogo.toUpperCase() == 'INJUSTICE 2'){
        descricao = descricao[2];
    }else{
        console.log('jogo inválido!');
    }

    /* criando a promisse: */
    return new Promise((resolve, reject) => {
        
        /* criando o SetTimeOut() que simula o tempo de resposta de uma requisição
        assincrona: */
        setTimeout(()=>{
            console.log(`\nLendo a descrição do jogo ${jogo}...`)
            
            let resultado = null
            resolve(resultado = `${jogo} é um ${descricao}`)
            
            console.log(resultado)
        },1500)
    })
}

/* consumindo a promisse que faz o login do usuário: */
login_usuario_promisse('pedro@gmail.com', '12345')
    /* esse then() abaixo vai receber o resultado da promisse acima, ou seja o login 
    do usuário que retorna o email do mesmo: */
    .then((usuario)=>{
        /* fazendo a chamada a função que retorna a lista de jogos que o usuário tem
        salvo na conta dele: */
        return pegar_lista_jogos(usuario.email)
    })
    /* essa then() abaixo vai receber o resultado da promisse acima, ou seja, a lista
    de jogos salvos na conta do meu usuário: */
     .then((jogos)=>{
        return pegar_descricao_jogo(jogos[1]);
    });

console.log('Olá mundo')
