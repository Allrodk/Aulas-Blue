const numeroEscolhido = parseInt(prompt('Escolha um número inteiro de 0 a 10'));
let numeroSorteado = Math.floor(Math.random() * 10);
if (numeroSorteado == numeroEscolhido){
  console.log(`Você acertou, o numero sorteado foi ${numeroSorteado}`);   
}
else {
  console.log(`Tente outra vez!, o numero sorteado foi ${numeroSorteado}`);  
}
