export const loyerRows = [
  {
    label: 'Loyer mensuel HC',
    id: 'loyer',
    type: 'input',
    inputType: 'number',
    unit: '€',
  },
  {
    label: 'Charges locatives mensuelles',
    id: 'charges',
    type: 'input',
    inputType: 'number',
    unit: '€',
  },
  {
    label: 'Revenus locatifs annuels HC',
    id: 'revenus-hc',
    type: 'td',
    unit: '€',
  },
  {
    label: 'Revenus locatifs annuels CC',
    id: 'revenus-cc',
    type: 'td',
    unit: '€',
  },
  {
    label: 'Charges de copro. annuelles',
    id: 'charges-copro',
    type: 'input',
    inputType: 'number',
    unit: '€',
  },
  {
    label: 'Taxe foncière',
    id: 'taxe-fonciere',
    type: 'input',
    inputType: 'number',
    unit: '€',
  },
];

export function renderLoyerRows(rows) {
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
