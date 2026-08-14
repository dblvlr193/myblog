// 1. TEMA SCURO CON SALVATAGGIO
const themeBtn = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('blog-theme');

if (savedTheme === 'dark') {
  document.body.classList.add('dark-theme');
  if (themeBtn) themeBtn.textContent = '☀️ Tema';
}

if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    themeBtn.textContent = isDark ? '☀️ Tema' : '🌙 Tema';
    localStorage.setItem('blog-theme', isDark ? 'dark' : 'light');
  });
}

// 2. COUNTDOWN SERIE A
const targetDate = new Date('August 22, 2026 18:00:00').getTime();

function updateCountdown() {
  const daysEl = document.getElementById('days');
  if (!daysEl) return;

  const now = new Date().getTime();
  const difference = targetDate - now;

  if (difference > 0) {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days < 10 ? '0' + days : days;
    document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
    document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;
  } else {
    document.getElementById('countdown').innerHTML = "<p style='color:#38bdf8; font-weight:bold;'>🔥 Il Campionato è Iniziato!</p>";
  }
}

setInterval(updateCountdown, 1000);
updateCountdown();
// 3. PULSANTE TORNA SU
const backToTopBtn = document.getElementById('back-to-top');

if (backToTopBtn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}