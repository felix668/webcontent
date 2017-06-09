$(function(){
	$('#btn').on('tap',function(){
		forceLog(param("act_f"),"KBtoQQReader"+env.pt);
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
				N.openPage(front() + "act160903/" + env.pt
						+ "/index.html");
			}else{
				showmask();
			}
			if(installStat==-1){
				sharetips();
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

	//adr安卓平台

	if(env.pt=="adr"){
		foradr();
	}
	function foradr(){
		$("#ticket").attr("src","images/gift3.png");
		$("#txt").text("200书券");
	}
	// 显示分享提示
	function sharetips() {
		$("#sharemask").show();
	}
	forceLog(param("act_f"),"KBshareInit"+env.pt);
});
