document.write("Atividade 10 - Criar objetos de três formas diferentes.")
document.write("<br><br>======================================<br>");
document.write("Realizado com uma função construtora <br>");

var ra, nome;

function Aluno(ra, nome){
    this.ra = ra;
    this.nome = nome;
}

var objAluno = new Aluno("0030482121018", "Gabriel Leite");

document.write("RA do Aluno: " + objAluno.ra + "<br>" + "Nome do aluno: " + objAluno.nome);

document.write("<br><br>======================================<br>");

document.write("Realizado com o inicializador de objetos <br>");

const objetoAluno = { 
    ra: '0030482121004',
    nome: 'Guilherme Kuhler'
};

document.write("RA do aluno: " + objetoAluno.ra + "<br>" + "Nome do aluno: " + objetoAluno.nome);

document.write("<br><br>======================================<br>");

document.write("Realizado com o método Object.create() <br>");

const obAluno = {
    ra: '0030482121023',
    nome: 'Lucas Roça',
    getNome(){
        return this.nome;
    },
    getRA() {
        return this.ra;
    }
}

const objectAluno = Object.create(obAluno);
document.write("RA do aluno: " + objectAluno.getRA() + "<br>" + "Nome do aluno: " + objectAluno.getNome());

document.write("<br><br>======================================<br>");




