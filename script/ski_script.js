/* const checkWrap=document.querySelector('.checkbox_wrap'); */
const checkbox=document.getElementsByName('map');
const mapWrap=document.querySelector('.map_wrap');
const imgList=mapWrap.querySelectorAll('img');

console.log(imgList.lastChild);
const selectAll=(all)=>{
  checkbox.forEach(elem=>{
    elem.checked=all.checked;
    imgList.forEach(img=>{
      img.style.display='block';
    });
    if(!all.checked){
      for(let i=0; i<imgList.length-1; i++){
        imgList[i].style.display='none';
      }
    }
  });
}
checkbox[0].addEventListener('click',(e)=>{
  selectAll(e.currentTarget);
});
for(let i=1; i<checkbox.length; i++){
  checkbox[i].addEventListener('click',()=>{
    if(checkbox[i].checked==true){
      imgList[i-1].style.display='block';
    } else{
      imgList[i-1].style.display='none';
    }
  });
}
