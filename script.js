const form = document.getElementById('form-produto');
const tabela = document.getElementById('corpo-tabela');

let produtos = [];

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const descricao = document.getElementById('descricao').value;
    const valor = document.getElementById('valor').value;
    const disponivel = document.getElementById('disponivel').value;

    const novoProduto = {
        nome,
        descricao,
        valor,
        disponivel
    };

    produtos.push(novoProduto);
    produtos.sort((a, b) => a.valor - b.valor);

    renderizarTabela();

    form.reset();
});

function renderizarTabela() {
    tabela.innerHTML = '';

    produtos.forEach(produto => {
        const novaLinha = document.createElement('tr');
        novaLinha.innerHTML = `
            <td>${produto.nome}</td>
            <td>R$ ${produto.valor}</td>
        `;
        tabela.appendChild(novaLinha);
    });
}