/* Simulador de dados de um Cassino: A ideia é simularmos o funcionamento de dados de um Cassino Clandestino: criaremos diferentes tipos de dados e de FORMA ALEATÓRIA e mostraremos os valores tirados em cada dado */

// EXEMPLO: CELULAR
//Classes -> "Fábrica de Objetos"
//Atributos -> Caracteristicas dos meus objetos (celular: marca, peso, cor...)
//Métodos --> "Ações" (enviar mensagem, fazer chamada, abrir navegador)

// Como boa prática, as classes iniciam com letra maiúscula
class Dado {
  //Dentro do método construtor, coloca-se os atributos do objeto

  constructor(faces) {
    this.faces = faces; //Isso é uma auto referência
  }
  //Função em Js para gerar um numero aleatório

  GetRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Criando o método Rolar() para gerar um número aleatório entre 1 e o número de faces do dado.
  Rolar() {
    console.log(
      `Resultado do dado de ${this.faces} faces é ${this.GetRandomIntInclusive(
        1,
        this.faces
      )}`
    );
  }
}

// Instanciando os Dados

let d6 = new Dado(6); //Instancia um dado de 6 faces
let d12 = new Dado(12);
let d100 = new Dado(100);

d6.Rolar(); // Rolar é o método do objeto d6
d12.Rolar();
d100.Rolar();

//-----------------------------------------------------------------
const prompt = require("prompt-sync")({ sigint: true });

function numAleatorio(d) {
  return Math.floor(Math.random() * d) + 1;
}

prompt("Pressione ENTER para rolar os dados");

console.log(numAleatorio(6), numAleatorio(12), numAleatorio(100));
