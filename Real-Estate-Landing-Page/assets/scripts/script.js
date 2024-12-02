// 1
var element = document.getElementById('substiticao');       // seleciona o elemento com o ID "substiticao"

element.textContent = 'Bem-vindo ao Nosso Site';        // altera o texto para "Bem-vindo ao Nosso Site"

// 2
window.onload = function() {        // espera pelo carregamento completo da página
    var imagemHeroContent = document.querySelector('.hero-content img');        // 'seleçiona' a imagem dentro da classe hero-content
    
    imagemHeroContent.src = 'assets/images/new_search.png';         // substitui o atributo src pela nova imagem
  };