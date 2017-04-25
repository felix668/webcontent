<template>
	<div class="block">
		<img class="panel" :src="panelSrc"/>
		<div class="btn"
		@touchstart="touchstart"
		@touchmove="touch"
		@touchend="touchend"
		@touchcancel="touch">
			<img class="btnImg" :src="pressed===false?btnSrc:btnActiveSrc"/>
			<div class="content">
				<img v-if="banner==='hot'" class="banner-hot" :src="bannerHot"/>
				<img v-if="banner==='super'" class="banner-super" :src="bannerSuper"/>
				充值{{money}}元领取
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
.block {
	position: relative;
	margin-bottom: 0.28rem;
	.panel {
		width: 6.08rem;
		margin: auto;
	}
	.btn {
		position: absolute; left: 1.47rem; top: 1.16rem; 
		width: 4.26rem;
		.btnImg {
			width: 100%;
		}
		.content {
			position: absolute; left: 0; top: 0;
			width: 100%; height: 100%;
			font-size: 0.34rem; color: #4f4f4f; font-weight: bold; line-height: 0.94rem;
			text-align: center;
			img {
				position: absolute; left: 0.04rem; top: 0.04rem; 
				width: 0.77rem;
			}
		}
	}
}
</style>

<script>
module.exports = {
	props: ['money','coins','banner'],
	data: function(){
		return {
			base: {
				10: {
					coins: 1000
				},
				20: {
					coins: 2000
				},
				500: {
					coins: 50000
				},
				50: {
					coins: 5000
				},
				100: {
					coins: 10000
				},
				200: {
					coins: 20000
				}
			},

			btnSrc: 'img/btn.png',
			btnActiveSrc: 'img/btn-active.png',
			bannerHot: 'img/hot.png',
			bannerSuper: 'img/super.png',
			pressed: false
		}
	},
	computed: {
		panelSrc: function(){
			return 'img/panel-'+this.money+'.png';
		}
	},
	methods: {
		touchstart: function(){
			this.pressed = true;
		},
		touch: function(){
			this.pressed = false;
		},
		touchend: function(){
			if( this.pressed ){
				// 用户点击了按钮：
				// 如果用户未登录：
				if( this.$parent.loggedIn===false ){
					Local.forceLog( common.param('act_f'),'login'+this.money );
				// 如果用户已登录：
				}else{
					Local.forceLog( common.param('act_f'),'cz'+this.money );
				}
				if( !this.$parent.ios ){
					Local.doCharge( 'act',this.$parent.loggedIn,this.coins );
				}else{
					// if( this.$parent.loggedIn===false ){
					// 	Local.login();
					// }else{
						Local.openrecharge();
					// }
				}
			};
			this.pressed = false;
		}
	}
}
</script>