//8 - Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que ZERO.
//N é um valor informado pelo usuário

//entrada
var n = parseInt(prompt("Digite um valor"));

//condições
if (n > 0) {
    for (var i = 1; i <= n; i++) { 
        document.write(i + " ,");
    }
} else {
    alert("Digite um valor maior que 0");
}
