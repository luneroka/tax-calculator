import { getInputs } from '../core/helper.js';

// Exported function to get totalCharges for use in other modules
export function getTotalCharges() {
  // Get inputs
  const inputs = getInputs();
  const recettes = Number(document.querySelector('#loyer').value) * 12;

  // Calculate
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
  return totalCharges;
}

export function calculateFrais(
  fraisGestion,
  autresFrais,
  assurancePret,
  assurancePno,
  travaux,
  reelFonciere,
  reelChargesCopro
) {
  return (
    fraisGestion +
    autresFrais +
    assurancePret +
    assurancePno +
    travaux +
    reelFonciere +
    reelChargesCopro
  );
}

export function calculateChargesTaxables(frais, interets) {
  return frais + interets;
}

export function calculateCsg(tmi, revenuFoncier) {
  if (tmi === 0) {
    return 0;
  } else {
    return (revenuFoncier || 0) * 0.068;
  }
}

export function calculateTotalCharges(chargesTaxables, csg) {
  return chargesTaxables + csg;
}

export function calculateRevenuFoncier(recettes, chargesTaxables) {
  return recettes - chargesTaxables;
}
