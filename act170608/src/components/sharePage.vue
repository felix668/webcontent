<template>
	<div class="main">
		<banner></banner>
		<!-- <video-box :vobj="media1"></video-box>	 -->
		<book-intro></book-intro>
		<read-book></read-book>
		<lottery :mdata="lotterydata"></lottery>
		<video-box :vobj="media2"></video-box>	
		<rule :sharep="sharepage"></rule>
		<app-load v-if="loadmask"></app-load>
		<mask-wb v-if="wb"></mask-wb>
	</div>
</template>
<script>
	import maskWb from "./weibo";
	import appLoad from "./appload";
	export default{
		data (){
			return{
				lotterydata:{
					"gift":"src/images/gift.png",
					"arrow":"src/images/arrow.png",
					"start":"src/images/start.png"
				},
				loadmask:false,
				wb:false,
				sharepage:document.body.dataset.page ? true : false,
				media1:{"name":"video1","src":"src/media/v.mp4",poster:"src/images/poster1.jpg",title:"峰峰和他的《1987了》"},
				media2:{"name":"video2","src":"src/media/v.mp4",poster:"src/images/poster2.jpg",title:"峰峰心路历程专访，蜜蜂们准备好了吗"}
			}
		},
		components:{
			banner:require("./banner"),
			bookIntro:require("./bookIntro"),
			readBook:require("./readBook"),
			lottery:require("./lottery"),
			videoBox:require("./videoBox"),
			rule:require("./rule"),
			appLoad,
			maskWb
		},
		methods:{
			showover(){
				this.$parent.over=true;
			},
			isHasApp(){
	 			if(env.vw=="wb"){
	 				this.wb=true;
	 				forceLog(param("act_f"),"LYFdload-wb");
	 				return;
	 			}
	 			//走判断流程
				S.open((installStat,plat)=>{
					if(installStat == -2){//浏览器						
						N.openPage(pageurl("act170608/index.html?act_f=170608"));			
						this.showmask();
					}else if(installStat){//已安装			
						N.openPage(pageurl("act170608/index.html?act_f=170608"));
						if(env.vw == "wx" && env.pt == "ios") {
							setTimeout(()=>{
								this.loadmask=true;
							},2000);
							setTimeout(()=>{
								this.loadmask = false;
							}, 5000)
						}   	
					}else{			
						this.showmask();
					}
				});
				forceLog(param("act_f"),"LYFdload-"+env.vw);					
 			},
 			showmask(){
				this.loadmask=true;
	 		}
		}
	}
	window.initSNS = function(){
		var shareobj={
			cover :`${front()}act170608/src/images/cover.png`,
			url : window.location.href,
			title:"李易峰新书集赞",
			desc:"李易峰新书等你集赞，豪礼抢不停"
		};
		S.share(shareobj);
	}
</script>
