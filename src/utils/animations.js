export function initRevealAnimations() {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.15 });

  const revealElements = document.querySelectorAll(
    ".section-title, .section-desc, .about-text, .faq-item, .mode-card"
  );

  revealElements.forEach(el => {
    el.classList.add("soft-reveal");
    revealObserver.observe(el);
  });
}

export function createSnowEffect() {
  const existingSnow = document.querySelector('.snow');
  if (existingSnow) {
    existingSnow.remove();
  }

  const snowContainer = document.createElement("div");
  snowContainer.className = "snow";
  document.body.appendChild(snowContainer);

  for (let i = 0; i < 50; i++) {
    const snowflake = document.createElement("span");
    snowflake.style.left = Math.random() * 100 + "vw";
    snowflake.style.animationDuration = 5 + Math.random() * 5 + "s";
    snowflake.style.opacity = Math.random();
    snowContainer.appendChild(snowflake);
  }
}
