export function createModes() {
  const modes = document.createElement('section');
  modes.className = 'modes-section';
  modes.id = 'modes';
  modes.innerHTML = `
    <h3 class="section-title">Modalidades</h3>

    <div class="modes-grid">
      <div class="mode-card"><img src="/assets/images/evento6.png" alt="Modalidad 1"><h4>.</h4></div>
      <div class="mode-card"><img src="/assets/images/evento5.png" alt="Modalidad 2"><h4>.</h4></div>
      <div class="mode-card"><img src="/assets/images/evento4.png" alt="Modalidad 3"><h4>.</h4></div>
      <div class="mode-card"><img src="/assets/images/evento3.png" alt="Modalidad 4"><h4>.</h4></div>
      <div class="mode-card"><img src="/assets/images/evento2.png" alt="Modalidad 5"><h4>.</h4></div>
      <div class="mode-card"><img src="/assets/images/evento1.png" alt="Modalidad 6"><h4>.</h4></div>
    </div>
  `;

  return modes;
}
