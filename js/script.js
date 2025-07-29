import { updateCalculations } from './mainTable/update.js';
import { updateReelCalculations } from './reelTable/update.js';
window.updateCalculations = updateCalculations;
window.updateReelCalculations = updateReelCalculations;
import { restoreInputs } from './core/storage.js';
import { ids } from './core/ids.js';
import {
  prixAchatRows,
  renderPrixAchatRows,
} from './view/infoTable/prixAchat.js';
import {
  descriptionRows,
  renderDescriptionRows,
} from './view/infoTable/description.js';

// --- Render dynamic sections --- //

// Render Prix d'Achat
const prixAchatTBody = document.querySelector('.prix-achat-tbody');
if (prixAchatTBody) {
  prixAchatTBody.innerHTML = renderPrixAchatRows(prixAchatRows);
}

// Render Description
const descriptionTbody = document.getElementById('description-tbody');
if (descriptionTbody) {
  descriptionTbody.innerHTML = renderDescriptionRows(descriptionRows);
}

// --- Restore values and set up listeners for all ids --- //
restoreInputs(ids);

// Initial calculation after everything is rendered
updateCalculations();
updateReelCalculations();

// --- Buttons Events Handlers --- //

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
