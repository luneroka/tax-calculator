export const impotsRows = [
  {
    label: 'TMI',
    id: 'tmi-selector',
    type: 'select',
    options: {
      values: ['', '0', '11', '30', '41', '45'],
      display: ['', '0', '11', '30', '41', '45'],
    },
    unit: '%',
  },
  {
    label: 'Prélèvements sociaux',
    id: 'prelevements-sociaux',
    type: 'select',
    options: { values: ['', '17.2'], display: ['', '17,2'] },
    unit: '%',
  },
  {
    label: "Régime d'imposition",
    id: 'regime-selector',
    type: 'select',
    options: {
      values: ['', 'micro-foncier', 'reel'],
      display: ['', 'Micro-foncier', 'Réel'],
    },
  },
  {
    label: 'Impôt annuel',
    id: 'impot-annuel',
    type: 'td',
    unit: '€',
  },
];
