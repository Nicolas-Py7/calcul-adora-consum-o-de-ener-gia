const inputwatts = document.getElementById("watts");
const inputhoras = document.getElementById("horas");
const botao = document.getElementById("btnConsumo");
const botaomes = document.getElementById("botaomes");
const resultadoWh = document.getElementById("resultado");
const resultadoKWH = document.getElementById("resultadoKWH");
const listaAparelhos = document.getElementById("listaAparelhos");
const nomeAparelho = document.getElementById("nome");
const botaoAdicionar = document.getElementById("btnlista");

function consumodiario() {
  const watts = Number(inputwatts.value);
  const horas = Number(inputhoras.value);

  const wh = watts * horas;
  const kwh = wh / 1000;

  resultadoWh.textContent = "Consumo diário: " + wh + " Wh";
  resultadoKWH.textContent = "Consumo diário: " + kwh + " kWh";

}

function consumomensal() {
  const watts = Number(inputwatts.value);
  const horas = Number(inputhoras.value);

  const mensalWh = watts * horas * 30;
  const mensalKWH = mensalWh / 1000;

  resultadoWh.textContent = "Consumo mensal: " + mensalWh + " Wh";
  resultadoKWH.textContent = "Consumo mensal: " + mensalKWH + " kWh";
}

function listaraparelhos() {
  const nome = nomeAparelho.value.trim();
  const watts = Number(inputwatts.value);
  const horas = Number(inputhoras.value);

  const wh = watts * horas;
  const kwh = wh / 1000;

  const mensalWh = wh * 30;
  const mensalKWH = mensalWh / 1000;

  if (nome === '' || watts === 0 || horas === 0) {
    return
  }

  const listItem = document.createElement("li");
  listItem.textContent = `${nome} - Consumo diário: ${wh} Wh (${kwh} kWh), Consumo mensal: ${mensalWh} Wh (${mensalKWH} kWh)`;
  listaAparelhos.appendChild(listItem);

  const btnRemover = document.createElement('button');
  btnRemover.textContent = 'X'
  btnRemover.className = 'btn-remover';
              
  btnRemover.onclick = function() { 
    listItem.remove(); 
  };

  listItem.appendChild(btnRemover);

  nomeAparelho.value = '';
  inputwatts.value = '';
  inputhoras.value = '';
}

botao.addEventListener("click", consumodiario);

botaomes.addEventListener("click", consumomensal);

botaoAdicionar.addEventListener("click", listaraparelhos);
