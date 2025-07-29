export const prixRows = [
  {
    label: 'Prix du bien',
    id: 'prix',
    type: 'input',
    inputType: 'number',
    unit: '€',
  },
  {
    label: 'Frais de notaire',
    id: 'notaire',
    type: 'input',
    inputType: 'number',
    unit: '€',
  },
  {
    label: "Prix d'achat",
    id: 'prix-achat',
    type: 'td',
    unit: '€',
  },
];

export function renderPrixRows(rows) {
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
