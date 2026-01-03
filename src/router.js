import { renderHome } from './pages/home.js';
import { initTienda } from './pages/tienda-nueva.js';

const routes = {
  '/': renderHome,
  '/tienda': initTienda,
};

export function navigateTo(path) {
  window.history.pushState({}, '', path);
  router();
}

export async function router() {
  const path = window.location.pathname;
  const route = routes[path] || renderHome;

  const app = document.getElementById('app');
  app.setAttribute('data-route', path);

  if (route.constructor.name === 'AsyncFunction') {
    await route();
  } else {
    route();
  }
}

window.addEventListener('popstate', router);

document.addEventListener('click', (e) => {
  if (e.target.matches('[href^="/"]')) {
    e.preventDefault();
    const href = e.target.getAttribute('href');
    if (href && href.startsWith('/') && !href.startsWith('//')) {
      navigateTo(href);
    }
  }
});
