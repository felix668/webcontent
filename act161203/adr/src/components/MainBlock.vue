<template>
	<div class="MainBlock">
		<img class="ice" :src=" 'img/ice.png' " v-if="entry"/>

		<div class="entry" v-if="entry"
		style="background:url(img/bg_exchange_2.png);background-size:100% auto;">
			<div class="entry_main">
				<div class="avatar">
					<img :src=" avatar "/>
				</div>
				<p class="time">本周阅读时长：{{info.time}}分钟</p>
				<div class="billsAvailable">
					<img class="coin" :src=" 'img/coin.png' "/>
					<span>当前可兑换：{{info.billsAvailable}}书券</span>
				</div>
				<div class="exchange">
					<img class="btn_exchange" :src=" 'img/btn_exchange.png' "
					@click="act({type:'EXCHANGE'})"/>
					<p class="billsReceived">本周已兑换{{info.billsReceived}}书券</p>
				</div>
			</div>
		</div>

		<div class="index_part">
			<swiper 
			:items=" writers " 
			:act="act" 
			:stage="stage"
			:day="day"></swiper>
			
			<div class="lower_part"
			style="background:url(img/main_bg_2.png);background-size:100% auto;">
				<img class="text_snowman" :src=" 'img/text_snowman.png' "/>

				<free-books 
				:writers=" writers "
				:current=" current "
				:total="total"
				:act="act"></free-books>
				
				<rules :adr="adr"></rules>
			</div>
		</div>
	
	</div>
</template>

<style lang="less" scoped>
	.MainBlock {
		position: relative;
		width: 100%;
		overflow: hidden;
		// padding-bottom: 0.4rem;
		.ice {
			position: absolute; left: 0.36rem; top: 6.44rem;
			width: 6.45rem;
			z-index: 200;
		}
		.entry {
			position: relative;
			// background: orange;
			width: 100%; height: 7.34rem;
			.entry_main {
				position: relative;
				overflow: hidden;
				.avatar {
					box-sizing: border-box;
					width: 1.44rem; height: 1.44rem;
					margin: auto; margin-top: 0.4rem; margin-bottom: 0.46rem;
					border-radius: 1000px;
					border: 0.04rem solid white;
					overflow: hidden;
					img {
						width: 100%; height: 100%;
					}
				}
				.time {
					margin-bottom: 0.4rem;
					font-size: 0.28rem;
					text-align: center;
				}
				.billsAvailable {
					margin-bottom: 0.16rem;
					line-height: 0.48rem;
					font-size: 0.38rem;
					vertical-align: middle;
					text-align: center;
					.coin {
						display: inline-block;
						height: 0.48rem;
						vertical-align: middle;
					}
					span {
						display: inline-block;
						line-height: 0.48rem;
						font-size: 0.38rem;
						vertical-align: middle;
					}
				}
				.exchange {
					position: relative;
					.btn_exchange {
						width: 4.48rem;
						margin: auto;
					}
					.billsReceived {
						position: absolute; left: 0; bottom: 0;
						width: 100%;
						font-size: 0.28rem;
						text-align: center;
					}
				}
			}
		}
		.index_part {
			position: relative;
			width: 100%; height: 24.69rem;
			overflow: hidden;
			.lower_part {
				position: absolute; left: 0; top: 6.36rem;
				width: 100%; height: 18.33rem;
				.text_snowman {
					position: absolute; left: 0.93rem; top: 2.7rem;
					width: 5.82rem;
				}
			}
		}
	}
</style>

<script>
	export default {
		props: {
			writers: {},
			current: {},
			act: {},
			day: {},
			stage: {},
			total: {},
			entry: {},
			avatar: {},
			adr: {},
			info: {}
		},
		components: {
			Swiper: require('./Swiper.vue'),
			FreeBooks: require('../components/FreeBooks.vue'),
			Rules: require('../components/Rules.vue')
		},
		data: function(){
			return {
			}
		},
		created: function(){
			
		},
		watch: {
			
		},
		methods: {
		}
	}
</script>