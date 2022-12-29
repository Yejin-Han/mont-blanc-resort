let choice='all';
fetch("../data/notice_list.json")
	.then((response)=>response.json())
	.then((notice_list)=>{
		let num=notice_list.noticeList.length;
		for(let i=0; i<notice_list.noticeList.length; i++){
			document.querySelector('tbody').innerHTML+='<tr>'+'<td>'+num+'</td>'+'<td>'+notice_list.noticeList[i].category+'</td>'+'<td class="tal"><a href="#">'+notice_list.noticeList[i].title+'</a></td>'+'<td>'+notice_list.noticeList[i].date+'</td>'+'</tr>';
			num--;
		}
		const tabList=document.querySelectorAll('.mini_tab>li>a');
		tabList.forEach(elem=>{
			elem.addEventListener('click',function(e){
				e.preventDefault();
				document.querySelector('tbody').textContent='';
				choice=this.getAttribute('data-value');
				for(let i=0; i<notice_list.noticeList.length; i++){
					if(choice=='all'){
						num=notice_list.noticeList.length;
						document.querySelector('tbody').innerHTML+='<tr>'+'<td>'+num+'</td>'+'<td>'+notice_list.noticeList[i].category+'</td>'+'<td class="tal"><a href="#">'+notice_list.noticeList[i].title+'</a></td>'+'<td>'+notice_list.noticeList[i].date+'</td>'+'</tr>';
						num--;
					} else{
						if(notice_list.noticeList[i].category==choice){
							num=notice_list.noticeList.length;
							document.querySelector('tbody').innerHTML+='<tr>'+'<td>'+num+'</td>'+'<td>'+notice_list.noticeList[i].category+'</td>'+'<td class="tal"><a href="#">'+notice_list.noticeList[i].title+'</a></td>'+'<td>'+notice_list.noticeList[i].date+'</td>'+'</tr>';
							num--;
						}
					}
				}
			});
		});
		const contents=document.querySelectorAll('tbody>tr>td>a');
		const popup=document.querySelector('.popup');
		const popup_area=popup.querySelector('.content_area');
		const close=popup.querySelector('.close_btn');
		contents.forEach(elem=>{
			elem.addEventListener('click',function(e){
				e.preventDefault();
				popup_area.innerHTML=notice_list.noticeList[this.parentNode.parentNode.rowIndex-1].content;
				popup.classList.add('active');
			});
		});
		close.addEventListener('click',()=>{
			popup.classList.remove('active');
		});
	})
	.catch((error)=>console.log(error));