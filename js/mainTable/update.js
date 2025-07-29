import { getTotalCharges } from '../reelTable/calculations.js';
import { formatNumber } from '../core/helper.js';
import {
  calculatePrixAchat,
  calculateMontantEmprunt,
  calculateMensualite,
  calculateRevenuHC,
  calculateRevenuCC,
  calculateRendement,
  calculateCashflow,
  calculateGainPerte,
  calculateMicroFoncier,
  calculateReel,
} from './calculations.js';

export function updateCalculations() {
  // Grab input elements
  const prix = Number(document.querySelector('#prix').value);
  const notaire = Number(document.querySelector('#notaire').value);
  const apport = Number(document.querySelector('#apport').value);
  const duree = Number(document.querySelector('#duree').value);
  const taux = Number(document.querySelector('#taux').value);
  const loyer = Number(document.querySelector('#loyer').value);
  const charges = Number(document.querySelector('#charges').value);
  const tmi = Number(document.querySelector('#tmi-selector').value);
  const ps = Number(document.querySelector('#prelevements-sociaux').value);
  const regime = document.querySelector('#regime-selector').value;
  const chargesCopro = Number(document.querySelector('#charges-copro').value);
  const fonciere = Number(document.querySelector('#taxe-fonciere').value);

  // Calculate elements
  const prixAchat = calculatePrixAchat(prix, notaire);
  const montantEmprunt = calculateMontantEmprunt(prixAchat, apport);
  const mensualite = calculateMensualite(montantEmprunt, duree, taux);
  const revenuHC = calculateRevenuHC(loyer);
  const revenuCC = calculateRevenuCC(loyer, charges);
  let impot;
  if (regime === 'micro-foncier') {
    impot = calculateMicroFoncier(revenuHC, tmi, ps);
  } else if (regime === 'reel') {
    const totalCharges = getTotalCharges();
    impot = calculateReel(revenuHC, tmi, ps, totalCharges);
  }
  const rendement = calculateRendement(
    revenuCC,
    chargesCopro,
    fonciere,
    impot,
    prixAchat
  );
  const cashflow = calculateCashflow(
    loyer,
    charges,
    chargesCopro,
    fonciere,
    impot,
    mensualite
  );
  const gainPerte = calculateGainPerte(cashflow);

  // Display Elements
  const inputOfPrixAchat = document.querySelector('#prix-achat');
  inputOfPrixAchat.textContent = prixAchat ? formatNumber(prixAchat) : '';
  const inputOfMontantEmprunt = document.querySelector('#montant-emprunt');
  inputOfMontantEmprunt.textContent = montantEmprunt
    ? formatNumber(Math.round(montantEmprunt))
    : '';
  const inputOfRevenuHC = document.querySelector('#revenus-hc');
  inputOfRevenuHC.textContent = revenuHC
    ? formatNumber(Math.round(revenuHC))
    : '';
  const inputOfRevenuCC = document.querySelector('#revenus-cc');
  inputOfRevenuCC.textContent = revenuCC
    ? formatNumber(Math.round(revenuCC))
    : '';
  const inputOfImpot = document.querySelector('#impot-annuel');
  inputOfImpot.textContent = impot ? formatNumber(Math.round(impot)) : '';
  const inputOfRendement = document.querySelector('#rendement');
  inputOfRendement.textContent = isNaN(rendement)
    ? ''
    : formatNumber(rendement);
  const inputOfMensualite = document.querySelector('#mensualite');
  inputOfMensualite.textContent = mensualite
    ? formatNumber(Math.round(mensualite))
    : '';
  const inputOfCashflow = document.querySelector('#cashflow');
  inputOfCashflow.textContent = cashflow
    ? formatNumber(Math.round(cashflow))
    : '';
  const inputOfGainPerte = document.querySelector('#gain-perte');
  inputOfGainPerte.textContent = gainPerte
    ? formatNumber(Math.round(gainPerte))
    : '';
}
