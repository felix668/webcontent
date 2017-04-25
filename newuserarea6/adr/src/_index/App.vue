<template>
	<div id="root">
		<mask-loading v-show=" page==='pending' "></mask-loading>
		<mask-over v-show=" page==='over' "
		:img="img"></mask-over>
		
		<div class="main" v-show=" page==='ready' ">
		
			<mask-info
			:img="img" 
			:mask="mask" 
			:act="act"></mask-info>

			<img class="title_img" :src=" img+'/title_img'+((charge&&monthly)?'':(charge?'_charge':'_monthly'))+'.png' "/>
			
			<charge 
			v-if="charge"
			:img="img"
			:ios="ios" :act="act" :first="first" :charged="charged" :have="have"
			:monthly="monthly"></charge>
			
			<monthly
			v-if="monthly"
			:img="img"
			:act="act"
			:vip="vip"
			:have-gift="haveGift" 
			:ios="ios"></monthly>
			
			<rules 
			:img="img"
			:charge="charge" :monthly="monthly" :first="first"
			:ios="ios"></rules>
		
		</div>

<!-- 		<debug 
		:state="$data"></debug> -->
	</div>
</template>

<style lang="less" scoped>
	#root {
		position: relative;
		width: 100%;
		overflow: hidden;
		.main {
			width: 100%;
			overflow: hidden;
			background: #fbeec7;
			.title_img {
				width: 100%;
			}
		}
	}
</style>

<script type="text/javascript">
	import {data,act} from '../store/store.js';

	export default {
		components: {
			Debug: require('../components/Debug.vue'),
			MaskLoading: require('../components/MaskLoading.vue'),
			MaskOver: require('../components/MaskOver.vue'),
			MaskInfo: require('../components/MaskInfo.vue'),

			Charge: require('../components/Charge.vue'),
			Monthly: require('../components/Monthly.vue'),

			Rules: require('../components/Rules.vue')
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