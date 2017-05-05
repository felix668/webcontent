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

      <img class="test_btn" :src=" img+'/main/test_btn.png' "
      @click="to_page"/>
      
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
      .test_btn {
        width: 100%;
        margin-top: 1rem;
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
			this.$store.dispatch({type:'INIT_TEST_0'});
		},
		methods: {
      to_page() {
        location.href = this.$store.getters.href_test_1;
        // this.$store.dispatch({
        //   type: 'TO_PAGE',
        //   href: this.$store.getters.href_test_1
        // })
      },
			touchmove: function(e){
				e.preventDefault();
			}
		}
	}
</script>