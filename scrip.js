const versos = document.querySelectorAll('#poema p');
const replayBtn = document.getElementById('replay');

function mostrarPoema() {
  versos.forEach(v => v.style.opacity = 0); // reinicia opacidad

  versos.forEach((verso, i) => {
    setTimeout(() => {
      verso.style.opacity = 1;
    }, i * 2000); // cada verso aparece cada 2 segundos
  });
}

mostrarPoema();

replayBtn.addEventListener('click', mostrarPoema);

// 🌌 Estrellas animadas
const stars = document.getElementById('stars');
for (let i = 0; i < 120; i++) {
  const star = document.createElement('span');
  star.classList.add('star');
  star.style.left = Math.random() * 100 + '%';
  star.style.top = Math.random() * 100 + '%';
  star.style.animationDelay = Math.random() * 3 + 's';
  stars.appendChild(star);
}

// Agregar estilos de estrellas dinámicamente
const style = document.createElement('style');
style.innerHTML = `
.star {
  position: absolute;
  width: 2px;
  height: 2px;
  background: white;
  border-radius: 50%;
  animation: twinkle 3s infinite ease-in-out;
  opacity: 0.6;
}
@keyframes twinkle {
  0%, 100% {opacity: 0.2; transform: scale(0.8);}
  50% {opacity: 1; transform: scale(1.2);}
}`;
document.head.appendChild(style);
