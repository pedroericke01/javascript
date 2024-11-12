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

/* instânciando um novo login de usuário, com a declaração da callback, (no formato de
uma função anônima) que após o 
login do usuário ser totalmente resolvido no caso de sucesso iremos exibir seu e-mail,
no caso de erro será exibido o motivo do erro: */
const usuario1 = login_usuario('pedroe@gmail.com', '12345', (usuario1)=>{
    /* imprimindo o novo usuário logado: */
    console.log(usuario1);
}, (error)=>{
    console.log(error);
});

