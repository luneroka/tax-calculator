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
  if (impot === 0 || impot === null || impot === undefined) {
    return '';
  } else {
    return Number(
      ((revenuCC - (chargesCopro + fonciere + impot)) / prixAchat) * 100
    ).toFixed(2);
  }
}

export function calculateCashflowMensuel(
  loyer,
  charges,
  chargesCopro,
  fonciere,
  impot,
  mensualite
) {
  if (impot === 0 || impot === null || impot === undefined) {
    return '';
  } else {
    return (
      loyer + charges - (mensualite + (chargesCopro + fonciere + impot) / 12)
    );
  }
}

export function calculateCashflowAnnuel(cashflowMensuel) {
  if (
    cashflowMensuel === 0 ||
    cashflowMensuel === null ||
    cashflowMensuel === undefined
  ) {
    return '';
  } else {
    return cashflowMensuel * 12;
  }
}
