const guideList=document.querySelectorAll('.guide_list>li');
guideList.forEach(elem=>{
  elem.addEventListener('click',(e)=>{
    e.currentTarget.querySelector('.guide_info').classList.toggle('active');
  });
});
