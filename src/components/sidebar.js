export function createSidebar() {
  const sidebar = document.createElement('aside');
  sidebar.className = 'sidebar';
  sidebar.innerHTML = `
    <div class="sidebar-title">
      <span class="dot"></span>
      <h2>¡EMPIEZA A COMPRAR!</h2>
    </div>

    <div class="menu-start active" data-category="inicio">
      <img src="/assets/images/imagentienda5.png" alt="Inicio">
      <span>Inicio</span>
    </div>

    <div class="menu-list">
      <div class="menu-btn brown" data-category="ofertas">
        <img src="/assets/images/imagentienda5.png" alt="Ofertas">
        <span>Ofertas Especiales</span>
      </div>

      <div class="menu-btn purple" data-category="cosmeticos">
        <img src="/assets/images/imagentienda5.png" alt="Cosméticos">
        <span>Cosméticos Exclusivos</span>
      </div>

      <div class="menu-btn gold" data-category="rangos">
        <img src="/assets/images/imagentienda5.png" alt="Rangos">
        <span>Rangos Exclusivos</span>
      </div>

      <div class="menu-btn discord" data-category="donacion">
        <img src="/assets/images/imagentienda5.png" alt="Donación">
        <span>Donación</span>
      </div>

      <div class="menu-btn green" data-category="llaves">
        <img src="/assets/images/imagentienda5.png" alt="Llaves">
        <span>Llaves</span>
      </div>

      <div class="donator-panel">
        <h4>👑 MÁXIMO DONADOR</h4>
        <strong>------</strong>
        <p>Ha sido quien más donó este mes</p>
      </div>
    </div>
  `;

  setTimeout(() => {
    const menuButtons = sidebar.querySelectorAll('[data-category]');

    menuButtons.forEach(button => {
      button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');

        menuButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const sections = document.querySelectorAll('.section[data-section]');
        sections.forEach(section => {
          if (section.getAttribute('data-section') === category) {
            section.classList.add('show');
          } else {
            section.classList.remove('show');
          }
        });
      });
    });
  }, 100);

  return sidebar;
}
