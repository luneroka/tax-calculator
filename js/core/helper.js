export function formatNumber(num) {
  return new Intl.NumberFormat('fr-FR').format(num);
}
