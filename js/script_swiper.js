const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 32,
  loop: true,
  centeredSlides: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      centeredSlides: true,
    },
    768: {
      slidesPerView: 2,
      centeredSlides: false,
    },

    1280: {
      slidesPerView: 2,
      centeredSlides: false,
    },

    1970: {
      slidesPerView: 3,
      centeredSlides: true,
    },
  },
  pagination: {
    el: '.secrets-section__swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.secrets-section__button-next',
    prevEl: '.secrets-section__button-prev',
  },
});
