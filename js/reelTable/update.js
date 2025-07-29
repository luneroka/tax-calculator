import { formatNumber } from '../core/helper.js';
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
  const inputOfRecettes = document.querySelector('#recettes');
  inputOfRecettes.textContent = recettes ? formatNumber(recettes) : '';
  const inputOfTotalFrais = document.querySelector('#total-frais');
  inputOfTotalFrais.textContent = totalFrais ? formatNumber(totalFrais) : '';
  const inputOfChargesTaxables = document.querySelector('#charges-taxables');
  inputOfChargesTaxables.textContent = chargesTaxables
    ? formatNumber(chargesTaxables)
    : '';
  const inputOfFoncierTaxable = document.querySelector('#revenus-taxables');
  inputOfFoncierTaxable.textContent = revenuFoncier
    ? formatNumber(revenuFoncier)
    : '';
  const inputOfCsg = document.querySelector('#csg');
  inputOfCsg.textContent = csg ? formatNumber(Math.floor(csg)) : 0;
  const inputOfTotalCharges = document.querySelector('#total-charges');
  inputOfTotalCharges.textContent = totalCharges
    ? formatNumber(totalCharges)
    : '';
}
