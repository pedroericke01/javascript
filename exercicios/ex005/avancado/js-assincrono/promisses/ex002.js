/* promise.all() é um modelo de promise que me permite executar +1
promisse ao mesmo tempo e retorna os respectivos resultados ao mesmo
tempo tambem, com base no maior tempo que uma promisse pode demorar
para ser processada.*/

function videos_youtube(){
    /* promisse para pegar videos do youtube: */
    return new Promise((resolve, reject) => {
        /* criando o SetTimeOut que simula o tempo de resposta para
        minha promisse ser executada: */
        setTimeout(()=>{
            resolve('pegando videos do youtube!')
        }, 2000);
    });
    
}

function posts_facebook(){
    /* promisse para pegar posts no facebook: */
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(['carregando posts do facebook!']);
        }, 5000);
    });
}

/* criando a promisse all que vai executar essas 2 promisses acima 
ao mesmo tempo: */
Promise.all([videos_youtube, posts_facebook])
    /* esse then()  abaixo vai receber o resultado da minhas promises executadas acima:*/
    .then((resultado)=>{
        console.log(resultado);
    });
