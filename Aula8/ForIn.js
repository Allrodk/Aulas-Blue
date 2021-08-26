//####################################
// Estruturas de repetição
//####################################
// for in
/*for (variavel in objeto){
    codigo a ser executado
}
*/
let carro = { modelo: "Civic", ano: 2006, marca: "Honda" }; //Dicionário

for (let caracteristicas in carro) {
  console.log(`${caracteristicas}:  ${carro[caracteristicas]}`);
}
