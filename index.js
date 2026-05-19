// Relancer la page au clic sur le logo
document.getElementById('nav-logo').addEventListener('click', () => {
  window.location.reload();
});

// Génération dynamique de la grille de losanges (Diamonds) dans le Hero
const container = document.getElementById('diamonds-container');

if (container) {
  // Crée par exemple 18 losanges
  for (let i = 1; i <= 18; i++) {
    const diamond = document.createElement('div');
    diamond.classList.add('diamond-element');
    
    // Effet au survol
    diamond.addEventListener('mouseenter', () => {
      diamond.style.transform = 'rotate(45deg) scale(1.2)';
      diamond.style.backgroundColor = '#38bdf8';
    });
    
    diamond.addEventListener('mouseleave', () => {
      diamond.style.transform = 'rotate(45deg) scale(1)';
      diamond.style.backgroundColor = 'transparent';
    });
    
    container.appendChild(diamond);
  }
}