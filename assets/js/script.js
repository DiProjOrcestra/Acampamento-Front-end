document.addEventListener("DOMContentLoaded", () => {
  const navButtons = document.querySelectorAll('.nav-btn');
  const niveles = document.querySelectorAll('.nivel');

  const activeBtn = document.querySelector('.nav-btn.active');
  if(activeBtn) {
    const xp = parseInt(activeBtn.getAttribute('data-xp') || "0", 10);
    const maxXp = parseInt(document.getElementById('xpMaximo')?.value || "100", 10);
    updateProgress(xp, maxXp);
  }

  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      const target = button.getAttribute('data-target');
      const xp = parseInt(button.getAttribute('data-xp') || "0", 10);
      const maxXp = parseInt(document.getElementById('xpMaximo')?.value || "100", 10);

      navButtons.forEach(btn => btn.classList.remove('active'));
      niveles.forEach(nivel => nivel.classList.remove('active'));

      button.classList.add('active');
      document.getElementById(target).classList.add('active');

      updateProgress(xp, maxXp);
      window.scrollTo(0, 0);
    });
  });

  const btnDemo = document.getElementById('btn-demo');
  const textoDemo = document.getElementById('texto-demo');
  if (btnDemo && textoDemo) {
    let manaClicks = 0;
    btnDemo.addEventListener('click', () => {
      manaClicks++;
      textoDemo.textContent = "✨ Encantamento lançado " + manaClicks + "x! O orbe brilha mais forte.";
    });
  }
});

function updateProgress(xpAtual, xpTotal) {
  const progressBar = document.getElementById('progressBar');
  const xpCounter = document.getElementById('xpCounter');

  if(progressBar && xpCounter && xpTotal > 0) {
      const percentage = Math.round((xpAtual / xpTotal) * 100);
      progressBar.style.width = percentage + '%';
      progressBar.textContent = percentage + '%';
      xpCounter.textContent = xpAtual;
  }
}
