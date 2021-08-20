const salarioBase = parseFloat(prompt('Digite o sálário:'));
let percentual;
let valorAumentado;
let salarioReajustado;

if (salarioBase <= 280) {
  percentual = 20
}
else if (salarioBase <= 700) {
  percentual = 15
}
else if (salarioBase <= 1500) {
  percentual = 10
}
else if (salarioBase > 1500) {
  percentual = 5
}

valorAumentado = salarioBase*percentual/100;
salarioReajustado = salarioBase+valorAumentado;

console.log(`\nSalário base: R$ ${salarioBase.toFixed(2)}`);console.log(`\nPercentual ${percentual}%`);
console.log(`\nValor Aumentado: R$ ${valorAumentado.toFixed(2)}`);console.log(`\nSalário Reajustado: R$ ${salarioReajustado.toFixed(2)}`);