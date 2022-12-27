const h4=document.querySelectorAll('.text_wrap>h4');
const p=document.querySelectorAll('.text_wrap>p');

if(matchMedia('screen and (max-width: 768px)').matches){
  h4.forEach(elem=>{
    elem.setAttribute('data-aos','fade-up');
  });
  p.forEach(elem=>{
    elem.setAttribute('data-aos','fade-up');
  });
}
  