/* 

Promises : Evolução das callbacks, é uma forma mais 'sofisticada' para trabalhar com programação assíncrona.

A Promisse é uma callback mais parruda.

As Promises são muito utilizadas pelos rogramadores de js, no React (BIBLIOTECA js), Angular, Vue.js, Express, Node.js, entre outros.

Promise: 
    Cumprir (RESOLVE)
    Não Cumprir (REJECT)

Email -> Resolve: "Ok" - Reject: "Falha ao enviar o email"
    
*/

function enviarEmail(corpo, para) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(`
    
        Para: ${para},
        ----------------------------
        ${corpo}
        ----------------------------

        De: Adriano Lamas        
    `);
      let deuerro = false;
      if (deuerro) {
        resolve(); // Promessa Ok!
      } else {
        reject(); // Promessa não cumprida
      }
    }, 5000);
  });
}

console.log("E-mail sendo enviado...");

// .then executa ações caso a promise seja RESOLVE

// .cath faz tratamento de erro caso a promise seja REJECT

enviarEmail("Olá Bluemers!", "lamas.free@gmail.com")
  .then(function () {
    console.log("Email enviado com sucesso");
  })
  .catch(function () {
    console.log("Por algum motivo, o email não foi enviado");
  });
