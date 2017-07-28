<template>
	<div id="mask_bd">
		<div :class="{big: this.info.isBig,mask: true}">
			<div class="fail" v-if="info.noGift">
				<template v-if="info.isGuest">
					<p class="content">
						iOS游客登录用户不能参与活动支持QQ登录或者微信登录参与活动哦
					</p>
				</template>	
				<template v-else>
					<h4 class="title">无抽奖机会</h4>
					<p class="content">您可以看书和分享活动获得抽奖机会如果您已经完成以上任务,期待下次精彩活动吧</p>
				</template>
				<p class="btn" @click="$parent.hidemask">我知道了</p>
			</div>

			<div class="succ" v-else>
				<img class="icon" :src="'src/images/'+this.iconName"></img>
				<div class="close" @click="$parent.hidemask" 
				v-if="this.info.gift=='sg'"></div>
				<p class='content' v-html='this.info.content'></p>
				<p class="btn" v-if="this.info.gift=='sg'" @click="writeAddress">填写联系方式</p>
				<p class="btn" v-else @click="$parent.hidemask">我知道了</p>
			</div>
		</div>
	</div>
	
</template>
<style scoped lang="scss">
div.big{
	height: 4.15rem;
	background-image: url('../images/alert-bbg.png');
	background-repeat: no-repeat;
}
#mask_bd{
	position: fixed;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	background: rgba(0,0,0,.8);
	z-index:100;
}
.mask{
	position:fixed;
	top:50%;
	left:50%;
	transform: translate(-50%,-50%);
	z-index: 999;
	width: 5.2rem;
	height: 3.8rem;
	background-image: url('../images/alert-bg.png');
	background-repeat: no-repeat;
	background-size: 100%;	
	padding: .4rem .3rem .23rem;
	box-sizing: border-box;
	text-align: center;
	.fail{
		height: 100%;
		.title{
			color: #333333;
			font-size: .32rem;
			font-weight: normal;
			margin: 0;
		}
		.content{
			font-size: .28rem;
			line-height: .48rem;
			position: absolute;
			top: .95rem;
			width: 4.6rem;
			color: #898989;
		}
	}
	.btn{
			background: url('../images/alert-btn.png') no-repeat;
			background-size: 100%;	
			width: 4.32rem;
			height: .77rem;
			position: absolute;
			bottom: .23rem;
			font-size: .32rem;
			font-weight: bold;
			line-height: .73rem;
			color: #d5d3d1;
			text-align: center;
	}
	.succ{
		.icon{
			width: 2.85rem;
			height: 1.66rem;
			background-size: 100%;
			margin: -1rem auto 0;
		}
		.close{
			// background-image: url('../images/close.png');
			background-size: 100%;
			width: 2.85rem;
			position: absolute;
			width: .31rem;
			height: .31rem;
			right: .2rem;
			top: .2rem;
		}
		.content{
			margin-top: .75rem;
			font-size: .28rem;
			line-height: .48rem;
			color: #898989;
		}
	}
}

</style>
<script>
	export default {
		props:["info"],
		data(){
			return{
				
			}
		},
		computed:{
			iconName(){
				let gift = this.info.gift
				if (gift == "sg") {
					return 'liwu.png'
				}else if(gift == "sq"){
					return 'shuquan.png'
				}else if(gift == "ccz"){
					return 'chengzhangzhi.png'
				}else{
					return 'liwu.png'
				}
			}


		},
	 	methods:{
	 		writeAddress(){
				if (this.pt == "ios") {
	 				window.location.href = "https://ptsolomo.reader.qq.com/book_res/event/act160903/ios/contact.html"
	 			}else{
	 				window.location.href = "http://solomotest4.3g.qq.com/book_res/event/act160903/adr/contact.html"
	 			}
			}
	 	}
	}
</script>