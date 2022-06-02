var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  centeredSlides: true,
  grabCursor: true,
  spaceBetween: 32,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    clickable: true,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
  },
});
