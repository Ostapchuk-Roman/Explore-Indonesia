document.addEventListener('DOMContentLoaded', function () {
  // Вибірка всіх елементів з анімацією
  const animatedElements = document.querySelectorAll(
    '.animation-opacity-scale, .animation-movement-right, .animation-movement-left, .animation-opacity',
  );

  // Ініціалізація Intersection Observer
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    },
    { threshold: 0.1 },
  );

  // Спостереження за кожним елементом
  animatedElements.forEach(el => observer.observe(el));
});
