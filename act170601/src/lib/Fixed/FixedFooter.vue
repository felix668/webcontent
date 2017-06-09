<template>
	<div class="FooterFixed">
		<div class="fixed"
		:style=" 'background:url('+img+'/footer_fixed.png);background-size:100% auto;' ">
			
			<div class="share"
			v-if="share">
				<img class="text_download" :src=" img+'/text_download_2.png' "/>
				<div class="btn_download"
				@click="act({type:'TO_DOWNLOAD'})">
					下载QQ阅读
				</div>
				<div class="btn_open"
				@click="act({type:'TO_APP'})">
					打开QQ阅读
				</div>
			</div>

			<div class="not_share"
			v-if="!share">
<!-- 				<img class="line" :src=" img+'/line.png' "
				v-show="chance<=0"/> -->
	 			<div class="left_part"
	 			:style=" chance===0?'margin: 0.27rem auto;':'float:left;margin: 0.27rem 0.4rem 0 1.5rem;' ">
					<div class="info"
					v-show="n<2">
						<p v-show="n===0">每投2票<br/>可抽奖一次</p>
						<p v-show="n===1">已投1票<br/>再投1票可抽奖</p>
					</div>

					<countdown 
					:timeleft="timeleft"
					:img="img"
					v-show="n===2"></countdown>
				</div>
				
				<!-- <img class="toLottery"
				v-show="chance>0"
				:src=" img+'/to_draw.png' "
				@click="act({type:'TO_LOTTERY'})"> -->

				<div class="toLottery"
				v-show="chance>0"
				@click="act({type:'TO_LOTTERY'})">
					<img class="__btn" :src=" img+'/to_draw_2.png' ">
					<explosion :img="img"></explosion>
				</div>

			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
	.FooterFixed {
		width: 100%; height: 1.28rem;
		//background: orange;
		overflow: hidden;
		.fixed {
			position: fixed; left: 0; bottom: 0;
			width: 100%; height: 1.28rem;
			background: orange;
			.share {
				width: 100%; height: 100%;
				overflow: hidden;
				.text_download {
					float: left;
					width: 2.13rem;
					margin-left: 0.6rem; margin-top: 0.3rem; margin-right: 0.4rem;
				}
				.btn_download {
					float: left;
					width: 1.93rem; height: 0.69rem;
					margin-top: 0.3rem; margin-right: 0.2rem;
					font-size: 0.3rem; line-height: 0.69rem;
					text-align: center; color: white; background: #cfb268;
					border-radius: 0.05rem;
				}
				.btn_open {
					float: left;
					width: 1.93rem; height: 0.69rem;
					margin-top: 0.3rem; margin-right: 0.2rem;
					font-size: 0.3rem; line-height: 0.69rem;
					text-align: center; color: white; background: #cfb268;
					border-radius: 0.05rem;
				}
			}
			.not_share {
				width: 100%; height: 100%;
				overflow: hidden;
				.left_part {
					//float: left;
					width: 2.16rem;
					//margin-left: 1.5rem; margin-top: 0.27rem; margin-right: 0.4rem;
					.info {
						width: 100%;
						font-size: 0.3rem; color: #cfb268;
						text-align: center;
						p {
							font-size: 0.3rem; color: #cfb268;
							text-align: center;
						}
					}
					.line {
						width: 2.72rem;
						margin: auto; margin-top: 0.47rem;
					}
				}
				
				/*
				.toLottery {
					float: left;
					width: 1.9rem;
					margin-top: 0.05rem;
					color: white;
				}
				*/
				.toLottery {
					position: relative;
					float: left;
					width: 1.9rem;
					//margin-top: 0.05rem;
					color: white;
					overflow: hidden;
					.__btn {
						width: 100%;
						margin-top: 0.3rem;
					}
				}
			}
		}
	}
</style>

<script type="text/javascript">
	export default {
		props: {
			male: {},
			female: {},
			chance: {},
			share: {},
			act: {},
			timeleft: {},
			img: {}
		},
		components: {
			Countdown: require('./Countdown.vue'),
			Explosion: require('./Explosion.vue')
		},
		data: function(){
			return {

			}
		},
		computed: {
			n: function(){
				var n = 0;
				if( this.male>=0 ){
					n++;
				};
				if( this.female>=0 ){
					n++;
				};
				return n;
			}
		},
		watch: {

		},
		mounted: function(){
		},
		methods: {
		}
	}
</script>