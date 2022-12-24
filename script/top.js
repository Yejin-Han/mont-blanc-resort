const pageLocation=document.querySelector('.page_location');
const pageLocation_li=pageLocation.querySelectorAll('li');
const pageLocationSub=pageLocation.querySelectorAll('.sub');
pageLocationSub.forEach(elem=>{
  elem.style.bottom=`${pageLocation_li[0].clientHeight}px`;
});