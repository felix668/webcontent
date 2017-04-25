<template>
	<div class="Welcome"
	:class=" class_ "
	@touchstart="touchstart($event)"
	@touchend="touchend($event)"
	@touchcancel="touchend($event)">
		<div class="to_login" v-show="!loggedIn"
		@click="act({type:'TO_LOGIN'})">
			登录
		</div>
		<div class=""
		@click="act({type:'TO_PAGE',i:1})">跳转</div>
	</div>
</template>

<style lang="less" scoped>
	.Welcome {
		position: absolute; left: 0; top: 0;
		width: 100%; height: 100%;
		background: orange;
		z-index: 210;
		transition: transform 1s;
		&.leave {
			transform: translate3d(0,-150%,0);
		}
		.to_login {
			font-size: 0.3rem;
		}
	}
</style>

<script type="text/javascript">
	export default {
		props: {
			act: {},

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