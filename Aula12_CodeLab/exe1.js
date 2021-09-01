// Tarefa 01:

// Crie catálogo de filmes com 5 filmes, cada filme precisa ser um objeto,
// cada objeto precisa ter os seguintes atributos:

// - Nome
// - Duração
// - Ano
// - Diretor
// - Atores principais(lista)
// - Dados (função anônima que retorna uma string com os dados do filme)

// No final mostra no console os dados de todos os filmes ao mesmo
// tempo.

let filme1 = {
  nome: "Forest Gump",
  duracao: "2:20",
  ano: "1994",
  diretor: "Robert Zemeckis",
  atoresPrincipais: ["Tom Hanks", "Gary Sinise", "Robin Wright"],
};
let filme2 = {
  nome: "De Volta para o Futuro",
  duracao: "1:56",
  ano: "1985",
  diretor: "Robert Zemeckis",
  atoresPrincipais: ["Michael J. Fox", "Christopher Lloyd", "Lea Thompson"],
};
let filme3 = {
  nome: "Ben-Hur",
  duracao: "3:32",
  ano: "1960",
  diretor: "William Wyler",
  atoresPrincipais: ["Charlton Heston", "Stephen Boyd", "Jack Hawkins"],
};
let filme4 = {
  nome: "O Sexto Sentido",
  duracao: "1:47",
  ano: "1999",
  diretor: "M. Night Shyamalan",
  atoresPrincipais: ["Bruce Willis", "Haley Joel Osment", "Toni Collette"],
};
let filme5 = {
  nome: "Matrix",
  duracao: "2:15",
  ano: "1999",
  diretor: "Lana Wachowski, Lilly Wachowski",
  atoresPrincipais: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
};

filme1.dados = function () {
  return `Nome do filme: ${this.nome}, Duração: ${this.duracao}, Ano: ${this.ano}, Diretor: ${this.diretor}, Atores Principais: ${this.atoresPrincipais}`;
};
filme2.dados = function () {
  return `Nome do filme: ${this.nome}, Duração: ${this.duracao}, Ano: ${this.ano}, Diretor: ${this.diretor}, Atores Principais: ${this.atoresPrincipais}`;
};
filme3.dados = function () {
  return `Nome do filme: ${this.nome}, Duração: ${this.duracao}, Ano: ${this.ano}, Diretor: ${this.diretor}, Atores Principais: ${this.atoresPrincipais}`;
};
filme4.dados = function () {
  return `Nome do filme: ${this.nome}, Duração: ${this.duracao}, Ano: ${this.ano}, Diretor: ${this.diretor}, Atores Principais: ${this.atoresPrincipais}`;
};
filme5.dados = function () {
  return `Nome do filme: ${this.nome}, Duração: ${this.duracao}, Ano: ${this.ano}, Diretor: ${this.diretor}, Atores Principais: ${this.atoresPrincipais}`;
};

filme1.dados = filme1.dados();
filme2.dados = filme2.dados();
filme3.dados = filme3.dados();
filme4.dados = filme4.dados();
filme5.dados = filme5.dados();

// console.log(filme1, filme2, filme3, filme4, filme5);

// Tarefa 02 - Desafio:

// Insira esses 5 filmes dentro de uma lista
// chamada catalogo, e mostre na tela os
// dados de cada um varrendo a lista com

// um for.

let catalogo = [filme1, filme2, filme3, filme4, filme5];

console.log();

let cont = 1;
for (let i of catalogo) {
  console.log(`Filme ${cont} - ${i.dados}\n`);
  cont++;
}
