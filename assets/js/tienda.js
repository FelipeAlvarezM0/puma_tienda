/* ================= VOLVER AL INICIO ================= */
const btnBack = document.querySelector(".btn-cart");
if (btnBack) {
  btnBack.addEventListener("click", () => {
    window.location.href = "index.html";
  });
}

/* ================= BANNER SLIDER ================= */
const slides = document.querySelectorAll(".banner-slide");
const dotsContainer = document.querySelector(".banner-dots");
const nextBtn = document.querySelector(".banner-arrow.right");
const prevBtn = document.querySelector(".banner-arrow.left");

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

  const dots = document.querySelectorAll(".banner-dots span");

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

/* ================= ANIMACIONES DE ENTRADA ================= */
window.addEventListener("load", () => {
  const elementsToAnimate = document.querySelectorAll(".hero, .layout, .sidebar, .main");
  elementsToAnimate.forEach((el, i) => {
    el.style.animationDelay = `${i * 0.2}s`;
    el.classList.add("fade-up");
  });
});

/* ================= NIEVE NAVIDEÑA ================= */
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
