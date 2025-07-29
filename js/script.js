import {
  calculatePrixAchat,
  calculateMontantEmprunt,
  calculateMensualite,
  calculateRevenuHC,
  calculateRevenuCC,
  calculateMicroFoncier,
  calculateReel,
  calculateRendement,
  calculateCashflow,
  calculateGainPerte,
} from './calculations.js';

function updateCalculations() {
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
  const chargesCopro = Number(document.querySelector('#charges-copro').value);
  const fonciere = Number(document.querySelector('#taxe-fonciere').value);

  // Calculate elements
  const prixAchat = calculatePrixAchat(prix, notaire);
  const montantEmprunt = calculateMontantEmprunt(prixAchat, apport);
  const mensualite = calculateMensualite(montantEmprunt, duree, taux);
  const revenuHC = calculateRevenuHC(loyer);
  const revenuCC = calculateRevenuCC(loyer, charges);
  const impot = calculateMicroFoncier(revenuHC, tmi, ps);
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
  inputOfPrixAchat.textContent = prixAchat || '';
  const inputOfMontantEmprunt = document.querySelector('#montant-emprunt');
  inputOfMontantEmprunt.textContent = Math.round(montantEmprunt) || '';
  const inputOfRevenuHC = document.querySelector('#revenus-hc');
  inputOfRevenuHC.textContent = Math.round(revenuHC) || '';
  const inputOfRevenuCC = document.querySelector('#revenus-cc');
  inputOfRevenuCC.textContent = Math.round(revenuCC) || '';
  const inputOfImpot = document.querySelector('#impot-annuel');
  inputOfImpot.textContent = Math.round(impot) || '';
  const inputOfRendement = document.querySelector('#rendement');
  inputOfRendement.textContent = isNaN(rendement) ? '' : rendement;
  const inputOfMensualite = document.querySelector('#mensualite');
  inputOfMensualite.textContent = Math.round(mensualite) || '';
  const inputOfCashflow = document.querySelector('#cashflow');
  inputOfCashflow.textContent = Math.round(cashflow) || '';
  const inputOfGainPerte = document.querySelector('#gain-perte');
  inputOfGainPerte.textContent = Math.round(gainPerte) || '';
}

const ids = [
  'prix',
  'notaire',
  'apport',
  'duree',
  'taux',
  'loyer',
  'charges',
  'tmi-selector',
  'charges-copro',
  'taxe-fonciere',
  'prelevements-sociaux',
  'regime-selector',
];

ids.forEach((id) => {
  const el = document.getElementById(id);
  if (el) {
    el.addEventListener('input', updateCalculations);
  }
});

updateCalculations();

// Reset tables
const button = document.getElementById('reset-tables');
button.addEventListener('click', () => {
  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.value = '';
    }
  });
  updateCalculations();
});
