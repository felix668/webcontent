<template>
	<div id="root">
		<mask-loading v-show=" page==='pending' "></mask-loading>
		<mask-over v-show=" page==='over' "></mask-over>
		<mask-download></mask-download>
		<mask-weibo v-if=" meta.inWeibo "></mask-weibo>
		<mask-wechat></mask-wechat>
		
		<div class="main" v-show=" page==='ready' ">
      
      <mask-confirm></mask-confirm>      
      <mask-prize></mask-prize>

      <div class="header"
      :style=" 'background-image:url('+img+'/main/header.jpg);background-size:100% auto;' ">
      </div>
			
      <div class="text__"
      :style=" 'background-image:url('+img+'/main/bg_middle.png);background-size:100% auto;' ">
        <p class="p0">
          {{intro}}
        </p>
        <p class="p1">
          <span class="span0">原价{{priceOriginal}}元</span><span class="span1"> 打包活动价{{price}}元</span>
        </p>
      </div>

      <div class="part_middle"
      :style=" 'background-image:url('+img+'/main/bg_middle.png);background-size:100%;' ">
        <div class="Showcase">
          <div class="book" v-for="a in books"
          @click="$store.dispatch({type:'TO_BOOK',bid:a.bid})">
    				<div class="part_left">
    				  <img class="cover" :src="a.cover">
    				</div>
    				<div class="part_right">
              <p class="title">{{a.title}}</p>
              <p class="author">{{a.author}}</p>
              <p class="intro">{{a.intro}}</p>
    				</div>
          </div>
  			</div>
      </div>

      <img class="bg_bottom" :src=" img+'/main/bg_bottom.png' "/>

      <rules-plain></rules-plain>
			<fixed-footer></fixed-footer>
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
        height: 3.92rem;
        overflow: hidden;
      }
      .text__ {
        .p0 {
          margin-bottom: 0.08rem;
          padding: 0 1.04rem;
          font-size: 0.24rem;
          line-height: 0.4rem;
          text-align: center;
          color: #666666;
        }
        .p1 {
          font-size: 0.32rem;
          text-align: center;
          .span0 {
            text-decoration: line-through;
          }
          .span1 {
            color: #fa554e;
          }
        }
      }
      .part_middle {
        width: 100%;
        overflow: hidden;
      }
			.Showcase {
				width: 6.78rem;
				margin: auto; margin-top: 0.27rem;
				background: #f4e5d6;
        .book {
          width: 100%; height: 2.1rem;
          overflow: hidden;
  				.part_left {
  					float: left;
  					width: 2rem;
  					.cover {
  						width: 1.37rem; height: 1.83rem;
              margin-left: 0.29rem;
              box-shadow: 0 0.05rem 0.15rem #beb3a7;
  					}
  				}
  				.part_right {
  					float: left;
            .title {
              margin-bottom: 0.08rem;
              font-size: 0.32rem;
            }
            .author {
              margin-bottom: 0.2rem;
              font-size: 0.26rem;
            }
            .intro {
              width: 4.36rem;
              text-align: justify;
              line-height: 0.33rem;
              font-size: 0.24rem;
              color: #999999;
            }
  				}
        }
			}
      .bg_bottom {
        width: 100%;
      }
			// .header {
			// 	width: 100%;
			// 	overflow: hidden;
			// 	.btn_invite {
			// 		width: 5.2rem;
			// 		margin: auto;
			// 	}
			// 	.btn_to_app {
			// 		width: 5.2rem;
			// 		margin: auto;
			// 	}
			// }
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
			MaskWeibo: require('components/MaskWeibo.vue'),
			MaskWechat: require('components/MaskWechat.vue'),

			FixedFooter: require('components/_two/FixedFooter.vue'),
      MaskConfirm: require('components/_two/MaskConfirm.vue'),
			MaskPrize: require('components/_two/MaskPrize.vue'),

      RulesPlain: require('components/_two/RulesPlain.vue')
		},
		data: function(){
			return {};
		},
		computed: {
      intro() {
        return this.$store.state.intro;
      },
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
			this.$store.dispatch({type:'INIT_TWO'});
		},
		methods: {
			touchmove: function(e){
				e.preventDefault();
			}
		}
	}
</script>