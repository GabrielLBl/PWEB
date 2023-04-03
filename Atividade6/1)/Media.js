var nota1;
var nota2;
var nota3;

var nome;

nome = prompt("Insira o nome do aluno");

nota1 = parseFloat(prompt("Digite a primeira nota do aluno: "));

nota2 = parseFloat(prompt("Digite a segunda nota do aluno: "));

nota3 = parseFloat(prompt("Digite a terceira nota do aluno: "));

var media;

media = ((nota1 + nota2 + nota3) / 3);

document.write("A média de " + nome + " é de: " + media.toFixed(2));