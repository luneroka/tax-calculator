import { getTotalCharges } from '../reelTable/calculations.js';
import { getInputs, setOutput } from '../core/helper.js';
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
  const inputs = getInputs();

  // Calculate elements
  const prixAchat = calculatePrixAchat(inputs.prix, inputs.notaire);
  const montantEmprunt = calculateMontantEmprunt(prixAchat, inputs.apport);
  const mensualite = calculateMensualite(
    montantEmprunt,
    inputs.duree,
    inputs.taux
  );
  const revenuHC = calculateRevenuHC(inputs.loyer);
  const revenuCC = calculateRevenuCC(inputs.loyer, inputs.charges);
  let impot;
  if (inputs.regime === 'micro-foncier') {
    impot = calculateMicroFoncier(revenuHC, inputs.tmi, inputs.ps);
  } else if (inputs.regime === 'reel') {
    const totalCharges = getTotalCharges();
    impot = calculateReel(revenuHC, inputs.tmi, inputs.ps, totalCharges);
  }
  const rendement = calculateRendement(
    revenuCC,
    inputs.chargesCopro,
    inputs.fonciere,
    impot,
    prixAchat
  );
  const cashflow = calculateCashflow(
    inputs.loyer,
    inputs.charges,
    inputs.chargesCopro,
    inputs.fonciere,
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
