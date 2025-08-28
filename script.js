// Rolagem suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Digitação do texto
window.addEventListener("DOMContentLoaded", () => {
  const texto = "Estudante de Análise e Desenvolvimento de Sistemas · 25 anos · Guarulhos - SP";
  const elemento = document.getElementById("digitando");
  let i = 0;
  (function digitar() {
    if (i < texto.length) {
      elemento.innerHTML += texto.charAt(i++);
      setTimeout(digitar, 60);
    }
  })();

  // Fundo com quadrados animados
  const fundo = document.querySelector('.background-animado');
  if (fundo) {
    for (let j = 0; j < 50; j++) {
      const square = document.createElement('div');
      square.classList.add('quadrado');
      square.style.left = `${Math.random() * 100}%`;
      square.style.top = `-${Math.random() * 100}px`;
      square.style.animationDuration = `${5 + Math.random() * 10}s`;
      const size = 10 + Math.random() * 30;
      square.style.width = square.style.height = `${size}px`;
      fundo.appendChild(square);
    }
  }

  // Overlay de entrada
  const overlay = document.querySelector('.overlay');
  overlay.classList.add('fade-out');
  setTimeout(() => overlay.remove(), 1500);
});

// Fade-in nas seções ao rolar
window.addEventListener('scroll', () => {
  document.querySelectorAll('.content-section').forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) section.classList.add('visible');
  });
});

