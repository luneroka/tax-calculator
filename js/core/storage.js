// Restore values from localStorage on page load
export function restoreInputs(ids) {
  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      const saved = localStorage.getItem(id);
      if (saved !== null) {
        el.value = saved;
      }
      el.addEventListener('input', () => {
        localStorage.setItem(id, el.value);
        if (typeof window.updateCalculations === 'function')
          window.updateCalculations();
        if (typeof window.updateReelCalculations === 'function')
          window.updateReelCalculations();
      });
    }
  });
}

export function restoreDynamicInputs(rows) {
  rows.forEach((row) => {
    const el = document.getElementById(row.id);
    if (el && localStorage.getItem(row.id) !== null) {
      el.value = localStorage.getItem(row.id);
    }
    // Save to localStorage on change
    if (el) {
      el.addEventListener('input', () => {
        localStorage.setItem(row.id, el.value);
      });
    }
  });
}
