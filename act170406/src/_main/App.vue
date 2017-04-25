<template>
	<div id="root">
		<mask-loading v-show=" page==='pending' "></mask-loading>
		<mask-over v-show=" page==='over' "></mask-over>
		
		<div class="main" v-show=" page==='ready' ">
			<mask-download></mask-download>
			<div class="header"
			:style=" 'background-image:url('+img+'/main/bg.png);background-size:100% auto;' ">
				<swiper-cards></swiper-cards>
				<img v-if="!meta.share" class="btn_invite" :src=" img+'/main/btn_invite.png' "
				@click="$store.dispatch({type:'SHARE'})"/>
			</div>
			<div style="width:100%; height: 0.7rem; background: #090f14;"
			v-if=" !meta.share "></div>
			<div class="warp">
				<img class="btn_warp" :src=" img+'/main/btn_warp.png' "
				@click="$store.dispatch({type:'TO_PAGE'})"/>
			</div>
			<rules v-if="!meta.share"></rules>
			<img class="footer" :src=" img+'/main/footer.png' "/>
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
			.header {
				width: 100%;
				overflow: hidden;
				.btn_invite {
					width: 5.2rem;
					margin: auto;
					// margin-bottom: 0.7rem;
				}
				.btn_to_app {
					width: 5.2rem;
					margin: auto;
				}
			}
			.warp {
				width: 100%;
				// padding-top: 0.9rem;
				background:	#090f14;
				.btn_warp {
					width: 6.7rem;
					margin: auto;
				}
			}
			.footer {
				width: 100%;
			}
		}
	}
</style>

<script type="text/javascript">
	export default {
		components: {
			MaskLoading: require('components/MaskLoading.vue'),
			MaskDownload: require('components/MaskDownload.vue'),
			MaskOver: require('components/MaskOver.vue'),

			SwiperCards: require('components/_main/SwiperCards.vue'),
			Rules: require('components/_main/Rules.vue')
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