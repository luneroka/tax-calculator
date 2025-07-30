import { updateCalculations } from './mainTable/update.js';
import { updateReelCalculations } from './reelTable/update.js';
window.updateCalculations = updateCalculations;
window.updateReelCalculations = updateReelCalculations;
import { restoreInputs } from './core/storage.js';
import { ids } from './core/ids.js';
import { prixRows, renderPrixRows } from './view/infoTable/prix.js';
import {
  descriptionRows,
  renderDescriptionRows,
} from './view/infoTable/description.js';
import { empruntRows, renderEmpruntRows } from './view/infoTable/emprunt.js';
import { loyerRows, renderLoyerRows } from './view/rentabiliteTable/loyer.js';
import {
  impotsRows,
  renderImpotsRows,
} from './view/rentabiliteTable/impots.js';
import {
  renderRentabiliteRows,
  rentabiliteRows,
} from './view/rentabiliteTable/rentabilite.js';
import { reelRows, renderReelRows } from './view/reelTable/reel.js';

// --- Render dynamic sections --- //
// Render Prix d'Achat
const prixTBody = document.querySelector('.prix-achat-tbody');
if (prixTBody) {
  prixTBody.innerHTML = renderPrixRows(prixRows);
}

// Render Description
const descriptionTbody = document.getElementById('description-tbody');
if (descriptionTbody) {
  descriptionTbody.innerHTML = renderDescriptionRows(descriptionRows);
}

// Render Emprunt
const empruntTbody = document.getElementById('emprunt-tbody');
if (empruntTbody) {
  empruntTbody.innerHTML = renderEmpruntRows(empruntRows);
}

// Render Loyer
const loyerTbody = document.getElementById('loyer-tbody');
if (loyerTbody) {
  loyerTbody.innerHTML = renderLoyerRows(loyerRows);
}

// Render Impots
const impotsTbody = document.getElementById('impots-tbody');
if (impotsTbody) {
  impotsTbody.innerHTML = renderImpotsRows(impotsRows);
}

// Render Rentabilite
const rentabiliteTbody = document.getElementById('rentabilite-tbody');
if (rentabiliteTbody) {
  rentabiliteTbody.innerHTML = renderRentabiliteRows(rentabiliteRows);
}

// Render Reel Table
const reelTbody = document.getElementById('reel-tbody');
if (reelTbody) {
  reelTbody.innerHTML = renderReelRows(reelRows);
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
