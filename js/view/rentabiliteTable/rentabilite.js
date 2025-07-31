export const rentabiliteRows = [
  {
    label: 'Rendement net',
    id: 'rendement',
    type: 'td',
    unit: '%',
  },
  {
    label: 'Cashflow mensuel',
    id: 'cashflow-mensuel',
    type: 'td',
    unit: '€',
  },
  {
    label: 'Cashflow annuel',
    id: 'cashflow-annuel',
    type: 'td',
    unit: '€',
  },
];

export function renderRentabiliteRows(rows) {
  return rows
    .map((row) => {
      let inputHtml = '';
      if (row.type === 'td') {
        inputHtml = `<span id=${row.id}></span>`;
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
