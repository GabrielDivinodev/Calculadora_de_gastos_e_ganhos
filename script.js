function calcular() {
    const kmPorLitro = parseFloat(document.getElementById('kmPorLitro').value);
    const valorCombustivel = parseFloat(document.getElementById('valorCombustivel').value);
    const totalAbastecido = parseFloat(document.getElementById('totalAbastecido').value);
    const totalGanho = parseFloat(document.getElementById('totalGanho').value);
    const kmRodados = parseFloat(document.getElementById('kmRodados').value);

    if (!kmPorLitro || !valorCombustivel || !totalAbastecido || !totalGanho || !kmRodados) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const custoPorKm = (valorCombustivel / kmPorLitro).toFixed(2);
    const ganhoLiquidoDiario = (totalGanho - totalAbastecido).toFixed(2);
    const ganhoBrutoPorKm = (totalGanho / kmRodados).toFixed(2);
    const ganhoLiquidoPorKm = (ganhoBrutoPorKm - custoPorKm).toFixed(2);

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <p>Custo por KM: R$ ${custoPorKm}</p>
        <p>Ganho líquido: R$ ${ganhoLiquidoDiario}</p>
        <p>Ganho bruto por KM: R$ ${ganhoBrutoPorKm}</p>
        <p>Ganho líquido por KM: R$ ${ganhoLiquidoPorKm}</p>
    `;
}
