class Animal {
  constructor(nome, idade, preco) {
    this.nome = nome;
    this.idade = idade;
    this.preco = preco;
  }
  ChecarEstoque() {
    return 10;
  }
}

// A palavra reservada EXTENDS indica que a classe cachorro está herdando os atributos e métodos da classe Animal

class Cachorro extends Animal {
  constructor(nome, idade, preco, raca, peso) {
    super(nome, idade, preco); // SUPER para reutilizar os atributos da classe mãe
    this.raca = raca;
    this.peso = peso;
  }
  // Posso criar métodos exclusivos para a classe filha
  Latir() {
    console.log("Au-au");
  }

  // Posso perssonalizar ummétodo herdado da classe mãe
  ChecarEstoque() {
    console.log("Temos 40 cachorros a venda em promoção!!!");
  }
}

let dog = new Cachorro("Bolota", 7, 499, "Vira-Lata", 8);

console.log(dog);
dog.Latir();
dog.ChecarEstoque();
