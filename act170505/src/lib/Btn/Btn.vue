<template>
	<div class="Btn"
	:class=" pressed?'pressed':'' "
	:style=" style "
	@touchstart="touchstart"
	@touchmove="touchmove"
	@touchend="touchend"
	@touchcancel="touchcancel">
		{{text}}
	</div>
</template>

<style lang="less" scoped>
	.Btn {
		width: 5.18rem; height: 0.86rem;
		margin: auto; margin-bottom: 0.24rem;
		border-radius: 0.25rem;
		border: 0.04rem solid black;
		background: #ffb115;
		font-size: 0.36rem; line-height: 0.86rem;
		text-align: center; font-weight: bold;
		color: #443594;
		background: #ffb115;
		&.pressed {
			background: #eb9800;
		}
	}
</style>

<script type="text/javascript">
	export default {
		props: {
			money: {},
			text: {},
			act: {},
			cb: {},
			style: {
				default: ''
			}
		},
		data: function(){
			return {
				pressed: false
			}
		},
		methods: {
			touchstart: function(){
				this.pressed = true;
			},
			touchmove: function(){
				this.pressed = false;
			},
			touchend: function(){
				if( this.pressed ){
					this.act({
						type: this.cb,
						money: this.money||0
					})
				};
				this.pressed = false;
			},
			touchcancel: function(){
				this.pressed = false;
			}
		}
	}
</script>