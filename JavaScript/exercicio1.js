// 1 - Escreva um algoritmo para ler 2 valores informados pelo usuário e se o segundo valor informado for igual ou menor que ZERO, deve ser lido um novo valor. Ou seja, para o segundo valor não pode ser aceito o valor zero, nem um valor negativo. 
// O seu programa deve imprimir o resultado da divisão do primeiro valor lido pelo segundo valor e exibir o resultado ao usuário.

// entrada de dados
var num1 = parseInt(prompt("Informe o primeiro número: "));
var num2 = parseInt(prompt("Informe o segundo número: "));

// laço de repetição
while (num2 <= 0) {
    num2 = parseInt(prompt("Informe um valor diferente de 0!"));
}

// cálculo
var calculo = num1 / num2;

// saída
alert("O resultado da divisão de " + num1 + " por " + num2 + " é: " + calculo);