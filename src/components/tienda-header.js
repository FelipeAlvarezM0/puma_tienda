export function createTiendaHeader() {
  const header = document.createElement('header');
  header.className = 'topbar';
  header.innerHTML = `
    <div class="top-left">
      <button class="btn-cart">⬅ Volver al inicio</button>
    </div>

    <div class="logo">
      <img src="/assets/images/homelogodeinicio.png" alt="PumaLand">
    </div>

    <div class="top-right">
      <span class="online">🟢 67 usuarios conectados</span>
    </div>
  `;

  const btnBack = header.querySelector(".btn-cart");
  btnBack.addEventListener("click", () => {
    window.location.href = "/";
  });

  return header;
}
