//5 - Faça um algoritmo que calcule e escreva a média aritmética dos dois números inteiros informados pelo usuário e todos os números inteiros entre eles. Considere que o primeiro sempre será menor que o segundo.

//entrada
var num1 = parseInt(prompt("Informe o primeiro valor: "));
var num2 = parseInt(prompt("Informe o segundo valor: "));

//primeiro número deve ser menor
while (num1 > num2) {
    alert("O primeiro número deve ser menor que o segundo número!");
    num1 = parseInt(prompt("Informe o primeiro valor: "));
    num2 = parseInt(prompt("Informe o segundo valor: "));
}

// contagem
var soma = 0;
var quantidade = 0;

// loop for para somar os números e contar a quantidade
for (var i = num1; i <= num2; i++) {
    soma += i;
    quantidade++;
}

// cálculo da média
var media = soma / quantidade;

// saída
alert("A média aritmética dos números entre " + num1 + " e " + num2 + " é: " + media);
