$(function(){
	$('#btn').on('tap',function(){
		openapp();
	})
	$('.cancle').on('touchend',function(e){
		e.preventDefault();
		hidemask();
	})
	$('.certain').on('touchend',function(e){
		e.preventDefault();
		hidemask();
		N.downLoad(null, '10023705');
	})
	//唤起app
	function openapp(){
		S.open(function(installStat,plat){
			if(installStat){
				N.openPage("http://iyuedu.qq.com/event/act160903/"+env.pt+"/index.html?act_f=160906&openId=111111");
			}else{
				showmask();
			}
		})
	}
	//显示下载弹窗
	function showmask(){
		setTimeout(function(){
			$(".mask").addClass("show");
		},2000);
	}
	//隐藏弹窗
	function hidemask() {
		//setTimeout(function(){
			$(".mask").removeClass("show");
		//},400)
	}
});
