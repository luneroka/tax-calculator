export function calculatePrixAchat(prix, notaire) {
  return prix + notaire;
}

export function calculateMensualite(capital, duree, taux) {
  const monthlyRate = taux / 12;
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
  return revenuHC * 0.7 * (tmi + ps);
}

export function calculateReel() {}

export function calculateRendement(
  revenuCC,
  chargesCopro,
  fonciere,
  impot,
  prixAchat
) {
  return (revenuCC - (chargesCopro + fonciere + impot)) / prixAchat;
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
