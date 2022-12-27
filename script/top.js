const pageLocation=document.querySelector('.page_location');
const pageLocation_li=pageLocation.querySelectorAll('li');
const pageLocationSub=pageLocation.querySelectorAll('.sub');
pageLocationSub.forEach(elem=>{
  elem.style.bottom=`${pageLocation_li[0].clientHeight-2}px`;
});
pageLocation_li.forEach(elem=>{
  elem.addEventListener('mouseenter',function(){
    this.querySelector('a').classList.add('active');
  });
  elem.addEventListener('mouseleave',function(){
    this.querySelector('a').classList.remove('active');
  });
});