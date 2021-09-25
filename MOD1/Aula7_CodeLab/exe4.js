// Desafio
// Crie um script que pergunte 3 números ao usuário (usando for!), coloque em um array, depois exiba tal array.
// Depois use um for para percorrer esse Array, e pergunte para o usuário o novo valor que ele quer colocar em cada posição. (Por exemplo: "Digite um novo valor para a posição 1", "Digite um novo valor para a posição 2", etc...). Substitua o valor na lista original, para o novo valor entrado pelo usuário.
const prompt = require("prompt-sync")({ sigint: true });
let numeros = [];
for (let i = 1; i <= 3; i++) {
  numeros.push(+prompt(`Digite um número para a posição ${i}:`));
}
console.log(numeros);

for (let i = 0; i < numeros.length; i++) {
  numeros.splice(
    i,
    1,
    +prompt(`Digite um novo valor para a posição ${i + 1}:`)
  );
}
console.log(numeros);
