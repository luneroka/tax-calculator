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
import { renderSection, resetBtn, toggleElement } from './core/helper.js';

// --- Render dynamic sections --- //
renderSection('description', renderDescriptionRows, descriptionRows);
renderSection('prix-achat', renderPrixRows, prixRows);
renderSection('emprunt', renderEmpruntRows, empruntRows);
renderSection('loyer', renderLoyerRows, loyerRows);
renderSection('impots', renderImpotsRows, impotsRows);
renderSection('rentabilite', renderRentabiliteRows, rentabiliteRows);
renderSection('reel', renderReelRows, reelRows);

// --- Restore values and calculate after everything is rendered --- //
restoreInputs(ids);
updateCalculations();
updateReelCalculations();

// --- Buttons Events Handlers --- //
resetBtn('info', infoIds);
resetBtn('renta', rentaIds);
resetBtn('reel', reelIds);
resetBtn('tables', ids);

// Toggle hidden tables
toggleElement('comparison');
toggleElement('reel');
