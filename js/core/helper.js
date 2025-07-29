export function formatNumber(num) {
  return new Intl.NumberFormat('fr-FR').format(num);
}

export function setOutput(id, value, round = false) {
  const el = document.querySelector(id);
  if (el) {
    if (isNaN(value) || value === undefined || value === null) {
      el.textContent = '';
    } else {
      el.textContent = formatNumber(round ? Math.round(value) : value);
    }
  }
}
