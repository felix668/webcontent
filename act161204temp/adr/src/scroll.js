var fixshow=(area,btn)=>{
	var obj=$("#"+btn);
	if(obj){
		obj.hide();
		const wh=$(window).height();
		let btnpos=parseFloat(obj.css("height"))+parseFloat(obj.css("bottom"));
		window.onscroll=()=>{
			let etop=$("#"+area).offset().top;
			let stop=$('body').scrollTop()+wh-btnpos;
			
			if(stop>etop){
				$("#"+btn).show();
			}else{
				$("#"+btn).hide();
			}
		}
	}	
}
module.exports=fixshow;