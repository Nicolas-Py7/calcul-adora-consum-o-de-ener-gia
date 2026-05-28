const inputwatts = document.getElementById("watts");
const inputhoras = document.getElementById("horas");
const botao = document.getElementById("btnConsumo");
const botaomes = document.getElementById("botaomes");
const resultadoWh = document.getElementById("resultado");
const resultadoKWH = document.getElementById("resultadoKWH");
const listaAparelhos = document.getElementById("listaAparelhos");
const nomeAparelho = document.getElementById("nome");
const botaoAdicionar = document.getElementById("btnlista");
const botaoVisualizar = document.getElementById("bntmostrarlista")
const listaSection = document.getElementById("sectionlista")
let aparelhos = [];

function consumodiario() {
  const watts = Number(inputwatts.value);
  const horas = Number(inputhoras.value);

  if (watts <= 0 || horas <= 0) return;

  const wh = watts * horas;
  const kwh = wh / 1000;

  resultadoWh.textContent = "Consumo diário: " + wh + " Wh";
  resultadoKWH.textContent = "Consumo diário: " + kwh + " kWh";
}

function consumomensal() {
  const watts = Number(inputwatts.value);
  const horas = Number(inputhoras.value);

  if (watts <= 0 || horas <= 0) return;

  const mensalWh = watts * horas * 30;
  const mensalKWH = mensalWh / 1000;

  resultadoWh.textContent = "Consumo mensal: " + mensalWh + " Wh";
  resultadoKWH.textContent = "Consumo mensal: " + mensalKWH + " kWh";
}

function renderizarLista() {

    listaAparelhos.innerHTML = "";

    aparelhos.forEach((aparelho, index) => {

        const li = document.createElement("li");

        li.innerHTML = `
            ${aparelho.nome} |
            ${aparelho.consumodiario} kWh/dia |
            ${aparelho.consumomensal} kWh/mês
        `;
        
        const btnExcluir = document.createElement("button");
        btnExcluir.textContent = "X";
        btnExcluir.className = "bntexcluir";
        btnExcluir.onclick = function() {
          aparelhos.splice(index, 1);
          renderizarLista();
        };

        li.appendChild(btnExcluir);

        listaAparelhos.appendChild(li);

    });
}

function salvaraparelho() {
  const nome = nomeAparelho.value.trim();
  const watts = Number(inputwatts.value);
  const horas = Number(inputhoras.value);

  if (!nome || watts <= 0 || horas <= 0) return;
  
  const wh = watts * horas;
  const kwh = wh / 1000;

  const mensalWh = wh * 30;
  const mensalKWH = mensalWh / 1000;

  const aparelho = {
    nome: nome,
    potencia: watts,
    tempo_de_uso: horas,
    consumodiario: kwh,
    consumomensal: mensalKWH
  }

  aparelhos.push(aparelho);
  
  renderizarLista();
  
  nomeAparelho.value = '';
  inputwatts.value = '';
  inputhoras.value = '';
}

function visualizarLista() {
  if (listaSection.style.display === "none" || listaSection.style.display === "") {
    listaSection.style.display = "flex";
  } 

  else {
    listaSection.style.display = "none";
  }
}

botao.addEventListener("click", consumodiario);
botaomes.addEventListener("click", consumomensal);
botaoAdicionar.addEventListener("click", salvaraparelho);
botaoVisualizar.addEventListener("click", visualizarLista);