// * Crie um DIC de carros, com no mínimo 7 carros, contendo os seguites campos: id, modelo, marca e preço. Todas as informações serão recebidas pelo prompt. O usuário pode comprar mais de um carro e programa deverá retornar o valor total de venda. Enquanto o usuário optar por comprar menos do que 3 carros, o programa deverá exibir a seguinte mensagem: "Deseja comprar outro carro?" em caso afirmativo o programa continua em execução, caso contrário é finalizado. O programa deve retornar o
// O programa deve retornar o valor total no padrão monetário - R$50.000,000. */

const prompt = require("prompt-sync")({ sigint: true });

let carros = [{ id: "", modelo: "", marca: "", preco: "" }];
let repete = true;
let qtdeCarros = 0;
let id, modelo, marca, preco;

console.log("Cadastro de carro");
while (repete === true) {
  idC = qtdeCarros + 1;
  modeloC = prompt("Modelo:");
  marcaC = prompt("Marca:");
  precoC = prompt("Preço:");

  carros[qtdeCarros] = {
    id: idC,
    modelo: modeloC,
    marca: marcaC,
    preco: precoC,
  };
  if (prompt("Deseja cadastrar mais um carro [S/N]?").toUpperCase() != "S") {
    repete = false;
  }
  qtdeCarros++;
}
console.log(carros);
console.log("");
console.log(({ id, modelo } = carros[0])); // Lendo o Dicionário
