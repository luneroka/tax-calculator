import { updateCalculations } from './mainTable/update.js';
import { updateReelCalculations } from './reelTable/update.js';
import { restoreInputs } from './core/storage.js';
import { ids } from './core/ids.js';

// Sync with localStorage
restoreInputs(ids);

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
