import { updateCalculations } from './mainTable/update.js';
import { updateReelCalculations } from './reelTable/update.js';
window.updateCalculations = updateCalculations;
window.updateReelCalculations = updateReelCalculations;
import { restoreInputs } from './core/storage.js';
import { ids, infoIds, rentaIds, reelIds } from './core/ids.js';
import { prixRows } from './view/infoTable/prix.js';
import { descriptionRows } from './view/infoTable/description.js';
import { empruntRows } from './view/infoTable/emprunt.js';
import { loyerRows } from './view/rentabiliteTable/loyer.js';
import { impotsRows } from './view/rentabiliteTable/impots.js';
import { rentabiliteRows } from './view/rentabiliteTable/rentabilite.js';
import { reelRows } from './view/reelTable/reel.js';
import { renderSection, resetBtn, toggleElement } from './core/helper.js';

// --- Render dynamic sections --- //
renderSection('description', descriptionRows);
renderSection('prix-achat', prixRows);
renderSection('emprunt', empruntRows);
renderSection('loyer', loyerRows);
renderSection('impots', impotsRows);
renderSection('rentabilite', rentabiliteRows);
renderSection('reel', reelRows);

// --- Restore values and calculate after everything is rendered --- //
restoreInputs(ids);
updateCalculations();
updateReelCalculations();

// --- Buttons Events Handlers --- //
// Reset buttons
resetBtn('info', infoIds);
resetBtn('renta', rentaIds);
resetBtn('reel', reelIds);
resetBtn('tables', ids);

// Toggle hidden tables buttons
toggleElement('comparison');
toggleElement('reel');
