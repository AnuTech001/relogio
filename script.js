function atualizarRelogio() {
  var agora = new Date();
  var horas = agora.getHours().toString().padStart(2, "0");
  var minutos = agora.getMinutes().toString().padStart(2, "0");
  var segundos = agora.getSeconds().toString().padStart(2, "0");
  var horario = horas + ":" + minutos + ":" + segundos;
  document.getElementById("relogio_digital").textContent = horario;
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio(); // Atualiza o relógio imediatamente ao carregar a página

navigator.getBattery().then(function (bateria) {
  function atualizarStatus() {
    document.getElementById("status").textContent = bateria.charging
      ? "Carregando"
      : "Descarregando";
    const nivel_bateria = (bateria.level * 100).toFixed(0);
    document.getElementById("nivel").textContent = nivel_bateria;
    if (bateria.level <= 0.15) {
      document.getElementById("mensagem").textContent =
        "Aviso: Nível de bateria igual ou inferior a 15%. Convém ligar o dispositivo ao carregador.";
    } else {
      document.getElementById("mensagem").textContent = "";
    }
  }
  atualizarStatus();
  bateria.addEventListener("chargingchange", atualizarStatus);
  bateria.addEventListener("levelchange", atualizarStatus);
});

function criar_calendario(mes, ano) {
  const dias_do_mes = new Date(ano, mes + 1, 0).getDate();
  const primeiro_dia = new Date(ano, mes, 1).getDay();
  const calendario = document.getElementById("calendario");
  calendario.innerHTML = "";
  const dias_da_semana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  dias_da_semana.forEach((dia) => {
    const dia_elemento = document.createElement("div");
    dia_elemento.classList.add("dia");
    dia_elemento.textContent = dia;
    calendario.appendChild(dia_elemento);
  });
  for (let i = 0; i < primeiro_dia; i++) {
    const dia_elemento = document.createElement("div");
    dia_elemento.classList.add("dia");
    calendario.appendChild(dia_elemento);
  }
  const hoje = new Date();
  const dia_atual = hoje.getDate();
  const mes_atual = hoje.getMonth();
  const ano_atual = hoje.getFullYear();
  for (let dia = 1; dia <= dias_do_mes; dia++) {
    const dia_elemento = document.createElement("div");
    dia_elemento.classList.add("dia");
    dia_elemento.textContent = dia;
    if (dia === dia_atual && mes === mes_atual && ano === ano_atual) {
      dia_elemento.classList.add("hoje");
    }
    calendario.appendChild(dia_elemento);
  }

  // Adiciona o nome do mês e ano ao título
  const nome_dos_meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  const titulo_mes_ano = document.getElementById("mes-ano");
  titulo_mes_ano.textContent = `${nome_dos_meses[mes]} ${ano}`;
}

criar_calendario(11, 2024);