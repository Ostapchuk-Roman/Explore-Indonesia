document.addEventListener('DOMContentLoaded', function () {
  const containers = document.querySelectorAll('.readmore-container');
  const toggleButton = document.querySelector('.readmore-toggle');

  containers.forEach(container => {
    toggleButton.addEventListener('click', event => {
      event.preventDefault(); // Запобігаємо стандартному переходу по лінку

      const isExpanded = container.classList.contains('expanded');

      if (isExpanded) {
        container.classList.remove('expanded');
        container.style.maxHeight = '200px'; // Згортаємо до max-height
        toggleButton.textContent = 'Read More';
      } else {
        container.classList.add('expanded');
        container.style.maxHeight = 'none'; // Розгортаємо до повної висоти
        toggleButton.textContent = 'Close';
      }
    });
  });
});
