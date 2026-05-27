const inputwatts = document.getElementById("watts");
const inputhoras = document.getElementById("horas");
const botao = document.getElementById("btnConsumo");
const botaomes = document.getElementById("botaomes");
const resultadoWh = document.getElementById("resultado");
const resultadoKWH = document.getElementById("resultadoKWH");


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


botao.addEventListener("click", consumodiario);

botaomes.addEventListener("click", consumomensal);
