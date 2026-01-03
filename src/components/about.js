export function createAbout() {
  const about = document.createElement('section');
  about.className = 'about-section';
  about.id = 'about';
  about.innerHTML = `
    <h3 class="section-title">Sobre nosotros</h3>

    <div class="about-grid">
      <div class="about-text">
        <h2>Nuestra historia</h2>
        <p>
          Pumaland es un servidor creado para disfrutar la aventura, la diversión y la libertad total de juego.
        </p>
        <p>
          Contamos con modpacks, eventos constantes y una comunidad activa.
          Puedes jugar siendo premium o no premium, en Java.
        </p>
        <div class="about-stats">
          <div class="stat">
            <strong>3+</strong>
            <span>Años de diversión</span>
          </div>
          <div class="stat">
            <strong>23</strong>
            <span>Jugadores conectados</span>
          </div>
          <div class="stat">
            <strong>324+</strong>
            <span>Usuarios en Discord</span>
          </div>
        </div>
      </div>

      <img src="/assets/images/Nosotros2.png" class="skin" alt="Personaje Minecraft">
    </div>
  `;

  return about;
}
