var n = new Array(3);

for(var i = 0; i < 3; i++)
    n[i] = parseInt(prompt("Digite o número " + (i + 1)));

function maiorNum(n)
{
    var max = 0;

    for(i = 0; i < n.length; i++)
    {
        if(n[i] > max)
            max = n[i];
    }

    return max;
}

function ordenarCresc(n)
{
    n = n.sort(function(a, b){ return a - b; } );
    return n;
}

document.write("O maior número dos três é: " + maiorNum(n) + "<br>");
document.write("Os três ordenados são: " + ordenarCresc(n) + "<br>");
