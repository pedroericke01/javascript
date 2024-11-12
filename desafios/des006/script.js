/* script responsável por dinâmicamente estruturar o jogo da memória apenas no front end
*/
/* pegando a tag conteiner que vai organizar e englobar os cards do sistema: */
const conteiner = window.document.getElementById('conteiner');

/* no jogo da memória, 1 card possui 2 lados, frente e atrás, vamos criar então 2
variáveis que vão representar cada um dos lados: */

/* criando a base de dados que meu sistema vai ter e gerar na interface de usuário 
dinâmicamente: */
const imagens = [
    {nome:"asser" ,imagem:"imagem/asser.png"},
    {nome:"benjamin" ,imagem:"imagem/benjamim.png"},
    {nome:"efraim" ,imagem:"imagem/efraim.png"},
    {nome:"gade" ,imagem:"imagem/gade.png"},
    {nome:"issacar" ,imagem:"imagem/issacar.png"},
    {nome:"juda" ,imagem:"imagem/juda.png"},
    {nome:"levi" ,imagem:"imagem/levi.png"},
    {nome:"manasses" ,imagem:"imagem/manasses.png"},
    {nome:"neftali" ,imagem:"imagem/naftali.png"},
    {nome:"ruben" ,imagem:"imagem/ruben.png"},
    {nome:"simeao" ,imagem:"imagem/simeao.png"},
    {nome:"zebulom" ,imagem:"imagem/zebulom.png"},
];

/* função para carregar todas as imagens na interface do usuário dinâmicamente: */
function carregar_imagens(){
    /* criando array que contem todas as imagens duplicadas, visando construir o
    jogo da memória:
    '...'=significa que eu vou pegar todo o conteúdo internos de ambos os arrays passados
    como parâmetro: */
    const imagens_duplicadas = [...imagens, ...imagens];
    /* criando função que escolha imagens aleatóriamente dentro da variável criada
    acima: */
    var imagem_escolhida = Math.floor(Math.random()*imagens_duplicadas.length);
    
    var contagem = 1
    imagens_duplicadas.forEach(imagem => {    
        
        conteiner.innerHTML = `
        
            <div class="cartao">

                <div class="atras">${contagem}</div>
            
                <div class="frente">
                    <img src="${imagem.imagem}" alt="${imagem.nome}">
                </div>
            
                </div>
        `;
        contagem+=1
    });
    
}
carregar_imagens()