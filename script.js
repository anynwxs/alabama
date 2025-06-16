function apagarVelas() {
    let chamas = document.querySelectorAll('.chama'); // Seleciona todas as chamas das velas
    
    chamas.forEach(chama => {
        chama.style.opacity = '0'; // Apaga as chamas suavemente
        chama.style.animation = 'none'; // Remove a animação para que não fiquem tremulando
    });

    setTimeout(() => alert("Parabéns! Faça um pedido antes que a chama apague completamente!"), 500);
}

// Função para gerar confetes aleatórios na tela
function criarConfete() {
    let confete = document.createElement('div');
    confete.className = 'confete';
    confete.style.left = `${Math.random() * 100}vw`;
    confete.style.backgroundColor = ['red', 'yellow', 'blue', 'green'][Math.floor(Math.random() * 4)];
    
    document.body.appendChild(confete);
    setTimeout(() => confete.remove(), 3000);
}

// Criando confetes continuamente
setInterval(criarConfete, 500);
