export function createNavbar() {
  const nav = document.createElement('header');
  nav.id = 'navbar';
  nav.innerHTML = `
    <img src="/assets/images/logopl.png" class="logo" alt="PumaLand Logo">

    <nav>
      <a href="#about">Sobre Nosotros</a>
      <a href="#faq">Preguntas</a>
      <a href="#modes">Modalidades</a>
      <a href="#reglas">Reglas</a>
      <a href="#guias">Guías</a>
    </nav>

    <div class="nav-buttons">
      <a href="/tienda" class="btn yellow">Tienda</a>
      <a href="https://discord.gg/TU_DISCORD" class="btn yellow">Discord</a>
    </div>
  `;

  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 50);
  });

  return nav;
}
