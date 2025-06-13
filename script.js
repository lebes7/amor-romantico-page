function atualizarContador() {
  const inicio = new Date("2023-01-01T00:00:00"); // ajuste a data aqui
  const agora = new Date();
  const diferenca = agora - inicio;

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = agora.getHours();
  const minutos = agora.getMinutes();
  const segundos = agora.getSeconds();

  document.getElementById('dias').textContent = dias;
  document.getElementById('horas').textContent = horas;
  document.getElementById('minutos').textContent = minutos;
  document.getElementById('segundos').textContent = segundos;
}

setInterval(atualizarContador, 1000);
atualizarContador();

