import { createNavbar } from '../components/navbar.js';
import { createHero } from '../components/hero.js';
import { createAbout } from '../components/about.js';
import { createFAQ } from '../components/faq.js';
import { createModes } from '../components/modes.js';
import { createFooter } from '../components/footer.js';
import { initRevealAnimations } from '../utils/animations.js';

export function renderHome() {
  const app = document.getElementById('app');
  app.innerHTML = '';

  app.appendChild(createNavbar());
  app.appendChild(createHero());
  app.appendChild(createAbout());
  app.appendChild(createFAQ());
  app.appendChild(createModes());
  app.appendChild(createFooter());

  initRevealAnimations();
}
