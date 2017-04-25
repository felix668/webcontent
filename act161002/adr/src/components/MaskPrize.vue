<template>
	<div class="MASK-PRIZE" v-show="show">
		<div class="cell">
			<div class="panel-prize">
				<img class="close" :src=" 'img/icon-close.png' "
				@click="close"/>
				<img class="panel-img" :src=" 'img/panel-prize.png' "/>
				<div class="content">
					<li v-if=" prize===4 ">
						<img class="none" :src=" 'img/prize-none.png' "/>
						<img class="btn-none" :src=" 'img/btn-none.png' "
						@click="act({type:'TO_SHUPING'})"/>
					</li>					
					<li v-if=" prize===3 ">
						<img class="vip" :src=" 'img/prize-vip.png' "/>
					</li>
					<li v-if=" prize===2 ">
						<img class="coupon" :src=" 'img/prize-coupon.png' "/>
						<img class="btn-go" :src=" 'img/btn-go.png' "
						@click="act({type:'TO_USE_COUPON'})"/>
					</li>
					<li v-if=" prize===1 ">
						<img class="prize-100" :src=" 'img/prize-100'+(ios?'_ios':'')+'.png' "/>
					</li>
					<li v-if=" prize===0 ">
						<img class="prize-500" :src=" 'img/prize-500'+(ios?'_ios':'')+'.png' "/>
					</li>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
	.MASK-PRIZE {
		display: table;
		position: fixed; left: 0; top: 0;
		width: 100%; height: 100%;
		background: rgba(0,0,0,0.8);
		z-index: 50;
		.cell {
			width: 100%; height: 100%;
			display: table-cell;
			vertical-align: middle;
			.panel-prize {
				position: relative;
				width: 4.8rem;
				margin: auto;
				.close {
					position: absolute; right: 0.2rem; top: 1.66rem;
					width: 0.6rem;
					z-index: 50;
				}
				.panel-img {
					width: 100%;
				}
				.content {
					position: absolute; left: 0; top: 1.78rem;
					width: 100%;
					li {
						width: 100%;
						.none {
							width: 3.58rem;
							margin: auto;
						}
						.btn-none {
							width: 2.48rem;
							margin: auto;
						}
						.vip {
							width: 2.85rem;
							margin: auto;
						}
						.coupon {
							width: 2.65rem;
							margin-left: 1.15rem;
							margin-bottom: 0.25rem;
						}
						.btn-go {
							width: 2.48rem;
							margin: auto;
						}
						.prize-100,.prize-500 {
							width: 3.32rem;
							margin: auto;
						}
					}
				}
			}
		}
	}
</style>

<script type="text/javascript">
export default {
	props: ['show','prize','act','ios'],
	methods: {
		close: function(){
			this.act({
				type: 'CLOSE_PRIZE_MASK'
			})
		}
	}
}
</script>