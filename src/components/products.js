export function createProducts() {
  const main = document.createElement('main');
  main.className = 'main';
  main.innerHTML = `
    <section class="section show">
      <div class="welcome">
        <h2>BIENVENIDO A LA TIENDA OFICIAL</h2>
        <p>Selecciona una categoría para comenzar tu compra.</p>
      </div>
      <div class="info-panel">
        <p>
          ¡Te encuentras en la tienda de <strong>PumaLand</strong> y aquí puedes acceder
          a los mejores cosméticos, rangos, kits exclusivos y más artículos!
        </p>
        <p>
          En el caso de tener dudas o problemas con una compra, revisa el apartado inferior de
          <strong>Soporte</strong>.
        </p>
        <p class="info-text">
          Es importante conservar y enviar la captura de la compra de tu rango como comprobante.
          Esto facilitará la validación y el soporte ante cualquier inconveniente.
        </p>
      </div>

      <div class="support-panel">
        <h3>🟡 AYUDA Y SOPORTE</h3>
        <p class="support-text">
          ¡Contamos con un equipo de staff activo y apasionado que siempre estará dispuesto
          a ayudarte o responder tus preguntas!
        </p>
        <p class="support-text small">
          La forma más rápida de obtener ayuda es mediante nuestro servidor de Discord.
          También puedes contactarnos para consultas sobre compras a través de nuestro correo.
        </p>
        <div class="support-buttons">
          <a href="https://discord.gg/TU_DISCORD" class="btn-discord" target="_blank" rel="noopener noreferrer">Servidor de Discord</a>
          <a href="mailto:soporte@pumaland.net" class="btn-mail">Enviar un correo</a>
        </div>
      </div>
    </section>

    <section class="section">
      <h3>RANGOS PERMANENTES</h3>
      <div class="product-grid">
        <div class="product-card">
          <div class="product-img"><img src="/assets/images/vip.png" alt="Rango VIP"></div>
          <h4>VIP</h4>
          <span class="price">€19.99</span>
          <button>Comprar</button>
        </div>
        <div class="product-card highlight">
          <div class="product-img"><img src="/assets/images/vipplus.png" alt="Rango VIP+"></div>
          <h4>VIP+</h4>
          <span class="price">€29.99</span>
          <button>Comprar</button>
        </div>
        <div class="product-card best">
          <div class="product-img"><img src="/assets/images/hero.png" alt="Rango HERO"></div>
          <h4>HERO</h4>
          <span class="price">€59.99</span>
          <button>Comprar</button>
        </div>
      </div>
    </section>
  `;

  return main;
}
