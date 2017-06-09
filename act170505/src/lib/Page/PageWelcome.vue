<template>
	<div class="Welcome"
	:class=" class_ "
	:style=" 'background:url('+img+'/bg_0.png);background-size:100% auto;' "
	@touchstart="touchstart($event)"
	@touchmove="touchmove($event)"
	@touchend="touchend($event)"
	@touchcancel="touchend($event)">

		<p class="to_rules"
		@click="act({type:'SHOW',what:'mask_rules'})">活动规则</p>
		
		<img class="banner" :src=" img+'/banner_'+id+(hasDiscount?'_discount':'')+'.png' "/>
		
		<div class="to_login" v-show="!loggedIn&&id!==2"
		@click="act({type:'TO_LOGIN'})"
		:style=" 'background:url('+img+'/btn.png);background-size:100% 100%;' ">
			登录{{hasDiscount?'享折扣':'免费读'}}
		</div>
		<img class="to_login_to" :src=" img+'/btn_2.png' "
		@click="act({type:'TO_LOGIN'})"
		v-show="!loggedIn&&id===2"/>
		<img class="to_login_to" :src=" img+'/btn_to_take.png' "
		@click="act({type:'TAKE'})"
		v-show="loggedIn&&id===2&&black===false&&taken===false"/>
		<img class="to_login_to" :src=" img+'/btn_taken.png' "
		v-show="loggedIn&&id===2&&black===false&&taken===true"/>

		<img class="circled_arrow" :src=" img+'/circled_arrow.png' "
		v-show=" !(!loggedIn||(!hasDiscount&&black)) "
		@click="act({type:'SWITCH',direction:'up'})"/>
	</div>
</template>

<style lang="less" scoped>
	.Welcome {
		position: absolute; left: 0; top: 0;
		width: 100%; height: 100%;
		background: #fff6e1;
		z-index: 210;
		transition: transform 400ms;
		//display: none;
		&.leave {
			transform: translate3d(0,-150%,0);
		}
		.to_rules {
			position: absolute; right: 0.8rem; top: 0.28rem;
			font-size: 0.24rem;
			color: #805447;
		}
		.banner {
			position: absolute; left: 0.95rem; top: 5.12rem;
			width: 5.59rem; height: 1.47rem;
		}
		.to_login {
			position: absolute; left: 1.8rem; top: 7.45rem;
			width: 3.95rem; height: 0.92rem;
			font-size: 0.36rem;
			line-height: 0.86rem;
			text-align: center;
			color: #fff6e1;
		}
		.to_login_to {
			position: absolute; left: 1.48rem; top: 7.45rem;
			width: 4.56rem;
			margin: auto;
		}
		.circled_arrow {
			position: absolute; left: 3.4rem; bottom: 0.33rem;
			width: 0.71rem;
			animation: arrow 1s infinite;
		}
		@keyframes arrow {
			0% {
				//transform: translate3d(0,0,0);
			}
			100% {
				transform: translate3d(0,-30%,0);
			}
		}
	}
</style>

<script type="text/javascript">
	export default {
		props: {
			id: {},
			taken: {},
			hasDiscount: {},
			discount: {},
			black: {},
			img: {},
			act: {},

			replay: {},
			loggedIn: {},
			stage: {}
		},
		data: function(){
			return {
				class_: '',

				Y0: 0,
				Y2: 0
			}
		},
		watch: {
			stage: function(nv,ov){
				if( ov===0&&nv===1 ){
					this.class_ = 'leave';
				}else if( ov===1&&nv===0 ){
					this.class_ = '';
				}
			}
		},
		mounted: function(){
			//this.act({type:'STAGE',i:1})
		},
		methods: {
			touchstart: function(e){
				e.stopPropagation();
				this.Y0 = e.changedTouches[0].pageY;
			},
			touchmove: function(e){
				e.stopPropagation();
				e.preventDefault();
			},
			touchend: function(e){
				e.stopPropagation();
				this.Y2 = e.changedTouches[0].pageY;
				var distance = this.Y2-this.Y0;
				if( distance<-3 ){
					this.act({
						type: 'SWITCH',
						direction: 'up'
					});
				}
			}
		}
	}
</script>