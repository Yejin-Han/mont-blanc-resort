const dining=document.querySelector('#dining_list');
const tabItem=dining.querySelectorAll('.tab_box>li');
const _tabInner=dining.querySelector('.restaurant');
let tabInner=dining.querySelector('.restaurant_wrap');
let rIndex=0;
let rMenu=new Array(); let rPrice= new Array();
const popup=document.querySelector('#popup');
const close=popup.querySelector('#close_btn');
const infoTable=document.querySelector('.info-table');
//처음 기본
for(let i=0; i<list[0].length; i++){
  tabInner.appendChild(_tabInner.cloneNode(true));
  let rTitle=tabInner.querySelectorAll('h4');
  let rMain=tabInner.querySelectorAll('.main');
  let rImg=tabInner.querySelectorAll('img');
  let rTime=tabInner.querySelectorAll('.time');
  let rPlace=tabInner.querySelectorAll('.place');
  rTitle[i].innerHTML=list[0][i].name;
  rMain[i].innerHTML=list[0][i].main;
  rImg[i].src=`../img/sub/${list[0][i].img}.jpg`;
  rTime[i].innerHTML=list[0][i].time;
  rPlace[i].innerHTML=list[0][i].place;
  rMenu[i]=list[0][i].menu;
  rPrice[i]=list[0][i].price;
  const more_btns=dining.querySelectorAll('.more_btn');
  for(let k=0; k<more_btns.length; k++){
    more_btns[k].addEventListener('click',function(e){
      e.preventDefault();
      popup.classList.add('active');
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
    });/* Math.floor(rMenu[k-1].length/6) */
  }
}
close.addEventListener('click',()=>{
  popup.classList.remove('active');
});
tabItem.forEach((tab,idx)=>{
  tab.addEventListener('click',(e)=>{
    e.preventDefault();
    const nodes=[...e.currentTarget.parentElement.children];
    rIndex=nodes.indexOf(e.currentTarget);
    nodes.forEach(elem=>{
      elem.classList.remove('on');
      tabInner.textContent='';
    });
    switch(rIndex){
      case 0:
        for(let i=0; i<list[0].length; i++){
          tabInner.appendChild(_tabInner.cloneNode(true));
          let rTitle=tabInner.querySelectorAll('h4');
          let rMain=tabInner.querySelectorAll('.main');
          let rImg=tabInner.querySelectorAll('img');
          let rTime=tabInner.querySelectorAll('.time');
          let rPlace=tabInner.querySelectorAll('.place');
          rTitle[i].innerHTML=list[0][i].name;
          rMain[i].innerHTML=list[0][i].main;
          rImg[i].src=`../img/sub/${list[0][i].img}.jpg`;
          rTime[i].innerHTML=list[0][i].time;
          rPlace[i].innerHTML=list[0][i].place;
          rMenu[i]=list[0][i].menu;
          rPrice[i]=list[0][i].price;
          const more_btns=dining.querySelectorAll('.more_btn');
          for(let k=0; k<more_btns.length; k++){
            more_btns[k].addEventListener('click',function(e){
              e.preventDefault();
              popup.classList.add('active');
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
        break;
      case 1:
        for(let i=0; i<list[1].length; i++){
          tabInner.appendChild(_tabInner.cloneNode(true));
          let rTitle=tabInner.querySelectorAll('h4');
          let rMain=tabInner.querySelectorAll('.main');
          let rImg=tabInner.querySelectorAll('img');
          let rTime=tabInner.querySelectorAll('.time');
          let rPlace=tabInner.querySelectorAll('.place');
          rTitle[i].innerHTML=list[1][i].name;
          rMain[i].innerHTML=list[1][i].main;
          rImg[i].src=`../img/sub/${list[1][i].img}.jpg`;
          rTime[i].innerHTML=list[1][i].time;
          rPlace[i].innerHTML=list[1][i].place;
          rMenu[i]=list[1][i].menu;
          rPrice[i]=list[1][i].price;
          const more_btns=dining.querySelectorAll('.more_btn');
          for(let k=0; k<more_btns.length; k++){
            more_btns[k].addEventListener('click',function(e){
              e.preventDefault();
              popup.classList.add('active');
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
        break;
      case 2:
        for(let i=0; i<list[2].length; i++){
          tabInner.appendChild(_tabInner.cloneNode(true));
          let rTitle=tabInner.querySelectorAll('h4');
          let rMain=tabInner.querySelectorAll('.main');
          let rImg=tabInner.querySelectorAll('img');
          let rTime=tabInner.querySelectorAll('.time');
          let rPlace=tabInner.querySelectorAll('.place');
          rTitle[i].innerHTML=list[2][i].name;
          rMain[i].innerHTML=list[2][i].main;
          rImg[i].src=`../img/sub/${list[2][i].img}.jpg`;
          rTime[i].innerHTML=list[2][i].time;
          rPlace[i].innerHTML=list[2][i].place;
          rMenu[i]=list[2][i].menu;
          rPrice[i]=list[2][i].price;
          const more_btns=dining.querySelectorAll('.more_btn');
          for(let k=0; k<more_btns.length; k++){
            more_btns[k].addEventListener('click',function(e){
              e.preventDefault();
              popup.classList.add('active');
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
        break;
      case 3:
        for(let i=0; i<list[3].length; i++){
          tabInner.appendChild(_tabInner.cloneNode(true));
          let rTitle=tabInner.querySelectorAll('h4');
          let rMain=tabInner.querySelectorAll('.main');
          let rImg=tabInner.querySelectorAll('img');
          let rTime=tabInner.querySelectorAll('.time');
          let rPlace=tabInner.querySelectorAll('.place');
          rTitle[i].innerHTML=list[3][i].name;
          rMain[i].innerHTML=list[3][i].main;
          rImg[i].src=`../img/sub/${list[3][i].img}.jpg`;
          rTime[i].innerHTML=list[3][i].time;
          rPlace[i].innerHTML=list[3][i].place;
          rMenu[i]=list[3][i].menu;
          rPrice[i]=list[3][i].price;
          tabInner.querySelectorAll('.more_btn').forEach(elem=>{
            elem.style.display='none';
          });
        }
        break;
      default:
        for(let i=0; i<list[4].length; i++){
          tabInner.appendChild(_tabInner.cloneNode(true));
          let rTitle=tabInner.querySelectorAll('h4');
          let rMain=tabInner.querySelectorAll('.main');
          let rImg=tabInner.querySelectorAll('img');
          let rTime=tabInner.querySelectorAll('.time');
          let rPlace=tabInner.querySelectorAll('.place');
          rTitle[i].innerHTML=list[4][i].name;
          rMain[i].innerHTML=list[4][i].main;
          rImg[i].src=`../img/sub/${list[4][i].img}.jpg`;
          rTime[i].innerHTML=list[4][i].time;
          rPlace[i].innerHTML=list[4][i].place;
          rMenu[i]=list[4][i].menu;
          rPrice[i]=list[4][i].price;
          const more_btns=dining.querySelectorAll('.more_btn');
          for(let k=0; k<more_btns.length; k++){
            more_btns[k].addEventListener('click',function(e){
              e.preventDefault();
              popup.classList.add('active');
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
    if(!(tabItem[idx].classList.contains=='on')){
      tabItem[idx].classList.add('on');
    } else{
      tabItem[idx].classList.remove('on');
    }
  });
});
