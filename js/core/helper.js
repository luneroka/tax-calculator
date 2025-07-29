export function formatNumber(num) {
  return new Intl.NumberFormat('fr-FR').format(num);
}

export function setOutput(id, value, round = false) {
  const el = document.querySelector(id);
  if (el) {
    if (isNaN(value) || value === undefined || value === null) {
      el.textContent = '';
    } else {
      el.textContent = formatNumber(round ? Math.round(value) : value);
    }
  }
}

export function getInputs() {
  return {
    prix: Number(document.querySelector('#prix').value),
    notaire: Number(document.querySelector('#notaire').value),
    apport: Number(document.querySelector('#apport').value),
    duree: Number(document.querySelector('#duree').value),
    taux: Number(document.querySelector('#taux').value),
    loyer: Number(document.querySelector('#loyer').value),
    charges: Number(document.querySelector('#charges').value),
    tmi: Number(document.querySelector('#tmi-selector').value),
    ps: Number(document.querySelector('#prelevements-sociaux').value),
    regime: document.querySelector('#regime-selector').value,
    chargesCopro: Number(document.querySelector('#charges-copro').value),
    fonciere: Number(document.querySelector('#taxe-fonciere').value),
    fraisGestion: Number(document.querySelector('#frais-gestion').value),
    autresFrais: Number(document.querySelector('#autres-frais').value),
    assurancePret: Number(document.querySelector('#assurance-pret').value),
    assurancePno: Number(document.querySelector('#assurance-pno').value),
    travaux: Number(document.querySelector('#travaux').value),
    reelFonciere: Number(document.querySelector('#reel-taxe-fonciere').value),
    reelChargesCopro: Number(
      document.querySelector('#reel-charges-copro').value
    ),
    regulChages: Number(document.querySelector('#regul-charges-copro').value),
    soldeCopro: Number(document.querySelector('#solde-copro').value),
    interets: Number(document.querySelector('#interets').value),
  };
}
