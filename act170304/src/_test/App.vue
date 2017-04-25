<template>
	<div id="root">
		<mask-loading v-show=" page==='pending' "></mask-loading>
		<mask-over v-show=" page==='over' "></mask-over>
		
		<div class="main" v-show=" page==='ready' ">
			<mask-download></mask-download>

			<img class="close" :src="img+'/test/close.png'"
			v-show=" show "
			@click="close"/>

			<books-fall-two></books-fall-two>
			<incoming></incoming>

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
			width: 100%; height: 100vh;
			// background: #15171d;
			overflow: hidden;
			.close {
				position: absolute; right: 0.16rem; top: 0.56rem;
				width: 0.5rem;
				z-index: 99;
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

			MaskDownload: require('lib/Mask/MaskDownload.vue'),
			BooksFallTwo: require('lib/_incoming/BooksFallTwo.vue'),
			Incoming: require('lib/_incoming/Incoming.vue'),
			// SwiperNine: require('lib/_index/SwiperNine.vue')
		},
		data: function(){
			return {};
		},
		computed: {
			page(){
				return this.$store.state.page;
			},
			meta(){
				return this.$store.state.meta;
			},
			img(){
				return this.$store.state.img;
			},
			change(){
				return this.$store.state.change;
			},
			show(){
				if( this.change.stage===1 ){
					if( this.meta.platform==='adr' ){
						if( this.meta.normal===true ){
							return false;
						}else{
							return true;
						}
					}else{
						// ios
						if( this.meta.normal===true ){
							return false;
						}else{
							return false;
						}
					}
				}else{
					return false;
				}
			}
		},
		watch: {
			'change.stage': function(){

			}
		},
		created: function(){
			
		},
		mounted: function(){
			this.$store.dispatch({type:'INIT'});
		},
		methods: {
			close(){
				Local.closePage();
				// history.go(-1);
				// window.close();
			},
			touchmove: function(e){
				e.preventDefault();
			}
		}
	}
</script>