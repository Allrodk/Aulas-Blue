function nome() {
  const nome = document.getElementById("inputNome").value;
  if (document.getElementById("inputNome").value != "") {
    document.getElementById("spanResultado").textContent = nome;
    document.getElementById("inputNome").value = "";
  } else {
    alert("Digite seu nome");
  }
}
function sec1() {
  let sec = document.getElementById("primeiro");
  if (sec.style.display === "none") {
    sec.style.display = "flex";
  } else {
    sec.style.display = "none";
  }
}

function sec2() {
  let sec = document.getElementById("segundo");
  if (sec.style.display === "none") {
    sec.style.display = "flex";
  } else {
    sec.style.display = "none";
  }
}

function calculaIMC() {
  let peso = document.getElementById("inputPeso").value;
  let altura = document.getElementById("inputAltura").value;

  let resultado = peso / (altura * altura);

  document.getElementById("spanIMC").textContent = resultado.toFixed(2);
}
