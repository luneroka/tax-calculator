export const empruntRows = [
  {
    label: 'Apport',
    id: 'apport',
    type: 'input',
    inputType: 'number',
    unit: '€',
  },
  {
    label: 'Montant emprunté',
    id: 'montant-emprunt',
    type: 'td',
    unit: '€',
  },
  {
    label: 'Durée',
    id: 'duree',
    type: 'input',
    inputType: 'number',
    unit: 'ans',
  },
  {
    label: 'Taux',
    id: 'taux',
    type: 'input',
    inputType: 'number',
    unit: '%',
  },
  {
    label: 'Mensualités',
    id: 'mensualite',
    type: 'td',
    unit: '€',
  },
];

export function renderEmpruntRows(rows) {
  return rows
    .map((row) => {
      let inputHtml = '';
      if (row.type === 'input') {
        inputHtml = `<input type="${row.inputType}" id="${row.id}" value="" />`;
      } else if (row.type === 'td') {
        inputHtml = `<span id="${row.id}"></span>`;
      }
      return `
    <tr>
      <td class="row-type">${row.label}</td>
      <td class="row-value">${inputHtml}</td>
      <td class="unit">${row.unit || ''}</td>
    </tr>
    `;
    })
    .join('');
}
