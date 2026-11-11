(() => {
  const dialog = document.getElementById('lightbox');
  const image = document.getElementById('lightbox-image');
  const label = document.getElementById('lightbox-title');
  const external = document.getElementById('lightbox-open');
  const close = document.getElementById('lightbox-close');
  document.querySelectorAll('[data-zoom]').forEach(button => {
    button.addEventListener('click', () => {
      const source = button.getAttribute('data-zoom');
      image.src = source;
      image.alt = button.getAttribute('data-title') || 'Скриншот Vacancy Evaluator';
      label.textContent = image.alt;
      external.href = source;
      dialog.showModal();
    });
  });
  close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', () => { image.removeAttribute('src'); });
})();
