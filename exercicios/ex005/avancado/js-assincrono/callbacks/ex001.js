/* nesse exemplo vamos simular o login de um usuário em uma aplicação, para isso ele
deve informar o email e senha, será utilizado CallBacks:*/

/* vamos utilizar a função setTimeOut() para simular a 'demora' da execução desse
codigo asincrono em uma base de dados, todo o código colocado dentro do setTimeOut()
será executado somente após 1 segundo e meio definido, por exemplo:

a segunda função dentro da função setTimeOut() é a função CallBack que será executada
ao termino da função SetTimeOut:*/

/* criando a função para realizar o login de usuários no sistema: 

como 3 parâmetro, vamos criar a função Call back que garante que apenas quando o usuario
for logado no sistema que será exibido e email dele:*/
function login_usuario(email, senha, callback){
    
    setTimeout(()=>{
        /* após o usuário ser logado corretamente, será exibido e e-mail dele: */
        console.log('Usuário Logado!')
        callback({ email })
    }, 1500);

    /* a mensagem de olá mundo será exibida antes do login do usuário ser completamente
    realizado: */
    console.log('Olá mundo!')
}

/* instânciando um novo login de usuário, com a declaração da callback, (no formato de
uma função anônima) que após o 
login do usuário ser totalmente resolvido que iremos exibir seu e-mail: */
const usuario1 = login_usuario('pedroe@gmail.com', '12345', (usuario1)=>{
    /* imprimindo o novo usuário logado: */
    console.log(usuario1);
});
