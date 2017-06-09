<template>
	<div id="root">
		<mask-loading v-show=" page==='pending' "></mask-loading>
		<mask-over v-show=" page==='over' "></mask-over>
		<mask-download></mask-download>
		<mask-weibo v-if=" meta.inWeibo "></mask-weibo>
		<mask-wechat></mask-wechat>
		
		<div class="main" v-show=" page==='ready' "
		:style=" 'background-image:url('+img+'/main/bg.png);background-size:100% auto;' ">
     
      <mask-info></mask-info> 

      <img class="header" :src=" img+'/main/header_2.png' "/>
      <div style="width:100%;height:6.54rem;"></div>
      <part-take></part-take>

      <div class="part_clip">
      	<img class="banner_clip" :src=" img+'/main/banner_clip.png' "/>
      	<p class="p_intro_">
      		《欢乐颂2》正在东方卫视、浙江卫视、腾讯视频同步热播
      	</p>
      	<div class="video">
      		<iframe frameborder="0" width="640" height="498" src="https://v.qq.com/iframe/player.html?vid=s0023h9vfaw&tiny=0&auto=0" allowfullscreen></iframe>
      	</div>
      	<img class="btn_share" :src=" img+'/main/btn_share'+(meta.platform==='adr'?'':'_ios')+'.png' "
      	v-show=" !meta.share "
      	@click="$store.dispatch({type:'SHARE'})"/>

        <img class="btn_share" :src=" img+'/main/btn_to_reader.png' "
        v-show=" meta.share "
        @click="$store.dispatch({type:'TO_PAGE_MAIN'})"/>
      </div>

      <rules-plain
      v-show=" !meta.share "></rules-plain>

      <img class="logo" :src=" img+'main/logo.png' "
      v-show=" meta.share "/>
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
			background: #ede6de;
			overflow: hidden;

			.header {
				position: absolute; left: 0; top: 0;
				width: 100%;
			}
			.part_clip {
				width: 100%;
				overflow: hidden;
				.banner_clip {
					width: 4.81rem;
					margin: auto; margin-bottom: 0.05rem;
				}
				.p_intro_ {
					margin-bottom: 0.5rem;
					font-size: 0.24rem; line-height: 0.32rem;
      		text-align: center; color: #888888;
				}
				.video {
					width: 6.9rem; height: 4rem;
					border-radius: 0.1rem;
					margin: auto; margin-bottom: 0.3rem;
					background: #e6d1c8;
					overflow: hidden;
					iframe {
						display: block;
						width: 6.6rem; height: 3.7rem;
						margin: auto; margin-top: 0.14rem;
					}
				}
				.btn_share {
					width: 4.32rem;
					margin: auto; margin-bottom: 0.4rem;
				}
			}

			.logo {
				width: 2.24rem;
				margin: auto; margin-bottom: 0.3rem;
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

      MaskInfo: require('components/_main/MaskInfo.vue'),
			PartTake: require('components/_main/PartTake.vue'),
      // PanelGod: require('components/_main/PanelGod.vue'),
			RulesPlain: require('components/_main/RulesPlain.vue'),
		},
		data: function() {
			return {};
		},
		computed: {
			data() {
				return this.$store.state.data;
			},
      gods() {
        return this.$store.state.gods;
      },
			page() {
				return this.$store.state.page;
			},
			meta() {
				return this.$store.state.meta;
			},
			img() {
				return this.$store.state.img;
			},
		},
		watch: {
		},
		created: function() {
			
		},
		mounted: function() {
			this.$store.dispatch({type:'INIT_MAIN'});
		},
		methods: {
			touchmove: function(e) {
				e.preventDefault();
			}
		}
	}
</script>