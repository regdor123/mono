// ===== Estrellas de fondo =====
function createStars() {
  const starsContainer = document.querySelector('.stars');
  const total = 90; // un poco más denso que el original

  for (let i = 0; i < total; i++) {
    const star = document.createElement('div');
    star.className = 'star';

    const size = Math.random() * 3 + 1; // 1–4 px
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = (Math.random() * 6) + 's';
    star.style.animationDuration = (Math.random() * 4 + 2) + 's';

    // algunas con color dorado o rosado muy suave
    const r = Math.random();
    if (r < 0.1) {
      star.style.background = '#FFD700';
      star.style.boxShadow = '0 0 10px #FFD700';
    } else if (r < 0.15) {
      star.style.background = '#FF9BD3';
      star.style.boxShadow = '0 0 8px #FF9BD3';
    }

    starsContainer.appendChild(star);
  }
}

// ===== Partículas doradas flotando =====
function spawnParticle() {
  const layer = document.getElementById('particles-layer');
  const p = document.createElement('div');
  p.className = 'floating-particle';

  // posición y timing
  p.style.left = Math.random() * 100 + '%';
  p.style.animationDelay = (Math.random() * 2) + 's';
  p.style.animationDuration = (Math.random() * 5 + 6) + 's';

  // color aleatorio entre oro, naranja suave, rosado y celeste sutil
  const colors = ['#FFD700', '#FFA500', '#FF69B4', '#87CEEB'];
  const color = colors[Math.floor(Math.random() * colors.length)];
  p.style.background = color;
  p.style.boxShadow = `0 0 8px ${color}`;

  layer.appendChild(p);

  // limpieza
  setTimeout(() => p.remove(), 12000);
}

function startParticles() {
  // flujo base
  setInterval(spawnParticle, 850);
  // ráfagas pequeñas
  setInterval(() => {
    for (let i = 0; i < 3; i++) setTimeout(spawnParticle, i * 180);
  }, 3200);
}

// ===== Init =====
window.addEventListener('DOMContentLoaded', () => {
  createStars();
  startParticles();
});

