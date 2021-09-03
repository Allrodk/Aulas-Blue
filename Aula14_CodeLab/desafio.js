// 3. Desafio : Crie um programa que leia nome, ano de nascimento e carteira de
// trabalho e cadastre-os (com idade) em um objeto. Se por acaso a CTPS for diferente
// de 0, o objeto receberá também o ano de contratação e o salário. Calcule e
// acrescente , além da idade , com quantos anos a pessoa vai se aposentar. Considere
// que o trabalhador deve contribuir por 35 anos para se aposentar.

const prompt = require("prompt-sync")({ sigint: true });

const anoAtual = new Date().getFullYear();
const cadastro = {};

cadastro.nome = prompt("Digite o nome: ");
cadastro.idade = anoAtual - parseInt(prompt("Digite o ano de Nascimento: "));
cadastro.ctps = prompt("Digite o número da CTPS: ");
if (cadastro.ctps != 0) {
  cadastro.anoContra = parseInt(prompt("Digite o ano de contratação: "));
  cadastro.salario = prompt("Digite o salário: ");
  cadastro.idadeApo = cadastro.idade + 35 - (anoAtual - cadastro.anoContra);
}
cadastro.exibe = function () {
  return `${this.nome} tem ${this.idade} anos, começou a trabalhar em ${this.anoContra} e vai se aposentar com ${this.idadeApo} anos.`;
};

console.log(cadastro.exibe());
