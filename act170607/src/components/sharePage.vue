<template>
	<div class="main">
		<banner :type="hideUpvote"></banner>
		<book-intro :type="hideUpvote"></book-intro>
		<order-book v-if="!hideUpvote" :orderinfo="main"></order-book>
		<read-book v-if="hideUpvote"></read-book>
		<lottery :mdata="lotterydata"></lottery>
		<video-box></video-box>	
		<rule :sharep="sharepage"></rule>
		<app-load v-if="loadmask"></app-load>
		<mask-wb v-if="wb"></mask-wb>
	</div>
</template>
<script>
	import maskWb from "./weibo.vue";
	import appLoad from "./appload.vue";
	export default{
		props:["main"],
		data (){
			return{
				lotterydata:{
					"gift":"src/images/gift.png",
					"arrow":"src/images/arrow.png",
					"start":"src/images/start.png"
				},
				hideUpvote:this.main.hideUpvote,
				loadmask:false,
				wb:false,
				sharepage:document.body.dataset.page ? true : false
			}
		},
		components:{
			banner:require("./banner.vue"),
			bookIntro:require("./bookIntro.vue"),
			orderBook:require("./orderBook.vue"),
			readBook:require("./readBook.vue"),
			lottery:require("./lottery.vue"),
			videoBox:require("./videoBox.vue"),
			rule:require("./rule.vue"),
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
	 				forceLog(param("act_f"),`LYFdload-wb-${env.pt}`);	
	 				return;
	 			}
	 			//走判断流程
				S.open((installStat,plat)=>{
					if(installStat == -2){						
						N.openPage(pageurl("act170607/index.html?act_f=170607"));			
						this.showmask();
					}else if(installStat){		
						N.openPage(pageurl("act170607/index.html?act_f=170607"));	
						if(env.vw == "wx" && env.pt == "ios") {
							setTimeout(()=>{
								this.showmask();
							},2000);
							setTimeout(()=>{
								this.loadmask=false;
							}, 5000)
						}   	
					}else{			
						this.showmask();
					}
				})	
				forceLog(param("act_f"),`LYFdload-${env.vw}-${env.pt}`);					
 			},
 			showmask(){
				this.loadmask = true;
	 		}
		}
	}
	window.initSNS = function(){
		var shareobj={
			cover :front()+ "act170607/src/images/cover.png",
			url : window.location.href,
			title:"李易峰新书集赞",
			desc:"李易峰新书等你集赞，豪礼抢不停"
		};
		S.share(shareobj);
	}
</script>
