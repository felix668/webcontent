<template>
	<div id="root">
		<mask-loading v-show=" page==='pending' "></mask-loading>
		<mask-over v-show=" page==='over' "></mask-over>
		<mask-download></mask-download>
		<mask-weibo v-if=" meta.inWeibo "></mask-weibo>
		<mask-wechat></mask-wechat>
		
		<div class="main" v-show=" page==='ready' ">
      <img class="close" :src=" img+'/main/close.png' "
      @click="$store.dispatch({type:'CLOSE_WINDOW'})"/>
      <div class="know">
        <img class="bg_test_1" :src=" img+'/main/test_1_bg.png' "/>
        <img class="btn_share" :src=" img+'/main/btn_share.png' "
        @click=" share "/>
      </div>
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
        position: fixed; right: 0.2rem; top: 0.2rem;
        width: 0.31rem;
        z-index: 9999999;
      }
      .know {
        position: relative;
        .bg_test_1 {
          width: 100%;
        }
        .btn_share {
          position: fixed; left: 2rem; bottom: 0.5rem;
          width: 2.36rem;
        }
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

			FixedFooter: require('components/_two/FixedFooter.vue'),
      MaskConfirm: require('components/_two/MaskConfirm.vue'),
			MaskPrize: require('components/_two/MaskPrize.vue'),
		},
		data: function(){
			return {};
		},
		computed: {
      priceOriginal () {
        return this.$store.state.priceOriginal;
      },
      price () {
        return this.$store.state.price;
      },
      books () {
        return this.$store.state.books;
      },
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
			this.$store.dispatch({type:'INIT_TEST_1'});
		},
		methods: {
      share() {
        if(this.meta.share) {
          console.log('TO_PAGE')
          this.$store.dispatch({
            type: 'TO_PAGE',
            href: this.$store.getters.href_test_0
          })
        }else{
          this.$store.dispatch({
            type: 'SHARE'
          })
        }
      },
			touchmove: function(e){
				e.preventDefault();
			}
		}
	}
</script>