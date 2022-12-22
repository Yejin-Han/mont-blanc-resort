const header=document.querySelector('#main_header');
const gnb=document.querySelector('#gnb');
const gnb_ul=gnb.querySelector('.innerbox>ul');
const gnb_li=gnb_ul.querySelectorAll('li');
const gnb_sub=gnb.querySelectorAll('.sub');
const gnb_sub_bg=gnb.querySelector('.sub_bg');
const gnb_weather=gnb.querySelector('.weather_wrap');
const tnb=document.querySelector('#tnb');
const toggle=header.querySelector('.toggle');

// header style change
const headerChange=()=>{ header.classList.add('on'); }
const headerOrigin=()=>{ header.classList.remove('on'); }
header.addEventListener('mouseenter',()=>{
	headerChange();
});
header.addEventListener('mouseleave',()=>{
	if(window.scrollY<=0) headerOrigin();
});

// desktop gnb pull down
gnb_ul.addEventListener('mouseenter',()=>{
	if(window.matchMedia('screen and (min-width: 1025px)').matches){
		gnb_sub.forEach((elem)=>{
			elem.classList.add('active');
		});
		gnb_weather.classList.add('active');
		gnb_sub_bg.classList.add('active');
	}
});
gnb_ul.addEventListener('mouseleave',()=>{
	if(window.matchMedia('screen and (min-width: 1025px)').matches){
		gnb_sub.forEach((sub)=>{
			sub.classList.remove('active');
		});
		gnb_weather.classList.remove('active');
		gnb_sub_bg.classList.remove('active');
	}
});

// scroll -> header/gnb fix
window.addEventListener('scroll',()=>{
	if(window.matchMedia('screen and (min-width: 1025px)').matches){
		if(window.scrollY>0){
			headerChange();
			gnb.style.transition='none';
		} else {
			headerOrigin();
		}
		if(window.pageYOffset>=`${header.offsetHeight-gnb.clientHeight}`){
			gnb.classList.add('fix');
		} else{
			gnb.classList.remove('fix');
		}
	} else if(window.matchMedia("screen and (max-width: 1024px)").matches){
		if(window.pageYOffset>0){
			headerChange();
			header.classList.add('fix');
		} else{
			headerOrigin();
			header.classList.remove('fix');
		}
	}
});

//tablet,mobile menu toggle click, gnb& tnb animation
toggle.addEventListener('click',()=>{
	if(matchMedia("screen and (max-width: 1024px)").matches){
		gnb.style.transition='all 0.4s';
		tnb.style.transition='all 0.4s';
		toggle.classList.toggle('on');
		if(toggle.classList.contains('on')){
			gnb.style.left=`${0}%`;
			tnb.style.left=`${0}%`;
		} else{
			gnb.style.left=`${100}%`;
			tnb.style.left=`${100}%`;
		}
	}
});

//tablet,mobile accordion menu
gnb_li.forEach((li)=>{
	 li.addEventListener('click',(e)=>{
		if(matchMedia("screen and (max-width: 1024px)").matches){
			e.preventDefault();
			let sub=e.currentTarget.querySelector('.sub');
			sub.classList.toggle('active');
			if(sub.style.maxHeight){
				sub.style.maxHeight=null;
			} else{
				sub.style.maxHeight=`${sub.scrollHeight}px`;
			}
		}
	 });
});

//resize
window.addEventListener('resize',()=>{
	if(window.matchMedia('screen and (min-width: 1025px)').matches){
		header.classList.remove('fix');
		gnb.style.transition='all 0.4s';
		tnb.style.transition='none';
		gnb.style.left=`${50}%`;
		tnb.style.left='auto';
		tnb.style.right=`${20}px`;
	} else if(matchMedia("screen and (max-width: 1024px)").matches){
		gnb.classList.remove('fix');
		gnb.style.transition='none';
		tnb.style.transition='none';
		gnb.style.left=`${100}%`;
		tnb.style.left=`${100}%`;
		tnb.style.right='auto';
		toggle.classList.remove('on');
	}
});