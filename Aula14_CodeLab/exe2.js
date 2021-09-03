// 2.Faça um programa que leia nome e média de um aluno, guardando também a
// situação em um objeto. No final, mostre o conteúdo da estrutura na tela. A média
// para aprovação é 7. Se o aluno tirar entre 5 e 6.9 está de recuperação, caso
// contrário é reprovado.

const prompt = require("prompt-sync")({ sigint: true });

const aluno = {};

aluno.nome = prompt("Nome: ");
aluno.media = +prompt("Média: ");

if (aluno.media >= 7) {
  aluno.situacao = "Aprovado";
} else if (aluno.media < 5) {
  aluno.situacao = "Reprovado";
} else {
  aluno.situacao = "Recuperação";
}

aluno.exibe = function () {
  return `O aluno ${this.nome} obteve a média ${this.media.toFixed(
    1
  )} e sua situação é ${this.situacao}.`;
};

console.log(aluno.exibe());
