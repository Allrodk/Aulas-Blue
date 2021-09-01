const prompt = require("prompt-sync")({ sigint: true });
let compras = [
  ["Coca Cola", 9],
  ["Toddynho", 3.5],
  ["Doritos", 2],
];
let contador = 0;
let contador2 = 0;
let soma = 0;
let quantidade = 0;

while (contador < compras.length) {
  while (contador2 < compras.length) {
    quantidade = parseInt(
      prompt(
        `${compras[contador2][0]}, valor: R$ ${compras[contador2][1].toFixed(
          2
        )}. Qual quantidade deseja?`
      )
    );
    compras[contador2].push(quantidade);
    contador2++;
  }
  console.log(
    `Descrição: ${compras[contador][0]} - Valor: R$ ${compras[
      contador
    ][1].toFixed(2)} - Quantidade: ${compras[contador][2]}`
  );
  soma += parseFloat(compras[contador][1]) * +compras[contador][2];
  contador++;
}
soma = soma.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
console.log(`Total ${soma}`);
