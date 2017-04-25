<template>
	<div class="MaskInfo"
	@touchmove="touchmove($event)"
	v-show="mask.show">
		<div class="content_666">
			<div class="content_667">
				<img class="close" :src=" img+'/close.png' "
				v-show=" mask.text!=='朕知道了' "
				@click="HIDE_MASK"/>
				<div class="useless"></div>
				<p class="line1">{{mask.line1}}</p>
				<p class="line2">{{mask.line2}}</p>
				<Btn :style=" 'width:3.92rem;margin-bottom:0.34rem;color:black;' "
				:money="mask.money"
				:text="mask.text"
				:act="act"
				:cb="mask.cb"></Btn>
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
	.MaskInfo {
		display: table;
		position: fixed; left: 0; top: 0;
		width: 100%; height: 100%;
		background: rgba(0,0,0,0.5);
		z-index: 9999;
		.content_666 {
			display: table-cell;
			vertical-align: middle;
			position: relative;
			width: 100%; height: 100%;
			.content_667 {
				position: relative;
				box-sizing: border-box;
				width: 5.9rem;
				border-radius: 0.22rem;
				border: 0.04rem solid black;
				margin: auto;
				background: white;
				.close {
					position: absolute; right: 0.12rem; top: 0.12rem;
					width: 0.54rem; height: 0.54rem;
				}
				.line1 {
					margin-top: 0.66rem;
					margin-bottom: 0.16rem;
					font-size: 0.36rem; font-weight: bold;
					text-align: center;
				}
				.line2 {
					height: 1.1rem; 
					padding: 0 0.2rem;
					font-size: 0.28rem;
					text-align: center;
					color: #666666;
				}
			}
		}
	}
</style>

<script>
export default {
	components: {
		Btn: require('./Btn.vue')
	},
	props: ['act','mask','img'],
	data: function(){
		return {
		}
	},
	methods: {
		HIDE_MASK: function(){
			this.act({
				type: 'HIDE_MASK'
			})
		},
		touchmove: function(e){
			e.preventDefault();
		}
	}
}
</script>
