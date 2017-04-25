<template>
	<div id="root">
		<mask-loading v-show=" page==='pending' "></mask-loading>
		<mask-over v-show=" page==='over' "></mask-over>
		
		<div class="main" v-show=" page==='ready' ">
			<mask-download></mask-download>
			<mask-rules></mask-rules>
			<mask-form></mask-form>
			
<!-- 			<div class="to_app" v-if="meta.share"
			@click="$store.dispatch({type:'TO_APP'})">
				调试用：跳到端内
			</div> -->

			<img class="close" :src="img+'/test/close.png'"
			v-show=" show "
			@click="$store.dispatch({type:'CLOSE_WINDOW'})"/>

			<books-fall-two></books-fall-two>
			<page-entry></page-entry>
			<page-factory></page-factory>

		</div>


<!-- 		<debugger
		:state="$data"></debugger> -->
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
			// background: #15171d;
			overflow: hidden;
			.close {
				position: absolute; right: 0.16rem; top: 0.56rem;
				width: 0.5rem;
				z-index: 998;
			}
			.to_app {
				position: fixed; left: 0; bottom: 0;
				font-size: 0.3rem;
				background: orange;
				z-index: 1000;
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
			MaskRules: require('lib/_main/MaskRules.vue'),
			MaskForm: require('lib/_main/MaskForm.vue'),

			BooksFallTwo: require('lib/_main/BooksFallTwo.vue'),
			PageEntry: require('lib/_main/PageEntry.vue'),
			PageFactory: require('lib/_main/PageFactory.vue')
		},
		data: function(){
			return {};
		},
		computed: {
			change_main(){
				return this.$store.state.change_main;
			},
			page(){
				return this.$store.state.page;
			},
			meta(){
				return this.$store.state.meta;
			},
			img(){
				return this.$store.state.img;
			},
			pic(){
				return this.$store.state.pic;
			},
			show(){
				if( this.change_main.stage!=='fall' ){
					if( this.meta.platform==='adr' ){
						if( this.meta.normal===true ){
							if( this.pic.done===true ){
								return true;
							}else{
								return false;
							}
						}else{
							return true;
						}
					}else{
						// ios
						if( this.meta.normal===true ){
							if( this.pic.done===true ){
								return true;
							}else{
								return false;
							}
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
		},
		created: function(){
			
		},
		mounted: function(){
			this.$store.dispatch({type:'INIT_MAIN'});
		},
		methods: {
			touchmove: function(e){
				e.preventDefault();
			}
		}
	}
</script>