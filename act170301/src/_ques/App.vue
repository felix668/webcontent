<template>
	<div id="root">
		<mask-loading v-show=" page==='pending' "></mask-loading>
		<mask-over v-show=" page==='over' "></mask-over>
		
		<div class="main rem_height" v-show=" page==='ready' "
		:style=" 'background-image:url('+img+'/test_bg.png);background-size:100% auto;' ">
			<mask-download></mask-download>
			<mask-confirm></mask-confirm>
			
			<ques></ques>
			<div class="result_" v-show=" ques.state==='done' ">
				<after-test ></after-test>
			</div>
		</div>

	</div>
</template>

<style lang="less" scoped>
	#root {
		position: relative;
		width: 100%;
		overflow: hidden;
		.main {
			position: relative;
			width: 100%;
			background: #15171d;
			overflow: hidden;
			color: white;
			font-size: 16px;
			.result_ {

			}	
		}
	}
</style>

<script type="text/javascript">
	export default {
		components: {
			Debugger: require('../lib/Debugger.vue'),
			MaskLoading: require('lib/Mask/MaskLoading.vue'),
			MaskOver: require('lib/Mask/MaskOver.vue'),

			MaskDownload: require('lib/_book/MaskDownload.vue'),
			MaskConfirm: require('lib/_book/MaskConfirm.vue'),

			Ques: require('lib/_book/Ques.vue'),
			AfterTest: require('lib/_book/AfterTest.vue'),
		},
		data: function(){
			return {};
		},
		computed: {
			ques(){
				return this.$store.state.ques;
			},
			page(){
				return this.$store.state.page;
			},
			img(){
				return this.$store.state.img;
			},
			change(){
				return this.$store.state.change;
			}
		},
		watch: {
		},
		created: function(){
			
		},
		mounted: function(){
			this.$store.dispatch({type:'INIT_QUES'});
		},
		methods: {
			touchmove: function(e){
				e.preventDefault();
			}
		}
	}
</script>