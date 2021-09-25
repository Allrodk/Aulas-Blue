const sleep = require("util").promisify(setTimeout);

function primeiraFuncao() {
  console.log("Esperou isso");
}

async function segundaFuncao() {
  console.log("Iniciou");

  //await new Promise((espera) => setTimeout(espera, 2000));
  await sleep(5000);
  await primeiraFuncao();

  console.log("Agora executou isso");
}

segundaFuncao();
