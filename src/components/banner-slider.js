export function createBannerSlider() {
  const section = document.createElement('section');
  section.className = 'hero';
  section.innerHTML = `
    <div class="hero-banner banner-slider">
      <div class="banner-slide active">
        <img src="/assets/images/bannerps.png" class="banner-bg" alt="Banner Navidad">

        <div class="banner-content">
          <span class="badge">EN OFERTA</span>
          <h1>PACK NAVIDEÑO</h1>
          <p class="price">€44.20 <small>€65.00</small></p>

          <div class="banner-buttons">
            <button class="btn-primary">Ver más detalles</button>
            <button class="btn-secondary">Ver artículos parecidos</button>
          </div>
        </div>
      </div>

    </div>
  `;

  setTimeout(() => {
    const slides = section.querySelectorAll(".banner-slide");
    const dotsContainer = section.querySelector(".banner-dots");
    const nextBtn = section.querySelector(".banner-arrow.right");
    const prevBtn = section.querySelector(".banner-arrow.left");

    let currentIndex = 0;

    if (slides.length > 0 && dotsContainer) {
      slides.forEach((_, i) => {
        const dot = document.createElement("span");
        if (i === 0) dot.classList.add("active");
        dot.addEventListener("click", () => {
          currentIndex = i;
          showSlide(currentIndex);
        });
        dotsContainer.appendChild(dot);
      });

      const dots = section.querySelectorAll(".banner-dots span");

      function showSlide(index) {
        slides.forEach(slide => slide.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));

        slides[index].classList.add("active");
        dots[index].classList.add("active");
      }

      if (nextBtn) {
        nextBtn.addEventListener("click", () => {
          currentIndex = (currentIndex + 1) % slides.length;
          showSlide(currentIndex);
        });
      }

      if (prevBtn) {
        prevBtn.addEventListener("click", () => {
          currentIndex = (currentIndex - 1 + slides.length) % slides.length;
          showSlide(currentIndex);
        });
      }

      setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
      }, 6000);
    }
  }, 0);

  return section;
}
