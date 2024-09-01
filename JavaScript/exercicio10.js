//10 - Escreva um programa para imprimir todas as tabuadas de 1 a N. N será informado pelo usuário.

//variável
var N = parseInt(prompt("Informe o valor de N:"));

//laços e condições
if (N <= 0) {
    alert("Por favor, insira um valor maior que zero.");
} else {
    for (var i = 1; i <= N; i++) {  
        document.write(i); 
        for (var j = 1; j <= 10; j++) { 
            document.write(i + " x " + j + " = " + (i * j) + "<br>");
        }
        document.write("<br>"); 
    }
}
