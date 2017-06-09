<template>
	<div id="root">
		<mask-loading v-show=" page==='pending' "></mask-loading>
		<mask-over v-show=" page==='over' "></mask-over>
		<mask-download></mask-download>
		<mask-weibo v-if=" meta.inWeibo "></mask-weibo>
		<mask-wechat></mask-wechat>
		
		<div class="main" v-show=" page==='ready' "
		:style=" 'background-image:url('+img+'/main/bg.png);background-size:100% auto;' ">
<!--       
      <mask-confirm></mask-confirm>      
      <mask-prize></mask-prize> -->
      <div class="header">
      	<img class="btn_to_take" :src=" img+'/main/btn_to_take.png' "
      	v-show=" data.taken!=='qq' "
      	@click="$store.dispatch({type:'TO_TAKE'})"/>
      	<countdown v-show=" data.taken==='qq' "></countdown>
      </div>
      <panel-god v-for="a in gods" :god="a"></panel-god>
      <img class="btn_check_more" :src=" img+'/main/btn_check_more.png' "
      @click="$store.dispatch({type:'TO_ROOKIE_ZONE'})"/>
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
			width: 100%; height: 44.44rem;
			// background: #280b35;
			overflow: hidden;
			.header {
				width: 100%; height: 6.47rem;
				overflow: hidden;
				.btn_to_take {
					width: 3.81rem;
					margin: auto; margin-top: 5.34rem;
				}
			}
			.btn_check_more {
				width: 4.16rem;
				margin: auto;
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
			MaskWeibo: require('components/MaskWeibo.vue'),
			MaskWechat: require('components/MaskWechat.vue'),

			Countdown: require('components/_main/Countdown.vue'),
      PanelGod: require('components/_main/PanelGod.vue'),
			// MaskPrize: require('components/_two/MaskPrize.vue'),
		},
		data: function(){
			return {};
		},
		computed: {
			btn_take() {
				return this.$store.state.btn_take;
			},
			data() {
				return this.$store.state.data;
			},
      gods() {
        return this.$store.state.gods;
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