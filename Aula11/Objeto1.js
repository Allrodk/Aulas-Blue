/* Objeto é uma coleção de dados ou funcionalidades relacionadas, que geralmente é constituido de diversas variáveis e funções, denominados de propriedades e métodos.*/

let objeto = {}; //Objeto Vazio

let pessoa = {
  nome: "Adriano Lamas",
  idade: 36,
  genero: "Masculino",
};
console.log(pessoa);
console.log(pessoa.nome[0]);
console.log(pessoa.idade);

pessoa.escolaridade = "Superior Completo"; // Adição de propriedade
pessoa.interesses = ["Dinheiro", "Proramação", "Filmes"];
console.log(pessoa);

// delete pessoa.genero; // Subtração de propriedade
// console.log(pessoa);

let tamanho = 0;
for (let i in pessoa) {
  tamanho++;
}
console.log(`O objeto possui ${tamanho} propriedades`);

pessoa.bio = function () {
  return `Meu nome é ${this.nome}, tenho ${this.idade} anos, sou do gênero ${this.genero} e meus interesses são: ${this.interesses[0]}, ${this.interesses[1]} e ${this.interesses[2]}}`;
};
console.log(pessoa.bio());
