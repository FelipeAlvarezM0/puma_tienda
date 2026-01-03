export function createProducts() {
  const main = document.createElement('main');
  main.className = 'main';
  main.innerHTML = `
    <section class="section show" data-section="inicio">
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

    <section class="section" data-section="ofertas">
      <div class="welcome">
        <h2>🔥 OFERTAS ESPECIALES</h2>
        <p>Aprovecha nuestras ofertas limitadas y packs exclusivos.</p>
      </div>
      <div class="product-grid">
        <div class="product-card best">
          <div class="product-img"><img src="/assets/images/imagentienda5.png" alt="Pack Navidad"></div>
          <h4>PACK NAVIDEÑO</h4>
          <p style="font-size:13px;color:#aaa;margin:8px 0">Incluye Rango VIP+ y Kit Navidad</p>
          <span class="price">€44.20 <small style="text-decoration:line-through;color:#ff6b6b">€65.00</small></span>
          <button>Comprar Ahora</button>
        </div>
        <div class="product-card highlight">
          <div class="product-img"><img src="/assets/images/imagentienda5.png" alt="Pack Starter"></div>
          <h4>PACK STARTER</h4>
          <p style="font-size:13px;color:#aaa;margin:8px 0">VIP + 3 Llaves de Cofre</p>
          <span class="price">€24.99 <small style="text-decoration:line-through;color:#ff6b6b">€35.00</small></span>
          <button>Comprar Ahora</button>
        </div>
        <div class="product-card">
          <div class="product-img"><img src="/assets/images/imagentienda5.png" alt="Pack Cosméticos"></div>
          <h4>PACK COSMÉTICOS</h4>
          <p style="font-size:13px;color:#aaa;margin:8px 0">5 Cosméticos + 2 Mascotas</p>
          <span class="price">€14.99 <small style="text-decoration:line-through;color:#ff6b6b">€25.00</small></span>
          <button>Comprar Ahora</button>
        </div>
      </div>
    </section>

    <section class="section" data-section="cosmeticos">
      <div class="welcome">
        <h2>✨ COSMÉTICOS EXCLUSIVOS</h2>
        <p>Personaliza tu personaje con items únicos.</p>
      </div>
      <div class="product-grid">
        <div class="product-card">
          <div class="product-img"><img src="/assets/images/imagentienda5.png" alt="Alas Dragon"></div>
          <h4>ALAS DE DRAGÓN</h4>
          <span class="price">€8.99</span>
          <button>Comprar</button>
        </div>
        <div class="product-card">
          <div class="product-img"><img src="/assets/images/imagentienda5.png" alt="Mascota Lobo"></div>
          <h4>MASCOTA LOBO</h4>
          <span class="price">€6.99</span>
          <button>Comprar</button>
        </div>
        <div class="product-card highlight">
          <div class="product-img"><img src="/assets/images/imagentienda5.png" alt="Particulas Arcoiris"></div>
          <h4>PARTÍCULAS ARCOÍRIS</h4>
          <span class="price">€4.99</span>
          <button>Comprar</button>
        </div>
        <div class="product-card">
          <div class="product-img"><img src="/assets/images/imagentienda5.png" alt="Corona Real"></div>
          <h4>CORONA REAL</h4>
          <span class="price">€9.99</span>
          <button>Comprar</button>
        </div>
        <div class="product-card">
          <div class="product-img"><img src="/assets/images/imagentienda5.png" alt="Capa Legendaria"></div>
          <h4>CAPA LEGENDARIA</h4>
          <span class="price">€7.99</span>
          <button>Comprar</button>
        </div>
        <div class="product-card">
          <div class="product-img"><img src="/assets/images/imagentienda5.png" alt="Mascota Fénix"></div>
          <h4>MASCOTA FÉNIX</h4>
          <span class="price">€12.99</span>
          <button>Comprar</button>
        </div>
      </div>
    </section>

    <section class="section" data-section="rangos">
      <div class="welcome">
        <h2>👑 RANGOS PERMANENTES</h2>
        <p>Obtén beneficios exclusivos y privilegios únicos.</p>
      </div>
      <div class="product-grid">
        <div class="product-card">
          <div class="product-img"><img src="/assets/images/imagentienda5.png" alt="Rango VIP"></div>
          <h4>VIP</h4>
          <p style="font-size:13px;color:#aaa;margin:8px 0">• Kit VIP diario<br>• 5 Homes<br>• /fly en lobby</p>
          <span class="price">€19.99</span>
          <button>Comprar</button>
        </div>
        <div class="product-card highlight">
          <div class="product-img"><img src="/assets/images/imagentienda5.png" alt="Rango VIP+"></div>
          <h4>VIP+</h4>
          <p style="font-size:13px;color:#aaa;margin:8px 0">• Todo de VIP<br>• 10 Homes<br>• /hat y /nick</p>
          <span class="price">€29.99</span>
          <button>Comprar</button>
        </div>
        <div class="product-card best">
          <div class="product-img"><img src="/assets/images/imagentienda5.png" alt="Rango HERO"></div>
          <h4>HERO</h4>
          <p style="font-size:13px;color:#aaa;margin:8px 0">• Todo de VIP+<br>• Homes ilimitados<br>• Kit HERO único</p>
          <span class="price">€59.99</span>
          <button>Comprar</button>
        </div>
      </div>
    </section>

    <section class="section" data-section="donacion">
      <div class="welcome">
        <h2>💙 DONACIÓN AL SERVIDOR</h2>
        <p>Apoya a PumaLand y ayúdanos a mejorar constantemente.</p>
      </div>
      <div class="info-panel">
        <p>
          Tu <strong>donación</strong> nos ayuda a mantener el servidor activo, pagar hosting,
          desarrollar nuevas funcionalidades y crear eventos increíbles.
        </p>
        <p>
          Como agradecimiento, recibirás el título de <strong>Donador</strong> en el servidor
          y acceso a un canal privado en Discord.
        </p>
      </div>
      <div class="product-grid">
        <div class="product-card">
          <div class="product-img"><img src="/assets/images/imagentienda5.png" alt="Donación Bronce"></div>
          <h4>DONACIÓN BRONCE</h4>
          <span class="price">€5.00</span>
          <button>Donar</button>
        </div>
        <div class="product-card">
          <div class="product-img"><img src="/assets/images/imagentienda5.png" alt="Donación Plata"></div>
          <h4>DONACIÓN PLATA</h4>
          <span class="price">€10.00</span>
          <button>Donar</button>
        </div>
        <div class="product-card highlight">
          <div class="product-img"><img src="/assets/images/imagentienda5.png" alt="Donación Oro"></div>
          <h4>DONACIÓN ORO</h4>
          <span class="price">€25.00</span>
          <button>Donar</button>
        </div>
        <div class="product-card best">
          <div class="product-img"><img src="/assets/images/imagentienda5.png" alt="Donación Diamante"></div>
          <h4>DONACIÓN DIAMANTE</h4>
          <span class="price">€50.00</span>
          <button>Donar</button>
        </div>
      </div>
    </section>

    <section class="section" data-section="llaves">
      <div class="welcome">
        <h2>🔑 LLAVES DE COFRE</h2>
        <p>Abre cofres especiales y consigue recompensas épicas.</p>
      </div>
      <div class="product-grid">
        <div class="product-card">
          <div class="product-img"><img src="/assets/images/imagentienda5.png" alt="1 Llave"></div>
          <h4>1 LLAVE COMÚN</h4>
          <p style="font-size:13px;color:#aaa;margin:8px 0">Abre 1 cofre común</p>
          <span class="price">€2.99</span>
          <button>Comprar</button>
        </div>
        <div class="product-card">
          <div class="product-img"><img src="/assets/images/imagentienda5.png" alt="5 Llaves"></div>
          <h4>5 LLAVES COMUNES</h4>
          <p style="font-size:13px;color:#aaa;margin:8px 0">Abre 5 cofres comunes</p>
          <span class="price">€12.99</span>
          <button>Comprar</button>
        </div>
        <div class="product-card highlight">
          <div class="product-img"><img src="/assets/images/imagentienda5.png" alt="Llave Rara"></div>
          <h4>1 LLAVE RARA</h4>
          <p style="font-size:13px;color:#aaa;margin:8px 0">Abre 1 cofre raro</p>
          <span class="price">€7.99</span>
          <button>Comprar</button>
        </div>
        <div class="product-card best">
          <div class="product-img"><img src="/assets/images/imagentienda5.png" alt="Llave Legendaria"></div>
          <h4>1 LLAVE LEGENDARIA</h4>
          <p style="font-size:13px;color:#aaa;margin:8px 0">Abre 1 cofre legendario</p>
          <span class="price">€15.99</span>
          <button>Comprar</button>
        </div>
      </div>
    </section>
  `;

  return main;
}
