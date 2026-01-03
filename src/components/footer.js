export function createFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer-regorland';
  footer.innerHTML = `
    <div class="footer-regorland-container">
      <div class="footer-regorland-logo">
        <img src="/assets/images/homelogodeinicio.png" alt="Logo">
        <span>PumaLand</span>
      </div>

      <div class="footer-regorland-links">
        <a href="/">Inicio</a>
        <a href="#about">Sobre Nosotros</a>
        <a href="#faq">Preguntas Frecuentes</a>
        <a href="#modes">Modalidades</a>
        <a href="#reglas">Reglas</a>
        <a href="/tienda">Tienda</a>
        <a href="https://discord.gg/TU_DISCORD" target="_blank">Discord</a>
      </div>
    </div>

    <div class="footer-regorland-copy">
      © 2025 <span>PumaLand</span> — Todos los derechos reservados.
    </div>
  `;

  return footer;
}
