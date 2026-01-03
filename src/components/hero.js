export function createHero() {
  const hero = document.createElement('section');
  hero.className = 'hero';
  hero.style.backgroundImage = "url('/assets/images/spawnimageninicio.png')";
  hero.innerHTML = `
    <div class="hero-overlay"></div>

    <div class="hero-content">
      <div class="online">🟢 Entra ahora junto a 65 jugadores</div>
      <h1 class="title-main">PUMALAND</h1>
      <h2 class="title-sub">Un servidor único</h2>

      <p class="hero-desc">
        ¡Explora un mundo lleno de mods, eventos y aventuras sin límites!
      </p>

      <div class="hero-buttons">
        <a href="/tienda" class="btn yellow">🛒 Tienda</a>
        <a href="#reglas" class="btn outline">📜 Reglas</a>
      </div>

      <div class="server-ip">🌐 polla.holy.net</div>
    </div>

    <div class="scroll-indicator">
      <div class="mouse"></div>
    </div>
  `;

  return hero;
}
