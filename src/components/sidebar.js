export function createSidebar() {
  const sidebar = document.createElement('aside');
  sidebar.className = 'sidebar';
  sidebar.innerHTML = `
    <div class="sidebar-title">
      <span class="dot"></span>
      <h2>¡EMPIEZA A COMPRAR!</h2>
    </div>

    <div class="menu-start active">
      <img src="/assets/images/inicio.png" alt="Inicio">
      <span>Inicio</span>
    </div>

    <div class="menu-list">
      <div class="menu-btn brown">
        <img src="/assets/images/ofertas.png" alt="Ofertas">
        <span>Ofertas Especiales</span>
      </div>

      <div class="menu-btn purple">
        <img src="/assets/images/cosmeticos.png" alt="Cosméticos">
        <span>Cosméticos Exclusivos</span>
      </div>

      <div class="menu-btn gold">
        <img src="/assets/images/rangos.png" alt="Rangos">
        <span>Rangos Exclusivos</span>
      </div>

      <div class="menu-btn discord">
        <img src="/assets/images/donacion.png" alt="Donación">
        <span>Donación</span>
      </div>

      <div class="menu-btn green">
        <img src="/assets/images/llaves.png" alt="Llaves">
        <span>Llaves</span>
      </div>

      <div class="donator-panel">
        <h4>👑 MÁXIMO DONADOR</h4>
        <strong>------</strong>
        <p>Ha sido quien más donó este mes</p>
      </div>
    </div>
  `;

  return sidebar;
}
