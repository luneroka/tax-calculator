import { getTotalCharges } from '../reelTable/calculations.js';
import { formatNumber, setOutput } from '../core/helper.js';
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
  setOutput('#prix-achat', prixAchat);
  setOutput('#montant-emprunt', montantEmprunt, true);
  setOutput('#revenus-hc', revenuHC, true);
  setOutput('#revenus-cc', revenuCC, true);
  setOutput('#impot-annuel', impot, true);
  setOutput('#rendement', rendement);
  setOutput('#mensualite', mensualite, true);
  setOutput('#cashflow', cashflow, true);
  setOutput('#gain-perte', gainPerte, true);
}
