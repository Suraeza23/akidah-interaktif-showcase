const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Tutup menu' : 'Buka menu');
});

mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// Borang visitor book masih dalam mod pratonton.
// Sambungkan Google Forms / Google Apps Script sebelum digunakan secara langsung.
const visitorForm = document.getElementById('visitorForm');
const visitorStatus = document.getElementById('visitorStatus');
visitorForm.addEventListener('submit', (event) => {
  event.preventDefault();
  visitorStatus.textContent = 'Terima kasih! Borang ini ialah pratonton sahaja dan belum menyimpan data. Sambungkan Google Sheets sebelum penerbitan rasmi.';
  visitorStatus.classList.add('status-highlight');
});

// Gantikan URL di bawah dengan pautan sebenar sistem AKIDAH INTERAKTIF.
const SYSTEM_URL = '';
document.getElementById('systemLink').addEventListener('click', (event) => {
  if (!SYSTEM_URL) {
    event.preventDefault();
    alert('Pautan sistem belum ditetapkan. Masukkan URL sistem AKIDAH INTERAKTIF dalam fail js/main.js.');
    return;
  }
  event.preventDefault();
  window.open(SYSTEM_URL, '_blank', 'noopener,noreferrer');
});
