<template>
	<div id="mask_bd">
		<div class="mask" v-if="info.time != undefined">
			<span class="close" @click="this.$parent.hidemask"></span>
			<p class="title">阅读时长换换换</p>
			<p class="desc">每阅读60分钟，可兑换50积分</p>
			<div class="content">
				<p class="time"><span class="num">{{info.time}}</span>分钟</p>
				<p class="integral">
					<template v-if="info.convert != '未登录'">
						<span class="num">{{info.convert}}</span>积分
					</template>
					<template v-else>
						未登录
					</template>
				</p>
			</div>
			<div class="button" @click="convert" v-if="info.convert == '未登录'">{{info.btn}}</div>
			<div class="button" @click="convert" v-if="info.btn.indexOf('兑换') == 0">{{info.btn}}</div>
			<div class="button nochance" v-if="info.btn.indexOf('还需要') == 0">{{info.btn}}</div>
		</div>
		<div class="mask smllMask" v-else>
			<span class="close" @click="this.$parent.hidemask"></span>
			<p class="title">成功兑换{{info.score}}积分</p>
			<div class="button" @click="this.$parent.chest"></div>
		</div>
	</div>
	
</template>
<script>
	export default {
		props:["info"],
		data(){
			return{
			}
		},
		created(){
		},
	 	methods:{
	 		convert(){
	 			if(this.info.convert == "未登录"){
	 				Local.login()
	 			}else{
	 				this.$parent.hidemask()
	 				Local.reqaObj(common.server()+'pkg170704/getscore',data=>{
	 					console.log(data)
	 					if (data.code == 0) {
	 						this.$parent.initPage()
		 					setTimeout(_=>{
				 				this.$parent.info = {
				 					score: data.scores,
				 					btn: '去开宝箱 >>'
				 				}
			 					this.$parent.showAlert = true
			 				},1000)
	 					}
	 					
	 				})
 				}
	 		}
	 	}
	}
</script>
<style scoped lang="scss">
#mask_bd{
	position: fixed;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	background: rgba(0,0,0,.8);
	z-index:10000;
}
.mask{
	position:fixed;
	top:50%;
	left:50%;
	-webkit-transform: translate(-50%,-50%);
	z-index: 999;
	width: 5.2rem;
	height: 4.81rem;
	background: url('../images/alert-bg.png') no-repeat;
	background-size: 100% 100%;
	box-sizing: border-box;
	text-align: center;
	.title{
		color: #333;
		font-size: .32rem;
		margin-top: .85rem;
		margin-bottom: .02rem;
	}
	.desc{
		font-size: .24rem;
		color: #e39063;
		line-height: .36rem;
	}
	.content{
		width: 4.4rem;
		height: 1.4rem;
		background:  url('../images/content-bg.png') no-repeat;
		background-size: 100% auto;
		margin: .32rem auto;
		p{
			margin-top: .7rem;
			.num{
				font-size: .36rem;
				color: #333;
				font-weight: bold;
			}
		}
		.time{
			width: 2.4rem;
			float: left;
		}
		.integral{
			width: 1.86rem;
			float: right;
		}

	}
	.button{
		width: 4.4rem;
		height: .82rem;
		background:  url('../images/alert-btn.png') no-repeat;
		background-size: 100% auto;
		margin: .28rem auto 0;
		line-height: .82rem;
		color: #fff;
		font-size: .32rem;
	}
	.nochance{
		background-image: url('../images/alert-failbtn.png');
	}
}
.close{
	width: .26rem;
	height: .26rem;
	position: absolute;
	top: .44rem;
	right: .26rem;
	background: url('../images/close.png') no-repeat;
	background-size: 100% 100%;
}
.smllMask{
	height: 3.21rem;
	background: url('../images/alert-sbg.png') no-repeat;
	background-size: 100% 100%;
	.title{
		margin-top: 1.1rem;
	}
	.button{
		background-image: url('../images/alert-openbtn.png');
		background-repeat: no-repeat;
		background-size: 100% auto;
		margin-top: .4rem;
	}
	
}

</style>
