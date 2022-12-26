const dining=document.querySelector('#dining_list');
const tabItem=dining.querySelectorAll('.tab_box>li');
const tabInner=dining.querySelectorAll('.restaurant');
const rTitle=dining.querySelectorAll('h4');
const rMenu=dining.querySelectorAll('.menu');
const rImg=dining.querySelectorAll('img');
const rTime=dining.querySelectorAll('.time');
const rPlace=dining.querySelectorAll('.place');
let rIndex=0;
let listIndex=0;

/* const loadData=(num1,num2)=>{
  rTitle[num2].innerHTML=`list${num1}`[num2].name;
  rMenu[num2].innerHTML=('list'+num1)[num2].menu;
  rImg[num2].src=`../img/sub/${('list'+num1)[num2+1].img}.jpg`;
  rTime[num2].innerHTML=('list'+num1)[num2].time;
  rPlace[num2].innerHTML=('list'+num1)[num2].place;
} */
/* window.addEventListener('load',()=>{
  loadData(rIndex,listIndex);
}); */

// list$를 불러오는 방법을 모르겠음 벡틱 쓸라그래도 list와 $를 나누는 순간 없는걸로 나옴...ㅠ
tabItem.forEach((tab,idx)=>{
  tab.addEventListener('click',(e)=>{
    e.preventDefault();
    const nodes=[...e.currentTarget.parentElement.children];
    rIndex=nodes.indexOf(e.currentTarget);
    nodes.forEach(elem=>{
      elem.classList.remove('on');
    });
    switch(rIndex){
      case 0:
        for(let i=0; i<list1.length; i++){
          rTitle[i].innerHTML=list1[i].name;
          rMenu[i].innerHTML=list1[i].menu;
          rImg[i].src=`../img/sub/${list1[i].img}.jpg`;
          rTime[i].innerHTML=list1[i].time;
          rPlace[i].innerHTML=list1[i].place;
        }
        break;
      case 1:
        for(let i=0; i<list2.length; i++){
          rTitle[i].innerHTML=list2[i].name;
          rMenu[i].innerHTML=list2[i].menu;
          rImg[i].src=`../img/sub/${list2[i].img}.jpg`;
          rTime[i].innerHTML=list2[i].time;
          rPlace[i].innerHTML=list2[i].place;
        }
        break;
      case 2:
        for(let i=0; i<list3.length; i++){
          rTitle[i].innerHTML=list3[i].name;
          rMenu[i].innerHTML=list3[i].menu;
          rImg[i].src=`../img/sub/${list3[i].img}.jpg`;
          rTime[i].innerHTML=list3[i].time;
          rPlace[i].innerHTML=list3[i].place;
        }
        break;
      case 3:
        for(let i=0; i<list4.length; i++){
          rTitle[i].innerHTML=list4[i].name;
          rMenu[i].innerHTML=list4[i].menu;
          rImg[i].src=`../img/sub/${list4[i].img}.jpg`;
          rTime[i].innerHTML=list4[i].time;
          rPlace[i].innerHTML=list4[i].place;
        }
        break;
      default:
        for(let i=0; i<list1.length; i++){
          rTitle[i].innerHTML=list5[i].name;
          rMenu[i].innerHTML=list5[i].menu;
          rImg[i].src=`../img/sub/${list5[i].img}.jpg`;
          rTime[i].innerHTML=list5[i].time;
          rPlace[i].innerHTML=list5[i].place;
        }
    }
    if(!(tabItem[idx].classList.contains=='on')){
      tabItem[idx].classList.add('on');
      tabInner[idx].querySelector('h4');
      tabInner[idx].querySelector('.menu');
      tabInner[idx].querySelector('h4');
    } else{
      tabItem[idx].classList.remove('on');
    }
  });
});