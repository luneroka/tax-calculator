import { updateCalculations } from './calculations.js';

const ids = [
  'prix',
  'notaire',
  'apport',
  'duree',
  'taux',
  'loyer',
  'charges',
  'tmi-selector',
  'charges-copro',
  'taxe-fonciere',
  'prelevements-sociaux',
  'regime-selector',
];

// Restore values from localStorage on page load
ids.forEach((id) => {
  const el = document.getElementById(id);
  if (el) {
    const saved = localStorage.getItem(id);
    if (saved !== null) {
      if (el.tagName === 'SELECT') {
        el.value = saved;
      } else {
        el.value = saved;
      }
    }
    el.addEventListener('input', () => {
      localStorage.setItem(id, el.value);
    });
  }
});

// update calculations after each input change
ids.forEach((id) => {
  const el = document.getElementById(id);
  if (el) {
    el.addEventListener('input', updateCalculations);
  }
});

updateCalculations();

// Reset tables
const button = document.getElementById('reset-tables');
button.addEventListener('click', () => {
  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.value = '';
      localStorage.removeItem(id);
    }
  });
  updateCalculations();
});
