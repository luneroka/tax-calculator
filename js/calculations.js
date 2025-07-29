export function formatNumber(num) {
  return new Intl.NumberFormat('fr-FR').format(num);
}

export function calculatePrixAchat(prix, notaire) {
  return prix + notaire;
}

export function calculateMontantEmprunt(prixAchat, apport) {
  return prixAchat - apport;
}

export function calculateMensualite(capital, duree, taux) {
  const monthlyRate = taux / 100 / 12;
  return (
    (capital * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -(duree * 12)))
  );
}

export function calculateRevenuHC(loyer) {
  return loyer * 12;
}

export function calculateRevenuCC(loyer, charges) {
  return (loyer + charges) * 12;
}

export function calculateMicroFoncier(revenuHC, tmi, ps) {
  const tmiPercentage = tmi / 100;
  const psPercentage = ps / 100;
  return revenuHC * 0.7 * (tmiPercentage + psPercentage);
}

export function calculateReel(revenuHC, tmi, ps, totalCharges) {
  const tmiPercentage = tmi / 100;
  const psPercentage = ps / 100;
  return (revenuHC - totalCharges) * (tmiPercentage + psPercentage);
}

export function calculateRendement(
  revenuCC,
  chargesCopro,
  fonciere,
  impot,
  prixAchat
) {
  return Number(
    ((revenuCC - (chargesCopro + fonciere + impot)) / prixAchat) * 100
  ).toFixed(2);
}

export function calculateCashflow(
  loyer,
  charges,
  chargesCopro,
  fonciere,
  impot,
  mensualite
) {
  return (
    loyer + charges - (mensualite + (chargesCopro + fonciere + impot) / 12)
  );
}

export function calculateGainPerte(cashflow) {
  return cashflow * 12;
}

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
    impot = calculateReel();
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
  inputOfRendement.textContent = isNaN(rendement) ? '' : rendement;
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
