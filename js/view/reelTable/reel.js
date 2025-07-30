export const reelRows = [
  {
    ligne: '215',
    label: 'Total recettes',
    id: 'recettes',
    type: 'td',
    unit: '€',
    strong: true,
  },
  {
    ligne: '221',
    label: 'Frais de gestion',
    id: 'frais-gestion',
    type: 'input',
    inputType: 'number',
    unit: '€',
    strong: false,
  },
  {
    ligne: '222',
    label: 'Autres frais',
    id: 'autres-frais',
    type: 'input',
    inputType: 'number',
    unit: '€',
    strong: false,
  },
  {
    ligne: '223',
    label: 'Assurance de prêt',
    id: 'assurance-pret',
    type: 'input',
    inputType: 'number',
    unit: '€',
    strong: false,
  },
  {
    ligne: '223',
    label: 'Assurance PNO',
    id: 'assurance-pno',
    type: 'input',
    inputType: 'number',
    unit: '€',
    strong: false,
  },
  {
    ligne: '224',
    label: 'Travaux',
    id: 'travaux',
    type: 'input',
    inputType: 'number',
    unit: '€',
    strong: false,
  },
  {
    ligne: '227',
    label: 'Taxe foncière (hors TEOM)',
    id: 'reel-taxe-fonciere',
    type: 'input',
    inputType: 'number',
    unit: '€',
    strong: false,
  },
  {
    ligne: '229',
    label: 'Charges de copro',
    id: 'reel-charges-copro',
    type: 'input',
    inputType: 'number',
    unit: '€',
    strong: false,
  },
  {
    ligne: '230',
    label: 'Régul charges copro N-1',
    id: 'regul-charges-copro',
    type: 'input',
    inputType: 'number',
    unit: '€',
    strong: false,
  },
  {
    ligne: '',
    label: 'Solde copro N-1',
    id: 'solde-copro',
    type: 'input',
    inputType: 'number',
    unit: '€',
    strong: false,
  },
  {
    ligne: '240',
    label: 'Total frais et charges',
    id: 'total-frais',
    type: 'td',
    unit: '€',
    strong: true,
  },
  {
    ligne: '250',
    label: "Intérêts d'emprunt",
    id: 'interets',
    type: 'input',
    inputType: 'number',
    unit: '€',
    strong: false,
  },
  {
    ligne: '',
    label: 'Charges taxables (240+250)',
    id: 'charges-taxables',
    type: 'td',
    unit: '€',
    strong: true,
  },
  {
    ligne: '',
    label: 'CSG Déductible (6,8%)',
    id: 'csg',
    type: 'td',
    unit: '€',
    strong: false,
  },
  {
    ligne: '',
    label: 'Total (Charges + CSG)',
    id: 'total-charges',
    type: 'td',
    unit: '€',
    strong: true,
  },
  {
    ligne: '260',
    label: 'Revenus fonciers taxables',
    id: 'revenus-taxables',
    type: 'td',
    unit: '€',
    strong: true,
  },
];

export function renderReelRows(rows) {
  return rows
    .map((row) => {
      let inputHtml = '';
      if (row.type === 'input') {
        inputHtml = `<input type="${row.inputType}" id="${row.id}" value="" />`;
      } else if (row.type === 'td' && row.strong) {
        inputHtml = `<strong id="${row.id}"></strong>`;
      } else if (row.type === 'td' && !row.strong) {
        inputHtml = `<span id="${row.id}"></span>`;
      }
      return `
     <tr>
      <td class='ligne'>${row.ligne}</td>
      <td class="row-type">${
        row.strong ? '<strong>' + row.label + '</strong>' : row.label
      }</td>
      <td class="row-value">${inputHtml}</td>
      <td class="unit">${row.unit || ''}</td>
    </tr>
    `;
    })
    .join('');
}
