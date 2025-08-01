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
    options: {
      values: ['', 'oui', 'non'],
      display: ['', 'Oui', 'Non'],
    },
  },
  {
    label: 'Parking 1',
    id: 'parking-one',
    type: 'select',
    options: {
      values: ['', 'box-ferme', 'place-secure', 'place-not-secure'],
      display: ['', 'Box fermé', 'Place sécurisée', 'Place non sécurisée'],
    },
  },
  {
    label: 'Parking 2',
    id: 'parking-two',
    type: 'select',
    options: {
      values: ['', 'box-ferme', 'place-secure', 'place-not-secure'],
      display: ['', 'Box fermé', 'Place sécurisée', 'Place non sécurisée'],
    },
  },
  {
    label: 'DPE',
    id: 'dpe',
    type: 'select',
    options: {
      values: ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G'],
      display: ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G'],
    },
  },
  {
    label: 'Chauffage',
    id: 'chauffage',
    type: 'select',
    options: {
      values: ['', 'collectif', 'indiv-elec', 'indiv-gaz'],
      display: ['', 'Collectif', 'Individuel Elec', 'Individuel Gaz'],
    },
  },
  {
    label: 'Construction',
    id: 'construction',
    type: 'input',
    inputType: 'number',
  },
];
