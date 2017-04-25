<template>
	<div id="root">
		<mask-loading v-show=" page==='pending' "></mask-loading>
		<mask-over v-show=" page==='over' "></mask-over>
		
		<div class="main" v-show=" page==='ready' ">
			
			<mask-books 
			v-show=" mask_books "
			:writers="writers"
			:act="act"></mask-books>
			
			<focus 
			v-show=" stage===0 " :stage="stage" :act="act"></focus>
			
			<main-block
			v-show=" stage===1 " 
			:writers=" writers "
			:current=" current " 
			:day=" day "
			:avatar="avatar"
			:info="info"
			:entry="entry"
			:total="total"
			:stage="stage"
			:adr="adr"
			:act="act"></main-block>
			
		</div>

<!-- 		<debugger
		:state="$data"></debugger> -->
	</div>
</template>

<script type="text/javascript">
	import './App.scss';
	import {data,act} from './store.js';

	export default {
		components: {
			Debugger: require('../components/Debugger.vue'),
			MaskLoading: require('../components/MaskLoading.vue'),
			MaskOver: require('../components/MaskOver.vue'),

			Focus: require('../components/Focus.vue'),

			MainBlock: require('../components/MainBlock.vue'),
			MaskBooks: require('../components/MaskBooks.vue')
		},
		data: function(){
			return data;
		},
		computed: {
			href: function(){
				var self = this;
				return location.href
					// .replace( /http:\/\/solomotest4\.3g\.qq\.com/,'https://ptsolomo.reader.qq.com' )
					// .replace( /http:\/\/iyuedu\.qq\.com/,'https://yuedu.reader.qq.com' )
					.replace( /act161203.+/,'act161203/com/share.html?tf=1&uid='+self.uid+'&aid='+self.current+'&act_f=161222&tl='+self.tl );
			}
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