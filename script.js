function atualizarRelogio() {
    var agora = new Date();
    var horas = agora.getHours().toString().padStart(2, '0');
    var minutos = agora.getMinutes().toString().padStart(2, '0');
    var segundos = agora.getSeconds().toString().padStart(2, '0');
    var horario = horas + ':' + minutos + ':' + segundos;
    document.getElementById('relogio_digital').textContent = horario;
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio();
