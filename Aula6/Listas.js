//Lista em Js deve ser declarada entre []

let filmesBons = [
  "K-PAX",
  "Interestelar",
  "Matrix",
  "O Apanhador de Sonhos",
  "Lendas da Vida",
  "Morrendo e Aprendendo",
  "Apocalypto",
];

filmesBons.push("Avatar"); // Push adiciona um item no final da lista
filmesBons.unshift("Contato"); // Unshift adiciona um item no início da lista
filmesBons.pop(); // Pop remove o último item de uma lista
console.log(filmesBons);
console.log(`A Lista tem ${filmesBons.length} filmes`); // Tamanho
console.log(filmesBons.indexOf("Matrix")); // Conteúdo

// Invertendo lista e apagar a lista original
let limite = filmesBons.length;
let inverterLista = [];
for (let i = 0; i < limite; i++) {
  inverterLista.push(filmesBons.pop());
}
console.log(inverterLista);

// Rewmovendo ou substituindo itens com Splice
inverterLista.splice(2, 0, "Sob Suspeita");
console.log(inverterLista);

// Procura o índice relacionado à String
// let indice = inverterLista.indexOf("Matrix");
console.log(`Matrix está na posição ${inverterLista.indexOf("Matrix")}`);

// Ordenando String com sort
inverterLista.sort();
console.log(inverterLista);



