var n = prompt("Digite a quantia de casos");

var idade = new Array(n);
var sexo = new Array(n);
var opiniao = new Array(n);

var maisvelha = 0;
var maisnova = 1000;
var media = 0;
var pessimo = 0;
var otimo = 0;
var bom = 0;
var homens = 0;
var mulheres = 0;

for(var i = 0; i < n; i++)
{
    idade[i] = parseInt(prompt("Digite sua idade: "));
    sexo[i] = prompt("Digite seu sexo, F(feminino) ou M(masculino): ");
    opiniao[i] = parseInt(prompt("Digite sua opinião, onde ótimo=4, bom=3, regular=2, péssimo=1."));

    sexo[i] = sexo[i].toUpperCase();

    if(idade[i] > maisvelha)
        maisvelha = idade[i];
    
    if(idade[i] < maisnova)
        maisnova = idade[i];
        
    media = media + idade[i];

    if(opiniao[i] == 1)
        pessimo++;
    
    if(opiniao[i] == 4)
        otimo++;
    
    if(opiniao[i] == 3)
        bom++;

    if(sexo[i] == "M")
        homens++;
    
    if(sexo[i] == "F")
        mulheres++;
    
}

media = media/n;

document.write("A média de idade das pessoas é: " + media.toFixed(2) + "<br>");
document.write("A idade da pessoa mais velha é: " + maisvelha + "<br>");
document.write("A idade da pessoa mais nova é: " + maisnova + "<br>");
document.write("A quantidade de pessoas que responderam péssimo é: " + pessimo + "<br>");
document.write("A porcentagem das pessoas que responderam ótimo é: " + ((otimo * 100)/n).toFixed(2) + "<br>");
document.write("A porcentagem das pessoas que responderam bom é: " + ((bom * 100)/n).toFixed(2) + "<br>");
document.write("O número de homens que responderam foi: " + homens + "<br>");
document.write("O número de mulheres que responderam foi: " + mulheres + "<br>");