const options={
	root: null,
	rootMargin: '0px',
	threshold: 1.0,
}
let observer=new IntersectionObserver((entries)=>{
	entries.forEach(entry=>{
		if(entry.isIntersecting){
			entry.target.classList.add('active');
		}/*  else{
			entry.target.classList.remove('active');
		} */
	});
},options);
const intro=document.querySelector('#intro');
const strengths=document.querySelectorAll('#strength>div');
observer.observe(intro);
strengths.forEach(el=>observer.observe(el));