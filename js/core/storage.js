// Restore values from localStorage on page load
export function restoreInputs(ids) {
  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      const saved = localStorage.getItem(id);
      if (saved !== null) {
        if (el.tagName === 'SELECT') {
          el.value = saved;
        } else {
          el.value = saved;
        }
      }
      el.addEventListener('input', () => {
        localStorage.setItem(id, el.value);
      });
    }
  });
}
