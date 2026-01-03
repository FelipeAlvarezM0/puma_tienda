/* ================= BANNER SLIDER ================= */
const banners = [
  "Bannerps.png",
  "Bannerps2.png",
  "Bannerps3.png"
];

let currentBanner = 0;

const bannerImg = document.querySelector(".hero-image img");

if (bannerImg) {
  setInterval(() => {
    currentBanner = (currentBanner + 1) % banners.length;

    // efecto fade
    bannerImg.style.opacity = "0";

    setTimeout(() => {
      bannerImg.src = banners[currentBanner];
      bannerImg.style.opacity = "1";
    }, 300);

  }, 1000); // ⏱ cambia cada 1 segundo
}

/* ================= VOLVER AL INICIO ================= */
const btnBack = document.querySelector(".btn-cart");
if (btnBack) {
  btnBack.addEventListener("click", () => {
    window.location.href = "index.html";
  });
}

/* ================= ANIMACIONES DE ENTRADA ================= */
window.addEventListener("load", () => {
  document.querySelectorAll(".hero, .layout, .sidebar, .main")
    .forEach((el, i) => {
      el.style.animationDelay = `${i * 0.2}s`;
      el.classList.add("fade-up");
    });
});

/* ================= NIEVE ================= */
const snowContainer = document.createElement("div");
snowContainer.className = "snow";
document.body.appendChild(snowContainer);

for (let i = 0; i < 50; i++) {
  const snow = document.createElement("span");
  snow.style.left = Math.random() * 100 + "vw";
  snow.style.animationDuration = 5 + Math.random() * 5 + "s";
  snow.style.opacity = Math.random();
  snowContainer.appendChild(snow);
}

/* ================= BANNER SLIDER ================= */
const slides = document.querySelectorAll(".banner-slide");
const dotsContainer = document.querySelector(".banner-dots");
const nextBtn = document.querySelector(".banner-arrow.right");
const prevBtn = document.querySelector(".banner-arrow.left");

let index = 0;

// Crear puntitos
slides.forEach((_, i) => {
  const dot = document.createElement("span");
  if(i === 0) dot.classList.add("active");
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".banner-dots span");

function showSlide(i){
  slides.forEach(s => s.classList.remove("active"));
  dots.forEach(d => d.classList.remove("active"));

  slides[i].classList.add("active");
  dots[i].classList.add("active");
}

nextBtn.onclick = () => {
  index = (index + 1) % slides.length;
  showSlide(index);
};

prevBtn.onclick = () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
};

dots.forEach((dot,i)=>{
  dot.onclick = ()=> {
    index = i;
    showSlide(index);
  };
});

// Auto slide
setInterval(()=>{
  index = (index + 1) % slides.length;
  showSlide(index);
}, 6000);

