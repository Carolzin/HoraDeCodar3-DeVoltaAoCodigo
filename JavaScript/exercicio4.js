//4 - Faça um algoritmo que calcule e escreva a média aritmética dos números inteiros entre 15 (inclusive) e 100 (inclusive).

var inicio = 15;
var fim = 100;
var soma = 0;

// for para somar os números
for (i = inicio; i <= fim; i++) {
    soma += i;
}

// cálculo da média
var media = soma / 86;

// saída
alert("A média aritmética é: " + media);
