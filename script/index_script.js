const mainVisual=document.querySelector('#main_visual');
const qBtns=document.querySelector('#q_btns');
const qBtns_li=qBtns.querySelectorAll('li');

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
  speed: 1000,
  spaceBetween: 0,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});
const firstSwiper=document.querySelector('.swiper1');
const bullet=firstSwiper.querySelectorAll('.swiper-pagination-bullet');
bullet.forEach(elem=>{
  const span=document.createElement('span');
  elem.appendChild(span);
});

//info_wrap

//q_btns appear animation
document.addEventListener('scroll',()=>{
  let scrollTopNum=document.documentElement.scrollTop;
  let qBtnsHeight=qBtns.clientHeight;
  let mainVisualHeight=mainVisual.clientHeight;
  let tarTop=(window.innerHeight-qBtnsHeight)/2;
  let Top=mainVisualHeight-tarTop;
  console.log(scrollTopNum,Top);
	if(scrollTopNum>=Top){
    qBtns_li.forEach(elem=>{
      elem.classList.add('appear');
    });
  }
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