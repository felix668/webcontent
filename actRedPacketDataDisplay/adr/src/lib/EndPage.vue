<template>
	<div class="EndPage"
	:class=" class_ "
	@touchstart="touchstart($event)"
	@touchend="touchend($event)"
	@touchcancel="touchend($event)">
		111
	</div>
</template>

<style lang="less" scoped>
	.EndPage {
		position: relative;
		//position: absolute; left: 0; top: 0;
		width: 100%; height: 100vh;
		background: orange;
		z-index: 199;
		//transition: transform 1s;
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
			// stage: function(nv,ov){
			// 	if( ov===1&&nv===2 ){
			// 		this.class_ = 'enter';
			// 	}
			// }
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
				if( distance>3 ){
					this.act({
						type: 'SWITCH',
						direction: 'down'
					});
				}
			}
		}
	}
</script>