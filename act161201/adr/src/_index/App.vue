<template>
	<div id="root">
		<mask-loading v-show=" page==='pending' "></mask-loading>
		<mask-over v-show=" page==='over' "></mask-over>
		
		<div class="main" v-show=" page==='ready' "
		style="background:url(img/bg.png);background-size:100% auto;">

			<slider></slider>

			<!-- <rules :ios="ios"></rules> -->
		</div>
<!-- 		<debug 
		:state="$data"></debug> -->
	</div>
</template>

<script type="text/javascript">
	import './App.scss';
	import {data,act} from './store.js';

	export default {
		components: {
			debug: require('../components/Debug.vue'),
			maskLoading: require('../components/MaskLoading.vue'),
			maskOver: require('../components/MaskOver.vue'),

			Slider: require('../components/Slider.vue'),

			rules: require('../components/Rules.vue')
		},
		data: function(){
			return data;
		},
		computed: {
			chance: function(){
				return 2-this.wanted.length;
			}
		},
		watch: {
			killed: function(new_val){
				new_val.forEach(a=>{
					this.books.forEach(b=>{
						if(a===b.bid){
							b.killed = true;
						};
					})
				});
			},
			wanted: function(new_val){
				new_val.forEach(a=>{
					this.books_wanted.forEach(b=>{
						if(a===b.bid){
							b.wanted = true;
						};
					})
				});
			}
		},
		created: function(){

		},
		mounted: function(){
			this.act({type:'INIT'});
			//console.log( this );
		},
		methods: {
			act: act,
			TO_BOOK: function(bid){
				this.act({
					type: 'TO_BOOK',
					bid: bid
				})
			},
			TO_BUY: function(bid){
				this.act({
					type: 'TO_BUY',
					bid: bid
				}),
				this.act({
					type: 'TO_BOOK',
					bid: bid
				})
			},
			I_WANT: function(bid,i){
				this.act({
					type: 'I_WANT',
					bid: bid,
					i: i
				})
			}
		}
	}
</script>