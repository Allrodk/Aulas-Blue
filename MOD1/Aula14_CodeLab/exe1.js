// 1. Crie um programa que leia o preço e a quantidade de um produto a ser
// comprado, calculando o total da compra, guarde essas informações em um objeto.
// Se o valor todal da compra for maior que R$ 100,00 de o desconto de 10%, se for
// entre R$ 400,00 e R$ 500,00, dê 15% de desconto, se for acima de R$ 500,00, dê
// 20% de desconto. No final mostre ao cliente a quantidade, o preço do produto e o
// valor total de sua compra, considerando o desconto dado. Não se esqueça de
// alterar o valor total no objeto.
const prompt = require("prompt-sync")({ sigint: true });

const produto = {};

produto.descricao = "Camiseta";
produto.preco = +prompt(`Preço: `);
produto.qtde = parseInt(prompt(`Quantidade: `));
produto.total = produto.qtde * produto.preco;

if (produto.total > 100 && produto.total <= 400) {
  produto.total = produto.total - (produto.total * 10) / 100;
} else if (produto.total > 400 && produto.total <= 500) {
  produto.total = produto.total - (produto.total * 15) / 100;
} else if (produto.total > 500) {
  produto.total = produto.total - (produto.total * 20) / 100;
}

produto.exibir = function () {
  return `\nDescrição:  ${
    this.descricao
  }\nPreço:      ${this.preco.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  })}\nQuantidade: ${this.qtde}\nTotal:      ${this.total.toLocaleString(
    "pt-br",
    {
      style: "currency",
      currency: "BRL",
    }
  )}
    `;
};

console.log(produto.exibir());
