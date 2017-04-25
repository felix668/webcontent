<template>
	<div id="root">
		<mask-loading v-show=" page==='pending' "></mask-loading>
		
		<div class="main" v-show=" page==='ready' ">
			
			<div class="yyb">
				<swiper 
				:items=" writers " 
				:act="act" 
				:stage="stage"
				:day="day"
				:yyb="true"></swiper>

				<div class="lower_part"
				style="background:url(img/main_bg_2.png);background-size:100% auto;">
					<img class="text_snowman" :src=" 'img/text_snowman.png' "/>

					<free-books 
					:writers=" writers "
					:current=" current "
					:total="total"
					:act="act"
					:yyb="true"></free-books>

					<p class="_how_many">已有<span>{{total}}</span>人获得限时免费</p>
					<a class="btn"
					@click="act({type:'PARTICIPATE'})">
						<img class="btn_participate" :src=" 'img/btn_participate.png' "/>
					</a>
					<img class="trees" :src=" 'img/trees.png' "/>
				</div>
			</div>
			
		</div>

<!-- 		<debugger
		:state="$data"></debugger> -->
	</div>
</template>

<style lang="less" scoped>
	.yyb {
		position: relative;
		width: 100%; height: 18.8rem;
		.lower_part {
			position: absolute; left: 0; top: 6.36rem;
			width: 100%; height: 18.33rem;
			.text_snowman {
				position: absolute; left: 0.93rem; top: 2.7rem;
				width: 5.82rem;
			}
			
			._how_many {
				width: 100%; 
				margin-top: 0.4rem;
				font-size: 0.28rem; color: #636363; text-align: center;
				span {
					font-size: 0.28rem; color: #ee6a57;
				}
			}
			.btn {
				display: block;
				width: 4.48rem;
				margin: auto;
				.btn_participate {
					width: 4.48rem;
				}
			}
			.trees {
				width: 6.99rem;
				margin: auto;
			}
		}
	}
</style>

<script type="text/javascript">
	import './App.scss';
	import {data,act} from './store.js';

	export default {
		components: {
			MaskLoading: require('../components/MaskLoading.vue'),
			Swiper: require('../components/Swiper.vue'),
			FreeBooks: require('../components/FreeBooks.vue'),

		},
		data: function(){
			return data;
		},
		computed: {

		},
		watch: {
		},
		created: function(){
		},
		mounted: function(){
			this.act({type:'INIT'});
		},
		methods: {
			act: act
		}
	}
</script>