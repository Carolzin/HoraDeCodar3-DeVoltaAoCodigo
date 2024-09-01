//variaveis
var aprovados = 0; 
var continuar = "S"; 

// loop for para repetir
for (; continuar === "S" || continuar === "s"; ) {

    // Entrada de dados
    var nota1 = parseFloat(prompt("Digite o valor da primeira nota: "));
    var nota2 = parseFloat(prompt("Digite o valor da segunda nota:"));

    // Cálculo da média
    var media = (nota1 + nota2) / 2;

    // verificação de aprovação
    if (media >= 9.5) {
        aprovados++;
        alert("O aluno foi aprovado com média: " + media);
    } else {
        alert("O aluno foi reprovado com média: " + media);
    }

    // perguntar se deseja calcular a média de outro aluno
    continuar = prompt("Deseja calcular a média de outro aluno? (S ou N)");
}

// quantidade de alunos aprovados ao final
alert("A quantidade de alunos aprovados foi: " + aprovados);
