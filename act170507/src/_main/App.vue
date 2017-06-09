<template>
	<div id="root">
		<mask-loading v-show=" page==='pending' "></mask-loading>
		<mask-over v-show=" page==='over' "></mask-over>
		<mask-download></mask-download>
		<mask-weibo v-if=" meta.inWeibo "></mask-weibo>
		<mask-wechat></mask-wechat>
		
		<div class="main" v-show=" page==='ready' "
		:style=" 'background-image:url('+img+'/main/bg.png);background-size:100% auto;' ">
     
      <mask-confirm></mask-confirm>
      <mask-info></mask-info> 

      <div class="header" style="width:100%;height:6.87rem;"
      :style=" 'background-image:url('+img+'/main/header_2.png);background-size:100% auto;' ">
        <img class="banner" :src=" img+'/main/banner_'+meta.platform+'.png' "/>
      </div>
      <part-take></part-take>

      <img class="bottom_img" :src=" img+'main/bottom_img.png' "/>

      <div class="part_clip">
      	<img class="ink" :src=" img+'/main/ink.png' "/>
      	<p class="p_intro_">
      		张嘉译、秦海璐喊你来看《白鹿原》原著
      	</p>

      	<video-white></video-white>
        <div style="width:100%;height:0.54rem;"></div>

      	<img class="btn_share" :src=" img+'/main/btn_share.png' "
      	@click="$store.dispatch({type:'SHARE'})"/>

<!--         <img class="btn_share" :src=" img+'/main/btn_share.png' "
        v-show=" meta.share "
        @click="$store.dispatch({type:'TO_PAGE_MAIN'})"/> -->
      </div>

      <rules-plain
      v-show=" !meta.share "></rules-plain>
      <div style="width:100%;height:1.6rem;"></div>

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
			background: #f4f4f4;
			overflow: hidden;

			.header {
				position: relative;
        .banner {
          position: absolute; left: (7.5-4.81)/2rem; top: 5.12rem;
          width: 4.81rem;
        }
			}
			.part_clip {
        position: relative;
				width: 100%;
				overflow: hidden;
        .ink {
          position: absolute; left: 0; top: 0.5rem;
          width: 6.17rem;
        }
				.banner_clip {
					width: 4.81rem;
					margin: auto; margin-bottom: 0.05rem;
				}
				.p_intro_ {
					margin-bottom: 0.4rem;
					font-size: 0.34rem;
          font-weight: 600;
      		text-align: center; color: #494949;
				}

				.video_frame {
					width: 6.9rem; height: 4rem;
					border-radius: 0.1rem;
					margin: auto; margin-bottom: 0.3rem;
					background: #e6d1c8;
					overflow: hidden;
				}
				.btn_share {
					width: 4.77rem;
					margin: auto; margin-bottom: 0.48rem;
				}
			}

			.bottom_img {
        position: absolute; left: 0; bottom: -2px;
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
			MaskWeibo: require('components/MaskWeibo.vue'),
			MaskWechat: require('components/MaskWechat.vue'),

      MaskConfirm: require('components/_main/MaskConfirm.vue'),
      MaskInfo: require('components/_main/MaskInfo.vue'),
			PartTake: require('components/_main/PartTake.vue'),
      VideoWhite: require('components/_main/VideoWhite.vue'),
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