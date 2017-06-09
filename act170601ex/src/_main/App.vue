<template>
	<div id="root">
		<mask-loading v-show=" page==='pending' "></mask-loading>
		<mask-over v-show=" page==='over' "></mask-over>
		<mask-download></mask-download>
		<mask-weibo v-if=" meta.inWeibo "></mask-weibo>
		<mask-wechat></mask-wechat>
		
		<div class="main" v-show=" page==='ready' ">
     
      <mask-confirm></mask-confirm>
      <mask-info></mask-info>

      <img class="header" :src="img+'/main/header.png'"/>
      <div style="width:100%; height:6.52rem;"></div>

      <div class="benefits">
        <img class="words_benefits" :src="img+'/main/words_benefits.png'"/>
        <img class="panel_benefits" :src="img+'/main/panel_benefits.png'"/>
        <p class="all">全部好处 ></p>
      </div>

      <img class="words_gifts" :src="img+'/main/words_gifts.png'"/>

      <div class="part_1">
        <div class="title_">
          豪礼1：送包月、送书券
        </div>
        <img class="tape_3" :src="img+'/main/tape_3.png'"
        @click="$store.dispatch({type:'TO_BUY',month:3})"/>
        <img class="tape_6" :src="img+'/main/tape_6.png'"
        @click="$store.dispatch({type:'TO_BUY',month:6})"/>
        <img class="tape_12" :src="img+'/main/tape_12.png'"
        @click="$store.dispatch({type:'TO_BUY',month:12})"/>
        <div class="tips">
          短信，包月体验卡开通不支持参与活动
        </div>
      </div>

      <div class="part_2">
        <div class="title_">
          豪礼2：抽奖，100%中奖
        </div>
        <canvas-card></canvas-card>
      </div>

      <rules-plain
      v-show=" !meta.share "></rules-plain>

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
			background: #a6cfb1;
			overflow: hidden;

			.header {
        position: absolute; left: 0; top: 0;
        width: 100%;
			}

      .benefits {
        position: relative;
        overflow: hidden;
        .words_benefits {
          width: 1.73rem;
          margin: auto;
          margin-bottom: 0.42rem;
        }
        .panel_benefits {
          width: 6.9rem;
          margin: auto;
          margin-bottom: 0.62rem;
        }
        .all {
          position: absolute; right: 0.3rem; top: 0.3rem;
          font-size: 0.28rem;
          color: #333333;
        }
      }

      .words_gifts {
        position: relative;
        width: 3.9rem;
        z-index: 10;
        margin: auto;
        margin-bottom: 0.03rem;
      }

      .part_1 {
        position: relative;
        width: 100%;
        .title_ {
          font-size: 0.28rem;
          font-weight: 600;
          color: #333333;
          text-align: center;
          margin-bottom: 0.38rem;
        }
        .tape_3 {
          width: 6rem;
          margin: auto; margin-bottom: 0.2rem;
        }
        .tape_6 {
          width: 6rem;
          margin: auto; margin-bottom: 0.1rem;
        }
        .tape_12 {
          width: 6.06rem;
          margin: auto; margin-bottom: 0.1rem;
        }
        .tips {
          font-size: 0.24rem;
          text-align: center;
          color: #6d9a7b;
          margin-bottom: 0.56rem;
        }
      }
      .part_2 {
        position: relative;
        width: 100%;
        .title_ {
          font-size: 0.28rem;
          font-weight: 600;
          color: #333333;
          text-align: center;
          margin-bottom: 0.38rem;
        }
      }

			.bottom_img {
        position: absolute; left: 0; bottom: 0;
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
      CanvasCard: require('components/_main/CanvasCard.vue'),
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