export function createFAQ() {
  const faq = document.createElement('section');
  faq.className = 'faq-section';
  faq.id = 'faq';
  faq.innerHTML = `
    <h3 class="section-title">Preguntas frecuentes</h3>

    <div class="faq-container">
      <div class="faq-image">
        <img src="/assets/images/Pregunta.png" alt="FAQ">
      </div>

      <div class="faq-list">
        <div class="faq-item">
          <div class="faq-question">
            <span>¿En qué dispositivos puedo jugar?</span>
            <span class="icon">+</span>
          </div>
          <div class="faq-answer">
            Puedes jugar en PC Java.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-question">
            <span>¿Puedo jugar desde TLauncher?</span>
            <span class="icon">+</span>
          </div>
          <div class="faq-answer">
            Sí, aceptamos jugadores premium y no premium.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-question">
            <span>¿Puedo jugar con mis amigos?</span>
            <span class="icon">+</span>
          </div>
          <div class="faq-answer">
            Claro, puedes invitarlos y jugar juntos.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-question">
            <span>No me deja entrar, ¿qué hago?</span>
            <span class="icon">+</span>
          </div>
          <div class="faq-answer">
            Revisa tu versión o contacta soporte en Discord.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-question">
            <span>Si me banean, ¿qué puedo hacer?</span>
            <span class="icon">+</span>
          </div>
          <div class="faq-answer">
            Se podría apelar tu baneo abriendo un ticket en Discord.
          </div>
        </div>
      </div>
    </div>
  `;

  setTimeout(() => {
    const faqQuestions = faq.querySelectorAll(".faq-question");
    faqQuestions.forEach(question => {
      question.addEventListener("click", () => {
        const item = question.parentElement;
        const isActive = item.classList.contains("active");

        faq.querySelectorAll(".faq-item").forEach(faqItem => {
          faqItem.classList.remove("active");
        });

        if (!isActive) {
          item.classList.add("active");
        }
      });
    });
  }, 0);

  return faq;
}
