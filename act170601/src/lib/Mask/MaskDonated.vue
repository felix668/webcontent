<template>
<transition name="slide-up">
	<div class="MaskDonated" v-show="mask.show"
	@touchmove="touchmove">
		<div class="cell">
			<div class="mask-panel">
				<img class="close" :src=" img+'/main/close.png' " 
				@click="$store.dispatch({type:'HIDE',what:'mask_donated'})"/>
				<div class="content">
					<div class="title">
						{{user.title}}
					</div>
					<p class="p2">
	          <img class="icon_clock" :src=" img+'/main/icon_clock.png' "/>
	          <span>已捐时长</span>
	        </p>
	        <p class="p3">
	          <span>{{Math.floor(user.donated)}}</span>分钟≈<span>{{Math.floor( Math.floor(user.donated)*(1000/30) )}}</span>字
	        </p>
					<div class="pink">
						<img class="hearts" :src=" img+'/main/hearts.png' "/>
					</div>
				</div>
			</div>
		</div>
	</div>
</transition>
</template>

<style lang="less" scoped>
.MaskDonated {
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
			border-radius: 0.1rem; background: white;
			.close {
				position: absolute; right: -0.25rem; top: -0.25rem;
				width: 0.6rem;
				z-index: 100;
			}
			.content {
				position: relative;
				width: 100%;
				padding-top: 0.35rem;
				border-radius: 0.1rem;
				overflow: hidden;
				.title {
					box-sizing: border-box;
					width: 100%;
					margin-bottom: 0.58rem;
					font-size: 0.32rem;
					color: #444444; font-weight: 600;
					text-align: center;
				}
				.p2 {
					box-sizing: border-box;
					padding-left: 0.55rem;
					margin-bottom: 0.26rem;
	        line-height: 0.26rem;
	        font-size: 0.24rem; color: #8e826e;
	        vertical-align: middle;
	        .icon_clock {
	          display: inline-block;
	          margin: 0 0.1rem 0 0;
	          vertical-align: middle;
	          width: 0.22rem;
	          height: 0.22rem;
	        }
	        span {
	          display: inline-block;
	          vertical-align: middle;
	        }
	      }
	      .p3 {
	      	box-sizing: border-box;
	      	padding-left: 0.55rem;
	      	margin-bottom: 0.67rem;
	        font-size: 0.24rem; color: #f0dabf;
	        line-height: 0.3rem;
	        color: #444444;
	        span {
	          font-size: 0.28rem;
	          font-weight: 600;
	        }
	      }
				.pink {
					width: 100%; height: 0.82rem;
					border-bottom-left-radius: 0.1rem;
					border-bottom-right-radius: 0.1rem; 
					background: #ffa174;
					overflow: hidden;
					.hearts {
						width: 2.71rem;
						margin: auto; margin-top: 0.28rem;
					}
				}
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
			return this.$store.state.mask_donated;
		},
		user(){
			return this.$store.state.user;
		}
	},
	created: function(){

	},
	mounted: function(){
	},
	methods: {
		touchmove: function(e){
			e.stopPropagation();
		}
	}
};
</script>