import { updateCalculations } from './mainTable/update.js';
import { updateReelCalculations } from './reelTable/update.js';
window.updateCalculations = updateCalculations;
window.updateReelCalculations = updateReelCalculations;
import { restoreInputs } from './core/storage.js';
import { ids, infoIds, rentaIds, reelIds } from './core/ids.js';
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
import { resetBtn } from './core/helper.js';

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
resetBtn('info', infoIds);
resetBtn('renta', rentaIds);
resetBtn('reel', reelIds);
resetBtn('tables', ids);

// Toggle comparison table
const toggleCompare = document.getElementById('toggle-compare');
const conparisonContainer = document.getElementById('comparison-container');
toggleCompare.addEventListener('click', () => {
  if (
    conparisonContainer.style.display === 'none' ||
    conparisonContainer.style.display === ''
  ) {
    conparisonContainer.style.display = 'block';
  } else {
    conparisonContainer.style.display = 'none';
  }
});

// Toggle 2044 formulaire
const toggleReel = document.getElementById('toggle-reel');
const formulaireReel = document.getElementById('formulaire-container');
toggleReel.addEventListener('click', () => {
  if (
    formulaireReel.style.display === 'none' ||
    formulaireReel.style.display === ''
  ) {
    formulaireReel.style.display = 'block';
  } else {
    formulaireReel.style.display = 'none';
  }
});
