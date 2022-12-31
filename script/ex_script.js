const dining=document.querySelector('#dining_list');
const tabItem=dining.querySelectorAll('.tab_box>li');
const _tabInner=dining.querySelector('.restaurant');
let tabInner=dining.querySelector('.restaurant_wrap');
let rIndex=0;
let rMenu=new Array(); let rPrice= new Array();
const popup=document.querySelector('#popup');
const close=popup.querySelector('#close_btn');
const infoTable=document.querySelector('.info-table');
const popupTitle=document.querySelector('.title_wrapper>h5');
const tabFunc=(listNum)=>{
  for(let i=0; i<list[listNum].length; i++){
    tabInner.appendChild(_tabInner.cloneNode(true));
    let rTitle=tabInner.querySelectorAll('h4');
    let rMain=tabInner.querySelectorAll('.main');
    let rImg=tabInner.querySelectorAll('img');
    let rTime=tabInner.querySelectorAll('.time');
    let rPlace=tabInner.querySelectorAll('.place');
    rTitle[i].innerHTML=list[listNum][i].name;  
    rMain[i].innerHTML=list[listNum][i].main;
    rImg[i].src=`../img/sub/${list[listNum][i].img}.jpg`;
    rTime[i].innerHTML=list[listNum][i].time;
    rPlace[i].innerHTML=list[listNum][i].place;
    rMenu[i]=list[listNum][i].menu;
    rPrice[i]=list[listNum][i].price;
    const more_btns=dining.querySelectorAll('.more_btn');
    for(let k=0; k<more_btns.length; k++){
      more_btns[k].addEventListener('click',function(e){
        e.preventDefault();
        popupTitle.innerHTML=list[listNum][k-1].name;
        popup.classList.add('active');
        document.querySelector('body').classList.add('active');
        infoTable.textContent='';
        let dfrag=document.createDocumentFragment();
        for(let j=0; j<rMenu[k-1].length; j++){
          let div1=document.createElement('div');
          let div2=document.createElement('div');
          div1.innerHTML=rMenu[k-1][j];
          div2.innerHTML=rPrice[k-1][j];
          dfrag.appendChild(div1);
          dfrag.appendChild(div2);
        }
        infoTable.appendChild(dfrag);
      });
    }
  }
}
//처음 기본
tabFunc(0);
tabItem.forEach((tab,idx)=>{
  tab.addEventListener('click',(e)=>{
    e.preventDefault();
    const nodes=[...e.currentTarget.parentElement.children];
    rIndex=nodes.indexOf(e.currentTarget);
    nodes.forEach(elem=>{
      elem.classList.remove('on');
      tabInner.textContent='';
      tabFunc(rIndex);
      if(rIndex==3){
        tabInner.querySelectorAll('.more_btn').forEach(elem=>{
          elem.style.display='none';
        });
      }
    });
    if(!(tabItem[idx].classList.contains=='on')){
      tabItem[idx].classList.add('on');
    } else{
      tabItem[idx].classList.remove('on');
    }
  });
});
close.addEventListener('click',()=>{
  popup.classList.remove('active');
  document.querySelector('body').classList.remove('active');
});