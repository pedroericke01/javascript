/* criando a função para realizar o login de usuários no sistema:
como 3° e 4° parâmetro, vamos criar a função Call back que garante que o login seja
realizado com segurança e apenas quando o usuario
for logado no sistema  e seus dados estiveremo corretos que será exibido e email dele:*/
function login_usuario(email, senha, sucesso, erro){
    
    setTimeout(()=>{
        /* criando a variável que controla se existe erro ou não para testes, no 
        caso real, esse erro será no caso de dados informado corretamente ou inexistentes: */
        const error = false;

        if(error){
            return erro(new Error('não foi possível fazer o login!'));
        }else{
            /* após o usuário ser logado corretamente, será exibido e e-mail dele: */
            console.log('Usuário Logado!')
            sucesso({ email })
        }

    }, 1500);

    /* a mensagem de olá mundo será exibida antes do login do usuário ser completamente
    realizado: */
    console.log('Olá mundo!')
}

/* após o login do usuário vamos pegar os jogos que ele tem salvo na sua conta,
para isso precisaremos de um identificador que o diferencie esse usuário dos demais: */
function pegar_jogos_usuario(email, callback){
    /* criando o SetTimeOut de 1,5 segundos simulando uma requisação Assincrona
    em uma base de dados externa: */
    setTimeout(()=>{
        /* retorno dos jogos que o usuário salvou na sua conta através da callback: */
        callback(['forza', 'fortnite', 'injustice 2']);
    }, 1500);
}

/* após o login ser completamente realizado e a lista de jogos que o usuário salvou
na sua conta for impresso, então vamos imprimir o detalhe do 1 jogo, nesse caso, o 
forza, que é um jogo de corrida. */
function pegar_detalhe_jogo(jogo, callback){
    setTimeout(()=>{
        /* retorno do detalhe do jogo: */
        callback({descricao:'jogo de corrida'})
    }, 1500);
}

/* instânciando um novo login de usuário agora no formato de orientação a objeto: */
const usuario1 = login_usuario(
    /* email do usuário: */
    'pedroe@gmail.com',
    /* senha do usuário: */
    '12345',
    /* todas as funções Assincronas que poderão ser realizadas pelo usuário: */
    (usuario1)=>{
        /* chamanda a função que pega a lista dos jogos que o usuário1 salvou em sua
        conta e vamos imprimir essa lista: */
        pegar_jogos_usuario(usuario1.email, (jogos)=>{
            console.log(`jogos salvos: ${JSON.stringify(jogos)}`);

            /* após a lista de jogos salvos na conta do usuário, vamos chamar a função
            que pega a descrição do 1 jogo salvo na lista: */
            pegar_detalhe_jogo(jogos[0], (descricao_jogo)=>{
                console.log(`O Jogo ${jogos[0]} tem ${JSON.stringify(descricao_jogo)}`)
            })
        });

}, (error)=>{
    console.log(error);
});

