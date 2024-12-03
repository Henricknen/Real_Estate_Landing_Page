// 1 Alterar o Texto na Seção "HOME"
var element = document.getElementById('substiticao');       // seleciona o elemento com o id 'substiticao'

element.textContent = 'Bem-vindo ao Nosso Site';        // altera o texto para 'Bem-vindo ao Nosso Site'

// 2 Alterar Imagem

window.onload = function() {        // espera pelo carregamento completo da página
    var imagemHeroContent = document.querySelector('.hero-content img');        // 'seleçiona' a imagem dentro da classe hero-content
    
    imagemHeroContent.src = 'assets/images/new_search.png';         // substitui o atributo src pela nova imagem
  };

// 3 Esconder Elemento

document.querySelector('.availability-content').style.display = 'none';     // utilizando 'querySelector' para seleçionar o elemento da classe availabilit-content e definindo a propriedade display como 'none' para ocutar os elementos

// 4 realizada no arquivo styles.css

// 5 realizada no arquivo styles.css

// 6 Adicionar Comportamento ao Botão "CONTACT US"

document.getElementById("btn-contact").addEventListener("click", function(event) {      // 'getElementById' seleçiona o elemento de id 'btn-contact' e 'addEventListener' adiçiona um evento de click
  event.preventDefault();     // impede a ação padrão evitanado que a página seja rolada para cima ou recarregamento de outra página
  alert("O botão foi acionado!");
});

//7 Adicionar Nova Opção no Formulário "RENT"

var locationSelect = document.querySelector('select[name="location"]');     // acessando o elemento 'select' de name 'location'

var newOption = document.createElement("option");     // cria um novo elemento 'option'

newOption.value = "Presidente Prudente";    // define o valor e o texto da nova opção
newOption.textContent = "Presidente Prudente";

locationSelect.appendChild(newOption);      // adiciona a nova opção ao final do 'select'

// 8 Adicionar Item no Menu de Navegação

const blogItem = document.querySelector('.navbar-list li:nth-child(4)');    // localizando o item 'Blog' que é o penúltimo item dde 'navbar-list'

const aboutUsItem = document.createElement('li');     // criando um novo item de lista
const aboutUsLink = document.createElement('a');        // criando um link dentro do novo item de lista

aboutUsLink.href = '#';     // definindo o link do item
aboutUsLink.textContent = 'ABOUT US';     // texto do link

aboutUsItem.appendChild(aboutUsLink);   // adicionando o link ao item de lista

blogItem.parentNode.insertBefore(aboutUsItem, blogItem.nextSibling);      // inserindo o item 'about us' depois do item "Blog"

// 9 Validação de Formulário no Rodapé

const subscribeForm = document.querySelector('.footer-subscribe'); // 'querySelector' seleçiona o formulário de inscrição
const emailInput = subscribeForm.querySelector('input[type="text"]'); // seleçiona o campo do email cujo 'type' é text

subscribeForm.addEventListener('submit', function(event) {
  event.preventDefault();     // 'preventDefault' impede a ação padrão 'envio' do formulário para que possa fazer a validação

  if (emailInput.value.trim() === '') {   // verificando se o campo de email está 'vazio'
    alert('O campo de email está vazio');   // se estiver exibe essa menssagem no alert
  } else {
    alert('Email enviado:');    // se o campo estiver preenchido é possível enviar o formulário
  }
});

//10 Seção de “Depoimentos e Avaliações”

document.addEventListener('DOMContentLoaded', function () {
  const testimonialsData = [
    {
      name: 'João Silva',
      photo: 'assets/images/joao.jpg',
      text: 'Excelente serviço! A equipe foi muito atenciosa e me ajudou a encontrar a casa dos meus sonhos.',
      rating: 5,
    },
    {
      name: 'Maria Oliveira',
      photo: 'assets/images/maria.jpg',
      text: 'Ótima experiência! O processo foi rápido e sem complicação. Super recomendo!',
      rating: 4,
    },
    {
      name: 'Carlos Santos',
      photo: 'assets/images/carlos.jpg',
      text: 'O atendimento foi bom, mas o processo poderia ser um pouco mais transparente.',
      rating: 3,
    },
  ];

  function createTestimonial(testimonial) {
    const testimonialElement = document.createElement('div');
    testimonialElement.classList.add('testimonial');

    const photoElement = document.createElement('img');
    photoElement.src = testimonial.photo;
    photoElement.alt = `${testimonial.name}'s photo`;
    photoElement.classList.add('testimonial-photo');

    const nameElement = document.createElement('h3');
    nameElement.textContent = testimonial.name;
    nameElement.classList.add('testimonial-name');

    const textElement = document.createElement('p');
    textElement.textContent = testimonial.text;
    textElement.classList.add('testimonial-text');

    const ratingElement = document.createElement('div');
    ratingElement.classList.add('testimonial-rating');
    for (let i = 0; i < 5; i++) {
      const starElement = document.createElement('span');
      starElement.classList.add('star');
      starElement.textContent = i < testimonial.rating ? '★' : '☆';
      ratingElement.appendChild(starElement);
    }

    testimonialElement.appendChild(photoElement);
    testimonialElement.appendChild(nameElement);
    testimonialElement.appendChild(textElement);
    testimonialElement.appendChild(ratingElement);

    return testimonialElement;
  }

  function loadTestimonials() {
    const testimonialsContainer = document.getElementById('testimonials-container');
    testimonialsContainer.innerHTML = '';
    testimonialsData.forEach(testimonial => {
      const testimonialElement = createTestimonial(testimonial);
      testimonialsContainer.appendChild(testimonialElement);
    });
  }

  loadTestimonials();
});

