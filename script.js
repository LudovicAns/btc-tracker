const url = 'https://blockchain.info/ticker';

async function recupererPrix() {
  const request = await fetch(url, {
    method: 'GET'
  });

  if (!request.ok) {
    alert('Impossible de charger les données.');
  } else {
    let data = await request.json();
    document.querySelector('span').textContent = data.EUR.last;
  }
}

recupererPrix();