new WOW().init();
new WOW().init();



var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    '@0.75': {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    '@1.00': {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    '@1.50': {
      slidesPerView: 4,
      spaceBetween: 00,
    },
  }
});