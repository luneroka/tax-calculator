export const descriptionRows = [
  {
    label: 'Surface habitable',
    id: 'surface',
    type: 'input',
    inputType: 'number',
    unit: 'm2',
  },
  { label: 'Pièces', id: 'pieces', type: 'input', inputType: 'number' },
  { label: 'Étage', id: 'etage', type: 'input', inputType: 'number' },
  {
    label: 'Ascenseur',
    id: 'ascenseur',
    type: 'select',
    options: ['', 'Oui', 'Non'],
  },
  {
    label: 'Parking 1',
    id: 'parking-one',
    type: 'select',
    options: ['', 'Box fermé', 'Place sécurisée', 'Place non sécurisée'],
  },
  {
    label: 'Parking 2',
    id: 'parking-two',
    type: 'select',
    options: ['', 'Box fermé', 'Place sécurisée', 'Place non sécurisée'],
  },
  {
    label: 'DPE',
    id: 'dpe',
    type: 'select',
    options: ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G'],
  },
  {
    label: 'Chauffage',
    id: 'chauffage',
    type: 'select',
    options: ['', 'Collectif', 'Individuel Elec', 'Individuel Gaz'],
  },
  {
    label: 'Construction',
    id: 'construction',
    type: 'input',
    inputType: 'number',
  },
];

export function renderDescriptionRows(rows) {
  return rows
    .map((row) => {
      let inputHtml = '';
      if (row.type === 'input') {
        inputHtml = `<input type="${row.inputType}" id="${row.id}" value="" />`;
      } else if (row.type === 'select') {
        inputHtml =
          `<select id="${row.id}">` +
          row.options
            .map((opt) => `<option value="${opt}">${opt ? opt : ''}</option>`)
            .join('') +
          `</select>`;
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
