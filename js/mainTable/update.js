import { getTotalCharges } from '../reelTable/calculations.js';
import { getInputs, setOutput } from '../core/helper.js';
import {
  calculatePrixAchat,
  calculateMontantEmprunt,
  calculateMensualite,
  calculateRevenuHC,
  calculateRevenuCC,
  calculateRendement,
  calculateCashflowMensuel,
  calculateCashflowAnnuel,
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

  const cashflowMensuel = calculateCashflowMensuel(
    inputs.loyer,
    inputs.charges,
    inputs.chargesCopro,
    inputs.fonciere,
    impot,
    mensualite
  );

  const cashflowMensuelMicro = calculateCashflowMensuel(
    inputs.loyer,
    inputs.charges,
    inputs.chargesCopro,
    inputs.fonciere,
    impotMicro,
    mensualite
  );
  const cashflowMensuelReel = calculateCashflowMensuel(
    inputs.loyer,
    inputs.charges,
    inputs.chargesCopro,
    inputs.fonciere,
    impotReel,
    mensualite
  );
  const cashflowAnnuel = calculateCashflowAnnuel(cashflowMensuel);
  const cashflowAnnuelMicro = calculateCashflowAnnuel(cashflowMensuelMicro);
  const cashflowAnnuelReel = calculateCashflowAnnuel(cashflowMensuelReel);

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
  setOutput('#cashflow-mensuel', cashflowMensuel, true);
  setOutput('#cashflow-m-micro', cashflowMensuelMicro, true);
  setOutput('#cashflow-m-reel', cashflowMensuelReel, true);
  setOutput('#cashflow-annuel', cashflowAnnuel, true);
  setOutput('#cashflow-a-micro', cashflowAnnuelMicro, true);
  setOutput('#cashflow-a-reel', cashflowAnnuelReel, true);
}
