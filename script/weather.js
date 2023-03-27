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

const weatherFetch = (deg, descr, icon) => {
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
				deg.innerText = `${tempArr[0]}°C`;
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
					descr.innerText="맑음";
					icon.classList.add('fa-solid', 'fa-sun');
					break;
				case '3':
				case '4':
					descr.innerText="흐림";
					icon.classList.add('fa-solid', 'fa-cloud');
					break;
			}
		} else{
			switch(rainArr[0]){
				case '1':
				case '5':
					descr.innerText="비";
					icon.classList.add('fa-solid', 'fa-umbrella');
					break;
				case '2':
				case '6':
					descr.innerText="눈/비";
					icon.classList.add('fa-solid', 'fa-cloud-rain');
					break;
				case '3':
				case '7':
					descr.innerText="눈";
					icon.classList.add('fa-regular', 'fa-snowflake');
					break;
			}
		}
	})
	.catch(err => console.log(err));
}