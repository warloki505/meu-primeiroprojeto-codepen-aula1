function converter() {
    let cotacao = parseFloat(document.getElementById("cotacao").value);
    let quantidade = parseFloat(document.getElementById("quantidade").value);

    if (isNaN(cotacao) || isNaN(quantidade) || cotacao <= 0 || quantidade <= 0) {
        document.getElementById("resultado").innerText = "Por favor, insira valores válidos.";
        return;
    }

    let valorConvertido = quantidade * cotacao;
    document.getElementById("resultado").innerText = `Valor em Reais: R$ ${valorConvertido.toFixed(2)}`;
}