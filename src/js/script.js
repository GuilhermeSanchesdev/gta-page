// Tipos de comentários - esse é um comentário em linha;formato de texto //

/* esse é um comentário multi linha, podendo ter apenas um código de comentário para todos os comentários.

Agora entra a Lógica de Programação, que nada mais é do que pensar no que o código irá fazer, por exemplo; Se eu quero um programa para calcular a média das notas dos alunos, tenho que começar por aqui, através disso.. pense em toda a lógica por trás, e divida por passos.

Em uma empresa, não deixe os comentários no código.

Lógica de Programação - nunca pule essa etapa, analise oque você está fazendo e faça isso que precisa ser feito.

Objetivo 1 - quando o usuário clicar no botão de seleção de plataformas deve abrir uma caixa com os botões de seleção de plataforma
    Passo 1 - pegar o botão de seleção de plataformas no JS pra poder verificar quando o usuário clicar em cima dele - button class="btn-plataforma"

    Passo 2 - pegar o elemento do conteúdo que precisa ser mostrado; no caso, as plataformas - ul class="plataformas" - lista de plataformas

    Passo 3 - pegar o clique do usuário no JS, verificar a posição do clique no botão btn-plataforma

    Passo 4 - quando o usuário clicar no botão, adicionar a classe ativo na listagem de plataformas, dentro do botão, pra que o conteúdo apareça

Objetivo 2 - caso a lista de botões de plataformas já esteja aparecendo e o usuário clicar em cima do botão de seleção novamente, o conteúdo deve ser escondido

    Passo 1 - verificar se o botão já está aberto, se sim, devemos remover a classe ativo pra que ele esconda o conteúdo novamente
*/

// Objetivo 1 - quando o usuário clicar no botão de seleção de plataformas deve abrir uma caixa com os botões de seleção de plataforma //

// Passo 1 - pegar o botão de seleção de plataformas no JS pra poder verificar quando o usuário clicar em cima dele - button class="btn-plataforma" //

console.log(document); //exibiu a documentação HTML do site  que está sendo executado, dentro de inspecionar -> aba console - quando são objetos, não precisa de aspas - //

// agora iremos pegar o document, dentro daqui no JS, e interagir com ele //

// pegamos o document, e adicionamos o query selector que vai procurar por um elemento HTML com a class btn-plataforma, query selector basicamente seria buscar um seletor - seletor no css é tudo que está antes do abre chaves //

// agora iremos criar uma variável //
const botao = document.querySelector(".btn-plataforma");

// botao = document.querySelector(".btn-plataforma"); -> Pegamos a representação do botao no HTML, e atribuimos à palavra botao - criamos uma variável para que facilite o processo ao precisar usar o botao das plataformas //

console.log(botao);


// Passo 2 - pegar o elemento do conteúdo que precisa ser mostrado; no caso, as plataformas - ul class="plataformas" - lista de plataformas //

const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

console.log(elementoPlataformas);

//pegamos  as plataformas que estão na lista e adicionamos uma variável lista //

// Passo 3 - pegar o clique do usuário no JS, verificar a posição do clique no botão btn-plataforma //

// Adicionando um event listener para o elemento ouvir se algo acontece em relação ao botão/ click, se acontecer; executar tal código //
botao.addEventListener("click", () => {
    


    // Objetivo 2 - caso a lista de botões de plataformas já esteja aparecendo e o usuário clicar em cima do botão de seleção novamente, o conteúdo deve ser escondido //
    
    // criaremos uma condição; contains -> verificar se possui algo, no caso; a classe "ativo" - criamos uma varíavel onde atribuimos todo o código que indica que o botão está aberto; com a classe ativo //
    const botaoEstaAberto = elementoPlataformas.classList.contains("ativo");


//Passo 1 - verificar se o conteúdo do botão já está aberto, se sim, devemos remover a classe ativo pra que ele esconda o conteúdo novamente //

// Passo 4 - quando o usuário clicar no botão, adicionar a classe ativo na listagem de plataformas, dentro do botão, pra que o conteúdo apareça //

// true cairá na linha 61, então true -> if ; false -> quando cliquei no elemento, o mesmo não contêm a classe ativa, então false -> else //

    if(botaoEstaAberto) {
        elementoPlataformas.classList.remove("ativo");
    } else {
        elementoPlataformas.classList.add("ativo");
    }
// resumindo condição - Se o botão está aberto, remova a classe ativo, através do clique no mesmo. Senão estiver aberto, adicione a class "ativo", quando o usuário clicar - para abrir o conteúdo do botão //
});





    

   





