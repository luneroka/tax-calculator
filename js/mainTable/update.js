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

  const impotMicro = calculateMicroFoncier(revenuHC, inputs.tmi, inputs.ps);
  const impotReel = calculateReel(
    revenuHC,
    inputs.tmi,
    inputs.ps,
    getTotalCharges()
  );

  const rendement = calculateRendement(
    revenuCC,
    inputs.chargesCopro,
    inputs.fonciere,
    impot,
    prixAchat
  );

  const rendementMicro = calculateRendement(
    revenuCC,
    inputs.chargesCopro,
    inputs.fonciere,
    impotMicro,
    prixAchat
  );
  const rendementReel = calculateRendement(
    revenuCC,
    inputs.chargesCopro,
    inputs.fonciere,
    impotReel,
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

  const cashflowMicro = calculateCashflow(
    inputs.loyer,
    inputs.charges,
    inputs.chargesCopro,
    inputs.fonciere,
    impotMicro,
    mensualite
  );
  const cashflowReel = calculateCashflow(
    inputs.loyer,
    inputs.charges,
    inputs.chargesCopro,
    inputs.fonciere,
    impotReel,
    mensualite
  );
  const gainPerte = calculateGainPerte(cashflow);
  const gainPerteMicro = calculateGainPerte(cashflowMicro);
  const gainPerteReel = calculateGainPerte(cashflowReel);

  // Display Elements
  setOutput('#prix-achat', prixAchat);
  setOutput('#montant-emprunt', montantEmprunt, true);
  setOutput('#revenus-hc', revenuHC, true);
  setOutput('#revenus-cc', revenuCC, true);
  setOutput('#impot-annuel', impot, true);
  setOutput('#impot-micro', impotMicro, true);
  setOutput('#impot-reel', impotReel, true);
  setOutput('#rendement', rendement);
  setOutput('#rendement-micro', rendementMicro);
  setOutput('#rendement-reel', rendementReel);
  setOutput('#mensualite', mensualite, true);
  setOutput('#cashflow', cashflow, true);
  setOutput('#cashflow-micro', cashflowMicro, true);
  setOutput('#cashflow-reel', cashflowReel, true);
  setOutput('#gain-perte', gainPerte, true);
  setOutput('#gain-perte-micro', gainPerteMicro, true);
  setOutput('#gain-perte-reel', gainPerteReel, true);
}
