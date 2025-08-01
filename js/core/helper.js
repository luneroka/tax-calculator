export function formatNumber(num) {
  return new Intl.NumberFormat('fr-FR').format(num);
}

export function setOutput(id, value, round = false) {
  const el = document.querySelector(id);
  if (el) {
    if (
      isNaN(value) ||
      value === undefined ||
      value === null ||
      value === 0 ||
      value === ''
    ) {
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

export function resetBtn(name, ids) {
  const btn = document.getElementById(`reset-${name}`);
  btn.addEventListener('click', () => {
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        el.value = '';
        localStorage.removeItem(id);
      }
    });
    updateCalculations();
    updateReelCalculations();
  });
}

export function toggleElement(elementName) {
  const toggleBtn = document.getElementById(`toggle-${elementName}`);
  const toggleElement = document.getElementById(`${elementName}-container`);
  toggleBtn.addEventListener('click', () => {
    if (
      toggleElement.style.display === 'none' ||
      toggleElement.style.display === ''
    ) {
      toggleElement.style.display = 'block';
    } else {
      toggleElement.style.display = 'none';
    }
  });
}

export function renderRows(rows) {
  return rows
    .map((row) => {
      let inputHtml = '';
      if (row.type === 'select') {
        inputHtml =
          `<select id="${row.id}">` +
          row.options.values
            .map(
              (val, i) =>
                `<option value="${val}">${row.options.display[i]}</option>`
            )
            .join('') +
          `</select>`;
      } else if (row.type === 'input') {
        inputHtml = `<input type="${row.inputType}" id="${row.id}" value="" />`;
      } else if (row.type === 'td' && row.strong) {
        inputHtml = `<span class="strong" id="${row.id}"></span>`;
      } else if (row.type === 'td' && !row.strong) {
        inputHtml = `<span id="${row.id}"></span>`;
      }
      return `
      <tr>
        ${row.reel ? `<td class="ligne">${row.ligne}</td>` : ''}
        <td class="row-type">${
          row.strong
            ? '<span class="strong">' + row.label + '</span>'
            : row.label
        }</td>
        <td class="row-value">${inputHtml}</td>
        <td class="unit">${row.unit || ''}</td>
      </tr>
      `;
    })
    .join('');
}

export function renderSection(sectionName, rows) {
  const elTBody = document.getElementById(`${sectionName}-tbody`);
  if (elTBody) {
    elTBody.innerHTML = renderRows(rows);
  }
}
