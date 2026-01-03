/* ================= NAVBAR SCROLL ================= */
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (navbar) {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  }
});

/* ================= FAQ ACCORDION ================= */
document.addEventListener("DOMContentLoaded", () => {
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach(question => {
    question.addEventListener("click", () => {
      const item = question.parentElement;
      const isActive = item.classList.contains("active");

      document.querySelectorAll(".faq-item").forEach(faqItem => {
        faqItem.classList.remove("active");
      });

      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
});

/* ================= REVEAL ON SCROLL ================= */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.15 });

document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll(
    ".section-title, .section-desc, .about-text, .faq-item, .mode-card"
  );

  revealElements.forEach(el => {
    el.classList.add("soft-reveal");
    revealObserver.observe(el);
  });
});
