// váriaveis
var i = 30;

// função para atualizar a mensagem de tempo
function atualizarPagina(conteudo) {
    document.body.innerHTML = conteudo;
}

// condições
var intervalo = setInterval(function() {
    if (i >= 0) {
        atualizarPagina("<p>Tempo restante: " + i + "</p>");
        i--;
    }

    if (i < 0) {
        clearInterval(intervalo);
        atualizarPagina("EXPLOSÃO!!!!!!!!!!!! BUUUUUUUUUUUUUM!!!!!!!!!!!!!");
    }
}, 1000);
