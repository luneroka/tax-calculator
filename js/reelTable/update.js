import { getInputs, setOutput } from '../core/helper.js';
import {
  calculateFrais,
  calculateChargesTaxables,
  calculateRevenuFoncier,
  calculateCsg,
  calculateTotalCharges,
} from './calculations.js';

export function updateReelCalculations() {
  // Grab input elements
  const inputs = getInputs();

  // Calculate elements
  const recettes = Number(document.querySelector('#loyer').value) * 12;
  const totalFrais = calculateFrais(
    inputs.fraisGestion,
    inputs.autresFrais,
    inputs.assurancePret,
    inputs.assurancePno,
    inputs.travaux,
    inputs.reelFonciere,
    inputs.reelChargesCopro
  );
  const chargesTaxables = calculateChargesTaxables(totalFrais, inputs.interets);
  const revenuFoncier = calculateRevenuFoncier(recettes, chargesTaxables);
  const csg = calculateCsg(inputs.tmi, revenuFoncier);
  const totalCharges = calculateTotalCharges(chargesTaxables, csg);

  // Display elements
  setOutput('#recettes', recettes);
  setOutput('#total-frais', totalFrais, true);
  setOutput('#charges-taxables', chargesTaxables, true);
  setOutput('#revenus-taxables', revenuFoncier, true);
  setOutput('#csg', csg, true);
  setOutput('#total-charges', totalCharges, true);
}
