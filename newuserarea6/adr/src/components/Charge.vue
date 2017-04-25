<template>
	<div class="Charge">
		<img class="banner_charge" :src=" img+'/banner_charge.png' "/>
		<div class="info">
			<div class="info__">
				1书券=0.01元，可用来购买书籍
			</div>
			<div class="info__2" v-if="first">
				两个金额只能选择一个哦！
			</div>
		</div>
		<div class="panel--"
		v-for="(a,i) in items"
		:key="a.money">
			<div class="table">
				<span class="small">{{a.coins}}书币</span>
				<img class="coins" :src=" img+'/coins.png' "/>
				<span class="small">+</span>
				<span class="big">{{a.bills}}</span><span class="small">书券</span><img class="bills" :src=" img+'/bills.png' "/>
			</div>
			<Btn :act="act" 
			:money="a.money"
			:text=" '充'+a.money+'元领取' " :cb="'CHARGE'"></Btn>
			<p class="bottom"
			v-if="!have[first?('f'+a.money):a.money]">
				我已充值{{a.money}}元，<a @click="GET_BILLS(a.money)">领取{{a.bills}}书券></a>
			</p>
			<p class="bottom"
			v-if="have[first?('f'+a.money):a.money]&&!monthly">
				<a @click="act({type:'TO_JINGXUAN'})">已领取，去书城找书></a>
			</p>
			<p class="bottom"
			v-if="have[first?('f'+a.money):a.money]&&monthly">
				<a>已领取</a>
			</p>
		</div>
	</div>
</template>

<style lang="less" scoped>
	.Charge {
		width: 100%;
		padding-bottom: 0.4rem;
		.banner_charge {
			width: 4.63rem;
			margin: auto; margin-bottom: 0.16rem;
		}
		.info {
			margin-bottom: 0.54rem;
			.info__ {
				font-size: 0.3rem;
				text-align: center; color: #333333;
			}
			.info__2 {
				font-size: 0.3rem;
				text-align: center; color: #333333;
			}
		}
		.panel-- {
			box-sizing: border-box;
			width: 6.5rem; height: 2.84rem;
			margin: auto;
			margin-bottom: 0.4rem;
			border-radius: 0.25rem;
			border: 0.04rem solid black;
			background: #6e5ca9;
			.table {
				width: 100%; height: 0.62rem; line-height: 0.62rem;
				margin-top: 0.28rem; margin-bottom: 0.12rem;
				vertical-align: middle;

				text-align: center;
				font-size: 0.36rem;
				color: white;
				span.small {
					vertical-align: middle;
					font-size: 0.36rem;
				}
				.coins {
					display: inline-block;
					width: 0.49rem;
					vertical-align: middle;
				}
				span.big {
					display: inline-block;
					height: 0.6rem;
					vertical-align: middle;
					font-size: 0.6rem; line-height: 0.6rem; font-weight: bold;
				}
				.bills {
					display: inline-block;
					width: 0.59rem;
					vertical-align: middle;
				}
			}
			.bottom {
				font-size: 0.3rem; text-align: center;
				color: #c2affe;
				a {
					color: #fac70c;
				}
			}
		}
	}
</style>

<script>
	export default {
		props: ['ios','act','first','charged','have','monthly','img'],
		components: {
			Btn: require('../components/Btn.vue')
		},
		data: function(){
			return {
				items: []
			}
		},
		created: function(){
			this.setItems(this.first)
		},
		watch: {
			first: function(new_val){
				this.setItems(new_val);
			}
		},
		methods: {
			GET_BILLS: function(money){
				this.act({
					type: 'GET_BILLS',
					money: money
				})
			},
			setItems: function(first){
				if( first ){
					this.items = [{
						coins: 100,
						bills: 100,
						money: 1
					},{
						coins: 1000,
						bills: 500,
						money: 10
					}]
				}else{
					this.items = [{
						coins: 1000,
						bills: 58,
						money: 10
					},{
						coins: 2000,
						bills: 128,
						money: 20
					},{
						coins: 5000,
						bills: 328,
						money: 50
					}]
				}
			}
		}
	}
</script>