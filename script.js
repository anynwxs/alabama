function apagarVelas() {
    let chamas = document.querySelectorAll('.chama');
    chamas.forEach(chama => chama.style.opacity = '0');
    alert("Parabéns! Faça um pedido antes que a chama apague completamente!");
}
