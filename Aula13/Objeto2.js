// const filme = {
//   nome: "Forest Gump",
//   duracao: 160,
//   ano: "1994",
//   diretor: "Robert Zemeckis",
//   atores: ["Tom Hanks", "Gary Sinise", "Robin Wright"],
// };

// console.log(filme);

// // Object.keys --> Imprime todas as chaves (atributos) do objeto em forma de lista.

// console.log(Object.keys(filme));

// // Object.values --> Imprime todas os valores do objeto em forma de lista.

// console.log(Object.values(filme));

// // Object.entries --> Imprime todas as chaves e valores do objeto em forma de lista.

// console.log(Object.entries(filme));

// // Iterando objetos a partir da lista gerada pelo Objcts com for "normal"

// const props = Object.keys(filme); // Pega as chaves do objeto e transforma lista

// for (let i = 0; i < props.length; i++) {
//   console.log(filme[props[i]]);
// }

// // Iterando com o for of

// for (const prop of props) {
//   console.log(filme[prop]);
// }

// // Iterando com o for in (Propriedade e valor)

// for (const prop in filme) {
//   console.log(`${prop}: ${filme[prop]}`);
// }

// Criar vários objetos com valores diferentes

const receber = require("prompt-sync")({ sigint: true });

const filmes = [];
const qtd = receber("Digite quantos filmes você quer cadastrar: ");

const filme = {};
for (let i = 0; i < qtd; i++) {
  filme.nome = receber("Digite o nome do filme: ");
  filme.duracao = receber("Digite a duracao do filme: ");
  filme.ano = receber("Digite o ano do filme: ");

  filmes.push(filme);
}
console.log(filmes);
