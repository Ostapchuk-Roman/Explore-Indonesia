document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('contactModal');
  const openBtn = document.querySelector('.open-modal');
  const closeBtn = document.querySelector('.close-modal');

  // Відкриття модального вікна
  openBtn.addEventListener('click', function () {
    modal.style.display = 'flex';
  });

  // Закриття по хрестику
  closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  // Закриття при кліку поза формою
  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});
