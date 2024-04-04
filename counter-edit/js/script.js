const form = document.getElementById('contadorForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const contadorInput = document.getElementById('contador');
  const novoValor = parseInt(contadorInput.value);

  if (novoValor >= 0 && novoValor <= 999) {
    fetch('./counter-edit/json/counter.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        centena: Math.floor(novoValor / 100),
        dezena: Math.floor((novoValor % 100) / 10),
        unidade: novoValor % 10
      })
    })
    .then(response => {
      if (response.ok) {
        alert('Contador atualizado com sucesso!');
      } else {
        alert('Erro ao atualizar o contador.');
      }
    })
    .catch(error => console.error('Erro ao atualizar o contador:', error));
  } else {
    alert('Por favor, insira um valor entre 0 e 999.');
  }
});

