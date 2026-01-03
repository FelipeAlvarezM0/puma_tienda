export function createModes() {
  const modes = document.createElement('section');
  modes.className = 'modes-section';
  modes.id = 'modes';
  modes.innerHTML = `
    <h3 class="section-title">Modalidades</h3>

    <div class="modes-grid">
      <div class="mode-card"><img src="/assets/images/Evento6.png" alt="Modalidad 1"><h4>.</h4></div>
      <div class="mode-card"><img src="/assets/images/Evento5.png" alt="Modalidad 2"><h4>.</h4></div>
      <div class="mode-card"><img src="/assets/images/Evento4.png" alt="Modalidad 3"><h4>.</h4></div>
      <div class="mode-card"><img src="/assets/images/Evento3.png" alt="Modalidad 4"><h4>.</h4></div>
      <div class="mode-card"><img src="/assets/images/Evento2.png" alt="Modalidad 5"><h4>.</h4></div>
      <div class="mode-card"><img src="/assets/images/Evento1.png" alt="Modalidad 6"><h4>.</h4></div>
    </div>
  `;

  return modes;
}
