import { renderHome } from './pages/home.js';
import { renderTienda } from './pages/tienda.js';

const routes = {
  '/': renderHome,
  '/tienda': renderTienda,
};

export function navigateTo(path) {
  window.history.pushState({}, '', path);
  router();
}

export function router() {
  const path = window.location.pathname;
  const route = routes[path] || renderHome;

  const app = document.getElementById('app');
  app.setAttribute('data-route', path);

  route();
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
