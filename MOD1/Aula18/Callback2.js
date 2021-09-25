// O nosso callback deve ser passado como um parâmetro da função enviarEmail()

function enviarEmail(corpo, para, callback) {
  setTimeout(function () {
    console.log(`
    
            Para: ${para},
            ----------------------------
            ${corpo}
            ----------------------------
    
            De: Adriano Lamas        
        `);

    // Posso atribuir quantos parâmetros forem necessários
    // Para cada parâmetro passado na callback, o mesmo deve ser passado na function
    callback("Ok", 1, "5s", "Adriano");
  }, 3000);
}

console.log("E-mail sendo enviado...");

enviarEmail(
  "Olá, tudo bem?",
  "lamas.free@gmail.com",

  // Nesse caso o callback será executado depois que o e-mail for enviado

  function (status, amount, time, name) {
    console.log(`
    De: ${name}
    Status: ${status}
    ----------------------------------
    Contatos: ${amount}
    ----------------------------------
    Tempo: ${time}  
    `);
  }
);
