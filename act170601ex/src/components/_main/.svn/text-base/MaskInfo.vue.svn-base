<template>
<transition name="slide-up">
	<div class="MaskForm" v-show="mask.show">
		<div class="cell">
			<div class="mask-panel">
				<img class="close" :src=" img+'/main/close.png' " 
				v-show="mask.hasCross"
				@click="$store.dispatch({type:'HIDE',what:'mask_info'})"/>
				
				<div class="title">
					{{mask.title}}
				</div>
				<div class="info">
					{{mask.info}}
				</div>

				<img class="btn" :src=" img+'/main/btn_got_it.png' "
				@click="$store.dispatch({type:'HIDE',what:'mask_info'})"
				v-show=" mask.btn==='got_it' "/>

				<img class="btn" :src=" img+'/main/btn_to_read.png' "
				@click="$store.dispatch({type:'TO_BOOK_ODE'})"
				v-show=" mask.btn!=='got_it' "/>

			</div>
		</div>
	</div>
</transition>
</template>

<style lang="less" scoped>
.MaskForm {
	@grey: #d8d8d8;
	display: table;
	z-index: 9999;
	position: fixed; left: 0; top: 0;
	width: 100%; height: 100%;
	background: rgba(0,0,0,0.5);
	.cell {
		display: table-cell;
		width: 100%; height: 100%;
		vertical-align: middle;
		.mask-panel {
			position: relative;
			width: 5.2rem;
			margin: auto;
			padding-top: 0.32rem;
			border-radius: 0.1rem;
			background: #ede6de;
			overflow: hidden;
			.close {
				position: absolute; right: 0.26rem; top: 0.26rem;
				width: 0.26rem;
			}
			.title {
				box-sizing: border-box;
				width: 100%;
				padding: 0 0.68rem;
				margin-bottom: 0.26rem;
				font-size: 0.32rem;
				color: #333333; font-weight: 600;
				text-align: center;
			}
			.info {
				margin-bottom: 0.3rem;
				padding: 0 0.4rem;
				font-size: 0.28rem; line-height: 0.42rem;
				text-align: justify;
				color: #666666;
				overflow: hidden;
				.left_ {
					float: left;
					color: #f14646;
				}
				.right_ {
					float: right;
					color: #999999;
				}
			}
			
			.btn {
				width: 4.39rem;
				margin: auto;
				margin-bottom: 0.15rem;
			}
	
		}
	}
}
</style>

<script>
export default {
	data: function(){
		return {
		}
	},
	computed: {
		img(){
			return this.$store.state.img;
		},
		mask(){
			return this.$store.state.mask_info;
		},
		error(){
		},
		// form_(){
		// 	return this.$store.state.form;
		// }
	},
	created: function(){

	},
	mounted: function(){
	},
	methods: {

	}
};
</script>