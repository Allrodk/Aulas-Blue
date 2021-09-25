// O nosso callback deve ser passado como um parâmetro da função enviarEmail()

function enviarEmail(corpo, para, callback) {
  setTimeout(function () {
    console.log(`
  
          Para: ${para},
          ------------------------------
          ${corpo}
          ------------------------------
  
          De: Adriano Lamas        
      `);
    callback();
  }, 3000);
}

console.log("E-mail sendo enviado...");

enviarEmail(
  "Olá, tudo bem?",
  "lamas.free@gmail.com",

  // Nesse caso o callback será executado depois que o e-mail for enviado

  function () {
    console.log("Email enviado com sucesso!");
  }
);
