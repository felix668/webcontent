<template>
	<div class="main">
		<banner :type="hideUpvote"></banner>
		<book-intro :type="hideUpvote"></book-intro>
		<order-book v-if="!hideUpvote" :orderinfo="main" @iosyk="showYK"></order-book>
		<read-book v-if="hideUpvote"></read-book>
		<lottery :mdata="lotterydata"></lottery>
		<video-box></video-box>	
		<rule :shareplat="sharepage"></rule>
		<tourist v-if="iosyk"></tourist>
	</div>
</template>
<style lang="sass">

</style>
<script>
	import {rewards} from "../js/rewards";
	export default{
		props:["main"],
		data(){
			return{
				lotterydata:{
					"islogin":this.main.isLogin,
					"hasPick":this.main.hasPick,
					"version":!this.main.after651,
					"gift":"src/images/gift.png",
					"arrow":"src/images/arrow.png",
					"start":"src/images/start.png",
					"rewards":rewards
				},
				hideUpvote:this.main.hideUpvote,
				iosyk:false,
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
			tourist:require("./tourist.vue")
		},
		methods:{
			showover(){
				this.$parent.over=true;
			},
			showYK(msg){
				this.iosyk=msg;
			}
		}
	}
</script>
