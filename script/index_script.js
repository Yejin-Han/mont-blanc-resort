//main_visual swiper
const swiper1 = new Swiper('.swiper1', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  speed: 400,
  spaceBetween: 0,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});
//promotion swiper
const swiper2 = new Swiper('.swiper2', {
  loop: true,
  /* pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'fraction',
  }, */
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  spaceBetween: 20,
  slidesPerView: "auto",
  slidesPerGroup: 1,
  breakpoints: {
      768: {
        spaceBetween: 20,
        slidesPerView: 2,
      },
      1024: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
  }
});