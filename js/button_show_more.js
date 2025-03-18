document.addEventListener('DOMContentLoaded', function () {
  // Збираємо всі кнопки "Read More"
  const readMoreButtons = document.querySelectorAll('.actions-section__readmore-toggle');

  // Додаємо обробник події для кожної кнопки
  readMoreButtons.forEach(button => {
    button.addEventListener('click', function (event) {
      event.preventDefault(); // Запобігаємо стандартній поведінці (перехід по лінку)

      const readmoreContainer = button.previousElementSibling; // Отримуємо контейнер, який містить текст
      const isExpanded = readmoreContainer.classList.contains('expanded'); // Перевіряємо, чи відкрито

      // Якщо блок вже розгорнутий, згортаємо його
      if (isExpanded) {
        readmoreContainer.classList.remove('expanded');
        readmoreContainer.style.maxHeight = '20px'; // Встановлюємо максимальну висоту для згорнутого стану
        button.textContent = 'Read More'; // Оновлюємо текст на кнопці
      } else {
        readmoreContainer.classList.add('expanded');
        readmoreContainer.style.maxHeight = 'none'; // Встановлюємо висоту на 'none' для розгорнутого стану
        button.textContent = 'Close'; // Оновлюємо текст на кнопці
      }
    });
  });
});
