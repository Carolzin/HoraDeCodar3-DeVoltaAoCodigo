//7 - Escreva um algoritmo para ler as notas de avaliações de um aluno, calcule e imprima a média (simples) desse aluno. Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada nota. São 6 notas ao total.
//Caso o valor informado para qualquer uma das notas esteja fora do limite estabelecido, deve ser solicitado um novo valor ao usuário. 

//váriavéis
var soma = 0;
var numNotas = 6;

//for
for (var i = 0; i < numNotas; i++) {
    var nota = -1; 

    //laço while
    while (nota < 0 || nota > 10) {
        nota = parseFloat(prompt("Insira a nota (entre 0 e 10):"));

        if (nota < 0 || nota > 10) {
            alert("Nota inválida, Insira um valor entre 0 e 10.");
        }
    }

    soma += nota;
}

//saída
var media = soma / numNotas;
alert("A média desse aluno é: " + media.toFixed(2));
