let totalGeral;
limpar();

function adicionar() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let produto = document.querySelector(".produto-input").value;
    let precoUnitario = produto == "Fone de ouvido" ? 100 : produto == "Celular" ? 1400 : 5000;
    let precoPorProduto = precoUnitario * quantidade;
    let carrinho = document.getElementById("lista-produtos");
    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${produto} <span class="texto-azul">R$${precoPorProduto}</span>
        </section>`;
    totalGeral += precoPorProduto;
    let total = document.getElementById("valor-total");
    total.innerHTML = `R$${totalGeral}`;
    document.getElementById("quantidade").value = 0;
}

function limpar() {
    totalGeral = 0
    document.getElementById("lista-produtos").innerHTML = "";
    document.getElementById("valor-total").innerHTML = "R$0,00";
}