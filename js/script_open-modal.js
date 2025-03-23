document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('contactModal');
  const openBtns = document.querySelectorAll('.open-modal');
  const closeBtn = document.querySelector('.close-modal');

  // Відкриття модального вікна
  openBtns.forEach(button => {
    button.addEventListener('click', function () {
      modal.style.display = 'flex';
      setTimeout(() => {
        modal.classList.add('show'); // Додаємо анімацію після короткої затримки
      }, 10);
    });
  });

  // Закриття модального вікна
  closeBtn.addEventListener('click', function () {
    modal.classList.remove('show');
    setTimeout(() => {
      modal.style.display = 'none';
    }, 500); // Час має відповідати transition у CSS
  });

  // Закриття при кліку поза модальним вікном
  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.classList.remove('show');
      setTimeout(() => {
        modal.style.display = 'none';
      }, 500);
    }
  });
  form.addEventListener('submit', function (event) {
    if (!form.checkValidity()) {
      event.preventDefault(); // Блокує надсилання, якщо є помилки
    }
  });
});
