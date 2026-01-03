/* NAV SCROLL */
window.addEventListener("scroll",()=>{
  document.getElementById("navbar")
    .classList.toggle("scrolled", window.scrollY > 50);
});

/* TODO DESPUÉS DE CARGAR EL HTML */
document.addEventListener("DOMContentLoaded",()=>{

  /* FAQ FUNCIONAL */
  document.querySelectorAll(".faq-question").forEach(question=>{
    question.addEventListener("click",()=>{
      const item = question.parentElement;
      item.classList.toggle("active");
    });
  });

  /* CTA ROTATIVO */
  
  updateCTA();
  setInterval(()=>{ i=(i+1)%ctas.length; updateCTA(); },5000);

  box.addEventListener("click",()=>{
    location.href = box.dataset.link;
  });

});

/* ===== APARICIÓN SUAVE REGORLAND ===== */

const revealObserver = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{threshold:0.15});

document.querySelectorAll(
  ".section-title, .section-desc, .about-text, .faq-item, .mode-card"
).forEach(el=>{
  el.classList.add("soft-reveal");
  revealObserver.observe(el);
});
