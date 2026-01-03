import { createTiendaHeader } from '../components/tienda-header.js';
import { createBannerSlider } from '../components/banner-slider.js';
import { createSidebar } from '../components/sidebar.js';
import { createProducts } from '../components/products.js';
import { createSnowEffect } from '../utils/animations.js';

export function renderTienda() {
  const app = document.getElementById('app');
  app.innerHTML = '';

  const bgOverlay = document.createElement('div');
  bgOverlay.className = 'bg-overlay';
  app.appendChild(bgOverlay);

  app.appendChild(createTiendaHeader());
  app.appendChild(createBannerSlider());

  const layout = document.createElement('div');
  layout.className = 'layout';
  layout.appendChild(createSidebar());
  layout.appendChild(createProducts());

  app.appendChild(layout);

  createSnowEffect();

  setTimeout(() => {
    const elementsToAnimate = document.querySelectorAll('.hero, .layout, .sidebar, .main');
    elementsToAnimate.forEach((el, i) => {
      el.style.animationDelay = `${i * 0.2}s`;
      el.classList.add('fade-up');
    });
  }, 0);
}
