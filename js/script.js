import { updateCalculations } from './mainCalculations.js';
import { updateReelCalculations } from './reelCalculations.js';
import { ids } from './ids.js';

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

ids.forEach((id) => {
  const el = document.getElementById(id);
  if (el) {
    el.addEventListener('input', updateReelCalculations);
  }
});

updateCalculations();
updateReelCalculations();

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
  updateReelCalculations();
});

// Toggle 2044 formulaire
const toggleBtn = document.getElementById('toggle-reel');
const formulaireReel = document.getElementById('formulaire-reel');

toggleBtn.addEventListener('click', () => {
  if (
    formulaireReel.style.display === 'none' ||
    formulaireReel.style.display === ''
  ) {
    formulaireReel.style.display = 'block';
  } else {
    formulaireReel.style.display = 'none';
  }
});
