const header=document.querySelector('#main_header');
const gnb=document.querySelector('#gnb');
const gnb_ul=gnb.querySelector('.innerbox>ul');
const gnb_li=gnb_ul.querySelectorAll('li');
const gnb_li_a=document.querySelectorAll('#gnb>.innerbox>ul>li>a');
const gnb_sub=gnb.querySelectorAll('.sub');
const gnb_sub_bg=gnb.querySelector('.sub_bg');
const gnb_weather=gnb.querySelector('.weather_wrap');
const info_weather=document.querySelector('.info_wrap>.weather_wrap');
const gnb_descr=gnb_weather.querySelector('.weather');
const info_descr=info_weather.querySelector('.weather');
const gnb_icon=gnb_weather.querySelector('i');
const info_icon=info_weather.querySelector('i');
const gnb_deg=gnb_weather.querySelector('.degree');
const info_deg=info_weather.querySelector('.degree');
const tnb=document.querySelector('#tnb');
const toggle=header.querySelector('.toggle');
const familySite=document.querySelector('.select_wrap>button');

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
		gnb_sub.forEach((sub)=>{
			sub.classList.add('active');
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
gnb_li.forEach(li=>{
	li.addEventListener('click',(e)=>{
		if(matchMedia("screen and (max-width: 1024px)").matches){
			e.preventDefault();
			const clicked_li=e.currentTarget;
			if(clicked_li.querySelector('.sub').classList.contains('active')){
				clicked_li.querySelector('a').classList.remove('active');
				clicked_li.querySelector('.sub').classList.remove('active');
			} else{
				const nodes=[...clicked_li.parentElement.children];
				nodes.forEach(elem=>{
					elem.querySelector('a').classList.remove('active');
					elem.querySelector('.sub').classList.remove('active');
				});
				clicked_li.querySelector('a').classList.add('active');
				clicked_li.querySelector('.sub').classList.add('active');
			}
		}
	});
});

//gotoback button
/* const back=document.querySelector('.back');
back.onclick=()=>{
	history.back(); //history.go(-1);
} */

//resize
window.addEventListener('resize',()=>{
	if(window.matchMedia('screen and (min-width: 1025px)').matches){
		header.classList.remove('fix');
		gnb.style.transition='all 0.4s';
		tnb.style.transition='none';
		gnb.style.left=`${50}%`;
		tnb.style.left='auto';
		tnb.style.right=`${20}px`;
		gnb_sub.forEach(elem=>{
			elem.classList.remove('active');
		})
	} else if(matchMedia("screen and (max-width: 1024px)").matches){
		gnb.classList.remove('fix');
		gnb.style.transition='none';
		tnb.style.transition='none';
		gnb.style.left=`${100}%`;
		tnb.style.left=`${100}%`;
		tnb.style.right='auto';
		toggle.classList.remove('on');
		gnb_li_a.forEach(elem=>{
			elem.classList.remove('active');
		})
		gnb_sub.forEach(elem=>{
			elem.classList.remove('active');
		})
	}
});

//family_site click animation
familySite.querySelector('span').style.transition='none';
familySite.addEventListener('click',(e)=>{
	e.currentTarget.querySelector('span').style.transition='all 0.4s';
	e.currentTarget.querySelector('span').classList.toggle('active');
	e.currentTarget.nextElementSibling.querySelector('ul').classList.toggle('active');
});

//weather api
var today = new Date();
var week = new Array('일','월','화','수','목','금','토');
var year = today.getFullYear();
var month = today.getMonth()+1;
var day = today.getDate();
var hours = today.getHours();
var minutes = today.getMinutes();

/* 기상청 30분마다 발표 -> 30분보다 작으면, 한시간 전 hours 값 */
if(minutes < 30){
	hours = hours - 1;
	if(hours < 0){
		// 자정 이전은 전날로 계산
		today.setDate(today.getDate() - 1);
		day = today.getDate();
		month = today.getMonth()+1;
		year = today.getFullYear();
		hours = 23;
	}
}
/* 9시 -> 09시 변경 필요 */
if(hours < 10) { hours = '0' + hours; }
if(month < 10) { month = '0' + month; }    
if(day < 10) { day = '0' + day; }

today = year + "" + month + "" + day;

/* 좌표 */
const _nx = 123, 
_ny = 84,
WEATHER_API = config.apikey;
let WEATHER_URL = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst";
WEATHER_URL += "?ServiceKey=" + WEATHER_API;
WEATHER_URL += "&pageNo=1&numOfRows=1000";
WEATHER_URL += "&dataType=json";
WEATHER_URL += "&base_date=" + today;
WEATHER_URL += "&base_time=" + hours +"00";
WEATHER_URL += "&nx=" + _nx + "&ny=" + _ny;

fetch(WEATHER_URL)
	.then(res => res.json())
	.then(data => {
		const rData = data.response.body.items.item;
		console.log(rData);
		let tempArr = [];
		let rainArr = [];
		let skyArr = [];
		/*rData을 순회하는 코드로 작성해야 category에 접근할 수 있을 것 같음 */
		rData.forEach(elem=>{
			if(elem.category == 'T1H'){
				tempArr.push(elem.fcstValue);
				gnb_deg.innerText = `${tempArr[0]}°C`;
				info_deg.innerText = `${tempArr[0]}°C`;
			} else if(elem.category == 'PTY'){
				rainArr.push(elem.fcstValue);
			} else if(elem.category == 'SKY'){
				skyArr.push(elem.fcstValue);
			}
		});
		console.log(rainArr);
		console.log(skyArr);
		if(rainArr[0] == '0'){
			switch(skyArr[0]){
				case '1':
					gnb_descr.innerText="맑음";
					info_descr.innerText="맑음";
					gnb_icon.classList.add('fa-solid', 'fa-sun');
					info_icon.classList.add('fa-solid', 'fa-sun');
					break;
				case '3':
				case '4':
					gnb_descr.innerText="흐림";
					info_descr.innerText="흐림";
					gnb_icon.classList.add('fa-solid', 'fa-cloud');
					info_icon.classList.add('fa-solid', 'fa-cloud');
					break;
			}
		} else{
			switch(rainArr[0]){
				case '1':
				case '5':
					gnb_descr.innerText="비";
					info_descr.innerText="비";
					gnb_icon.classList.add('fa-solid', 'fa-umbrella');
					info_icon.classList.add('fa-solid', 'fa-umbrella');
					break;
				case '2':
				case '6':
					gnb_descr.innerText="눈/비";
					info_descr.innerText="눈/비";
					gnb_icon.classList.add('fa-solid', 'fa-cloud-rain');
					info_icon.classList.add('fa-solid', 'fa-cloud-rain');
					break;
				case '3':
				case '7':
					gnb_descr.innerText="눈";
					info_descr.innerText="눈";
					gnb_icon.classList.add('fa-regular', 'fa-snowflake');
					info_icon.classList.add('fa-regular', 'fa-snowflake');
					break;
			}
		}
	})
	.catch(err => console.log(err));