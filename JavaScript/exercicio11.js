//11 - Escreva um programa em que o usuário informe 10 valores e escreva quantos desses valores lidos estão entre os números 24 e 42 (incluindo os valores 24 e 42) e quantos deles estão fora deste intervalo.

//contadores
var dentroIntervalo = 0;
var foraIntervalo = 0;

//for
for (var i = 0; i < 10; i++) {
    var valor = parseFloat(prompt("Digite o valor " + (i + 1) + " de 10:"));

    if (valor >= 24 && valor <= 42) {
        dentroIntervalo++;
    } else {
        foraIntervalo++;
    }
}

// saída
alert("Quantidade de valores dentro do intervalo 24, 42 é: " + dentroIntervalo);
alert("Quantidade de valores fora do intervalo 24, 42 é: " + foraIntervalo);
