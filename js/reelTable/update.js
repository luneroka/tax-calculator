import { formatNumber, setOutput } from '../core/helper.js';
import {
  calculateFrais,
  calculateChargesTaxables,
  calculateRevenuFoncier,
  calculateCsg,
  calculateTotalCharges,
} from './calculations.js';

export function updateReelCalculations() {
  // Grab input elements
  const tmi = Number(document.querySelector('#tmi-selector').value);
  const fraisGestion = Number(document.querySelector('#frais-gestion').value);
  const autresFrais = Number(document.querySelector('#autres-frais').value);
  const assurancePret = Number(document.querySelector('#assurance-pret').value);
  const assurancePno = Number(document.querySelector('#assurance-pno').value);
  const travaux = Number(document.querySelector('#travaux').value);
  const reelFonciere = Number(
    document.querySelector('#reel-taxe-fonciere').value
  );
  const reelChargesCopro = Number(
    document.querySelector('#reel-charges-copro').value
  );
  const regulChages = Number(
    document.querySelector('#regul-charges-copro').value
  );
  const soldeCopro = Number(document.querySelector('#solde-copro').value);
  const interets = Number(document.querySelector('#interets').value);

  // Calculate elements
  const recettes = Number(document.querySelector('#loyer').value) * 12;
  const totalFrais = calculateFrais(
    fraisGestion,
    autresFrais,
    assurancePret,
    assurancePno,
    travaux,
    reelFonciere,
    reelChargesCopro
  );
  const chargesTaxables = calculateChargesTaxables(totalFrais, interets);
  const revenuFoncier = calculateRevenuFoncier(recettes, chargesTaxables);
  const csg = calculateCsg(tmi, revenuFoncier);
  const totalCharges = calculateTotalCharges(chargesTaxables, csg);

  // Display elements
  setOutput('#recettes', recettes);
  setOutput('#total-frais', totalFrais, true);
  setOutput('#charges-taxables', chargesTaxables, true);
  setOutput('#revenus-taxables', revenuFoncier, true);
  setOutput('#csg', csg, true);
  setOutput('#total-charges', totalCharges, true);
}
