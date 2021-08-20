const notas = [100,50,10,5,1]
const valor = parseInt(prompt('Valor de saque de R$10,00 à R$600,00'));
let qtdeNotas = []
let valorRestante = valor;

if (valor < 10 || valor > 600){
  console.log('O valor do saque deve ser de R$10,00 à R$600,00. Volte ao início e tente novamente.');  
}
else{  
  let contador = 0
  while (contador <= notas.length-1) {
    if (valorRestante > 0){
      qtdeNotas[contador] = valorRestante/notas[contador]|0;  
      valorRestante = valorRestante-(qtdeNotas[contador]*notas[contador]);
    }
    else {
      qtdeNotas[contador] = 0
    }  
    contador++;
  }
  console.log(`\nValor do saque R$${valor}`);
  contador = 0
  while (contador < qtdeNotas.length) {  
    contador++
    console.log(`Notas de ${notas[contador-1]}: ${qtdeNotas[contador-1]}`);    
  }
}
