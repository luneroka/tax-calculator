// Exported function to get totalCharges for use in other modules
export function getTotalCharges() {
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
  const interets = Number(document.querySelector('#interets').value);

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
  return totalCharges;
}

export function calculateFrais(
  fraisGestion,
  autresFrais,
  assurancePret,
  assurancePno,
  travaux,
  reelFonciere,
  reelChargesCopro
) {
  return (
    fraisGestion +
    autresFrais +
    assurancePret +
    assurancePno +
    travaux +
    reelFonciere +
    reelChargesCopro
  );
}

export function calculateChargesTaxables(frais, interets) {
  return frais + interets;
}

export function calculateCsg(tmi, revenuFoncier) {
  if (tmi === 0) {
    return 0;
  } else {
    return (revenuFoncier || 0) * 0.068;
  }
}

export function calculateTotalCharges(chargesTaxables, csg) {
  return chargesTaxables + csg;
}

export function calculateRevenuFoncier(recettes, chargesTaxables) {
  return recettes - chargesTaxables;
}
