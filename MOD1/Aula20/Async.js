/* Async/Await

Async: Essa palavra pode ser usada ao criarmos uma função convencional. Quando adicionamos esse identificador na criação de uma função, estamos definindo que ela será uma FUNÇÂO ASSÍNCRONA, ou seja, nos retornará uma PROMISE.

Await: Essa palavra será usada com o objetivo de ESPERAR a resolução de uma função assíncrona. Havendo uma série de funções assíncronas, o AWAIT definirá que o código terá sequência apenas quando a funçõa anterior estiver resolvida.
 
 */

// Concatenando 2 strings com uma função assíncrona utilizando o identificador ASYNC
async function joinStrings(str1, str2) {
  return str1 + "" + str2;
}

async function init(x, y) {
  await joinStrings(x, y).then(function (result) {
    console.log(result);
  });
}

init("Adriano ", "Lamas");
