const scroll=()=>{
  let items; let winH;
  const init=()=>{
    items=document.querySelectorAll('.s');
    winH=window.innerHeight; 
    _addEventHandlers();
  }
  const _addEventHandlers=()=>{
    window.addEventListener('scroll',_checkPosition);
    window.addEventListener('load',_checkPosition);
    window.addEventListener('resize',init);
  }
  const _checkPosition=()=>{
    items.forEach(elem=>{
      let posFromTop=elem.getBoundingClientRect().top;
      if(winH>posFromTop+100){
        elem.classList.add('active');
      }
    });
  }
  return{
    init: init
  }
}

scroll().init();