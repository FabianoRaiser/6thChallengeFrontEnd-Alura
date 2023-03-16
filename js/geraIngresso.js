const ingresso = document.querySelector(".ingresso__info");

const dados = JSON.parse(localStorage.getItem('buyer'));

ingresso.innerHTML = `
    <h2 class="ingresso__nome">${dados.nome}</h2>
    <p class="ingresso__descricao">${dados.tipo}<br>
        Setor ${dados.setor}<br>
        Data: ${dados.diaEvento}<br>
        Local: São Paulo-SP</p>
`;