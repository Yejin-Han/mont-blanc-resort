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
    crossFade: true,
  },
  observer: true,
  observeParents: true,
});
const firstSwiper=document.querySelector('.swiper1');
const bullet=firstSwiper.querySelectorAll('.swiper-pagination-bullet');
bullet.forEach(elem=>{
  const span=document.createElement('span');
  elem.appendChild(span);
});

//info_wrap notice_wrap
const noticeWrap=document.querySelector('.notice_wrap');
const noticeList=noticeWrap.querySelectorAll('p');
/* const noticeTitle=noticeWrap.querySelector('a');
const noticeDate=noticeWrap.querySelector('span'); */
//fade가 적용이 안된다...
let noticeIndex=0;
noticeList[noticeIndex].style.display='flex';
noticeList[noticeIndex+1].style.display='none';
const noticeSlide=()=>{
  noticeList[noticeIndex].style.opacity='0';
  noticeList[noticeIndex].style.display='none';
  noticeIndex++;
  noticeIndex=noticeIndex%(noticeList.length);
  noticeList[noticeIndex].style.display='flex';
  noticeList[noticeIndex].style.opacity='1';
}
setInterval(noticeSlide,5000);

//q_btns appear animation
document.addEventListener('scroll',()=>{
  let scrollTopNum=document.documentElement.scrollTop;
  let qBtnsHeight=qBtns.clientHeight;
  /* let qBtnsTop=qBtns.getBoundingClientRect().top; */
  let mainVisualHeight=mainVisual.clientHeight;
  let tarTop=(window.innerHeight-qBtnsHeight)/2;
  let Top=mainVisualHeight-tarTop;
  if(scrollTopNum>=Top){ //새로고침 될 때마다 한번씩만 실행
    qBtns_li.forEach(elem=>{
      elem.classList.add('appear');
    });
  }
	/* qBtns_li.forEach(elem=>{ //섹션이 화면에서 벗어나면 초기화, 여러번 실행 but 좀 이상함..
    if(scrollTopNum>=Top && scrollTopNum<=Top+200){
      elem.classList.add('appear');
    } else if(qBtnsTop>=0 && qBtnsTop<=window.innerHeight){
      elem.classList.remove('appear');
    }
  });*/
});

//promotion data extract
const promo=document.querySelector('#promotion');
const txt_area=promo.querySelector('p');
const secondSwiper=document.querySelector('.swiper2');
const slideList=secondSwiper.querySelectorAll('.swiper-slide');
const secondSwiperTxt=secondSwiper.querySelectorAll('p');
let pageNum=document.querySelector('.curr');
let txt_list=new Array();
for(let value of secondSwiperTxt){
  txt_list.push(value.innerHTML);
}
for(let i=0; i<txt_list.length; i++){
  secondSwiperTxt.innerHTML=txt_list[i];
}

//promotion swiper
const swiper2 = new Swiper('.swiper2', {
  loop: true,
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
  },
  on: {
    slideChange: function(e){
      for(let i=0; i<slideList.length; i++){
        if(this.realIndex==i){
          txt_area.innerHTML=txt_list[i];
          pageNum.innerHTML=`${i+1}`;
        }
      }
    },
  },
  observer: true,
  observeParents: true,
});