<template>
	<div class="main">
		<banner></banner>
		<!-- <video-box :vobj="media2"></video-box>	 -->
		<book-intro></book-intro>
		<read-book></read-book>
		<lottery :mdata="lotterydata"></lottery>
		<video-box :vobj="media1"></video-box>	
		<rule :sharep="sharepage"></rule>
	</div>
</template>
<style lang="sass">

</style>
<script>
	import {rewards} from "../js/rewards";
	export default{
		props:["main"],
		data (){
			return{
				lotterydata:{
					"islogin":this.main.isLogin,
					"hasPick":this.main.hasPick,
					"version":this.main.after651,
					"gift":"src/images/gift.png",
					"arrow":"src/images/arrow.png",
					"start":"src/images/start.png",
					"rewards":rewards
				},
				sharepage:document.body.dataset.page ? true : false,
				media1:{"name":"video1","src":"src/media/v.mp4",poster:"src/images/poster1.jpg",title:"峰峰和他的《1987了》"},
				media2:{"name":"video2","src":"src/media/v.mp4",poster:"src/images/poster2.jpg",title:"峰峰心路历程专访，蜜蜂们准备好了吗"}
			}
		},
		mounted(){
			console.log(this.lotterydata)
		},
		components:{
			banner:require("./banner"),
			bookIntro:require("./bookIntro"),
			readBook:require("./readBook"),
			lottery:require("./lottery"),
			videoBox:require("./videoBox"),
			rule:require("./rule")
		},
		methods:{
			showover(){
				this.$parent.over=true;
			}
		}
	}
</script>
