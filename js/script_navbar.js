document.addEventListener('DOMContentLoaded', function () {
  const dropdownButton = document.querySelector('.dropdown__button');
  const dropdownMenu = document.querySelector('.dropdown');

  dropdownButton.addEventListener('click', function () {
    dropdownMenu.classList.toggle('active');
  });

  // Закриття меню при кліку поза ним
  document.addEventListener('click', function (event) {
    if (!dropdownMenu.contains(event.target) && !dropdownButton.contains(event.target)) {
      dropdownMenu.classList.remove('active');
    }
  });
});
