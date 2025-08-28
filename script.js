// Rolagem suave para âncoras (caso você adicione no futuro)
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Efeito simples ao rolar (fade-in)
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    sections.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            sec.style.opacity = '1';
            sec.style.transform = 'translateY(0)';
        }
    });
});

window.addEventListener("DOMContentLoaded", function () {
  const texto = "Estudante de Análise e Desenvolvimento de Sistemas · 25 anos · Guarulhos - SP";
  const elemento = document.getElementById("digitando");
  let i = 0;

  function digitar() {
    if (i < texto.length) {
      elemento.innerHTML += texto.charAt(i);
      i++;
      setTimeout(digitar, 60); // velocidade da digitação
    }
  }

  digitar();
});
const texto = "Estudante de Análise e Desenvolvimento de Sistemas\n25 anos · Guarulhos - SP";

// Gera quadrados aleatórios no fundo
const fundo = document.querySelector('.background-animado');

for (let i = 0; i < 50; i++) {
  const square = document.createElement('div');
  square.classList.add('quadrado');
  square.style.left = `${Math.random() * 100}%`;
  square.style.animationDuration = `${5 + Math.random() * 10}s`;
  square.style.width = square.style.height = `${10 + Math.random() * 20}px`;
  fundo.appendChild(square);
}
