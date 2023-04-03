var num1, num2;

num1 = parseFloat(prompt("Insira o primeiro número: "));
num2 = parseFloat(prompt("Insira o segundo número: "));

document.write("O primeiro número a ser inserido foi: " + num1 + "<br>");
document.write("O segundo número a ser inserido foi: " + num2 + "<br><br>");

document.write("A soma dos dois números resulta em: " + (num1 + num2) + "<br>");
document.write("A subtração do primeiro pelo segundo resulta em: " + (num1 - num2) + "<br>");
document.write("O produto dos dois números resulta em: " + (num1 * num2) + "<br>");
document.write("A divisão do primeiro pelo segundo resulta em: " + (num1/num2) + "<br>");
document.write("O resto da divisão do primeiro pelo segundo resulta em: " + (num1 % num2) + "<br>");
