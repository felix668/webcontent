<template>
	<div id="mask_bd">
		<div class="mask">
			<div class="fail" v-if="info.noGift">
				<template v-if="info.isGuest">
					<p class="content guest">
						iOS游客登录用户不能参与活动支持QQ登录或者微信登录参与活动哦
					</p>
				</template>	
				<template v-else>
					<h4 class="title">无抽奖机会</h4>
					<p class="content">完成任务可获得抽奖机会，如果您已经抽过奖，让我们期待下次活动吧</p>
				</template>
				<p class="btn" @click="$parent.hidemask"></p>
			</div>

			<div class="succ" v-else>
				<img class="icon" :src="'src/images/'+this.iconName"></img>
				<div class="close" @click="$parent.hidemask" v-if="hasClose"></div>
				<h4 class="title gift">恭喜您</h4>
				<p class='content' v-html='this.info.content'></p>
				<p class="btn writeAddress" v-if="hasClose" @click="writeAddress"></p>
				<p class="btn" v-else @click="$parent.hidemask"></p>
			</div>
		</div>
	</div>
	
</template>
<style scoped lang="scss">
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
	-webkit-transform: translate(-50%,-50%);
	z-index: 999;
	width: 5.2rem;
	background: url('../images/alert-bbg.png') no-repeat;
	background-size: 100% 100%;
	padding: .48rem .32rem .3rem;
	box-sizing: border-box;
	text-align: center;
	.fail{
		height: 100%;
		position: relative;
		.content{
			font-size: .28rem;
			line-height: .48rem;
			color: #898989;
			margin-top: .2rem;
		}
		.guest{
			top: .6rem;
		}
	}
	.title{
		color: #333333;
		font-size: .32rem;
		font-weight: normal;
		margin: 0;
	}
	.gift{
		margin-top: .2rem;	
	}
	.btn{
		background: url('../images/iknow.png') no-repeat;
		background-size: 100%;	
		width: 4.68rem;
		height: .76rem;
		color: #fff;
		margin: .46rem auto 0;
	}
	.writeAddress{
		background: url('../images/writeAddress.png') no-repeat;
		background-size: 100%;	
	}
	.succ{
		position: relative;
		.icon{
			width: 1.44rem;
			background-size: 100%;
			margin: -1.1rem auto 0;
		}
		.close{
			background-image: url('../images/close.png');
			background-size: 100%;
			position: absolute;
			width: .31rem;
			height: .31rem;
			right: 0rem;
			top: .9rem;
		}
		.content{
			margin-top: .15rem;
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
				return gift+'.png'
			},
			hasClose(){
				let gift = this.info.gift
				if (gift != "czz") {
					return true
				}else{
					return false
				}
			}
		},
	 	methods:{
	 		writeAddress(){
				if (window.pt == 'adr') {
					Local.openInside('http://iyuedu.qq.com/event/act161002/adr/contact.html')
 				} else {
					Local.openInside('https://yuedu.reader.qq.com/event/act161002/ios/contact.html')
				}
			}
	 	}
	}
</script>