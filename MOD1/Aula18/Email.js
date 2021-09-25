// Programas Síncronos -> São programas executados e trazem o resultado imediato.

// Programas Assíncronos -> São programas executados e não trazem resultado no mesmo momento.
// 1º) Precisamos criar uma função responsável pela simulação do envio do e-mail.

function enviarEmail(corpo, para) {
  setTimeout(function () {
    console.log(`

        Para: ${para},
        ------------------------------
        ${corpo}
        ------------------------------

        De: Adriano Lamas        
    `);
  }, 3000);
}

console.log("E-mail sendo enviado...");

enviarEmail("Olá, tudo bem?", "lamas.free@gmail.com");

console.log("Email enviado com sucesso, deve chegar em alguns segundos!");
