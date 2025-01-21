document.getElementById('searchBtn').addEventListener('click', function () {
  const query = document.getElementById('searchInput').value.toLowerCase();

  if (query) {
    // Можна обробити запит до сервера або фільтрувати контент на сторінці
    alert(`Пошук за запитом: ${query}`);
    // Додати тут код для пошуку по ключовим словам
  }
});
