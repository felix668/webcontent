<template>
	<div class="MaskPrize"
	@touchmove="touchmove">
		<div class="content_666">
			<div class="content_667">
				<img class="close" :src=" img+'/lottery/close.png' "
				@click="act({type:'HIDE_MASK_PRIZE'})"/>


				<div class="kkk" v-show="prize.id!==3&&prize.id!==7&&prize.id!==4&&prize.id!==1000">
					<div class="cong">
						恭喜您获得{{prize.name}}
					</div>
					<img class="p_img" :src=" img+'/lottery/'+prize.id+'.png' ">
					<p class="p0">请填写您的联系方式，便于我们的工作人员与您取得联系</p>
					<div class="to_contact"
					@click="act({type:'TO_CONTACT'})">
						填写联系方式
					</div>
					<p class="p1">多次获奖填写1次地址即可</p>
				</div>
				<div class="kkk" v-show="prize.id===3||prize.id===7">
					<div class="thanks">感谢参与</div>
				</div>


				<div class="kkk" v-show="prize.id===4">
					<div class="cong">
						恭喜您获得200{{ios?'阅券':'书券'}}
					</div>
					<img class="p_img" :src=" img+'/lottery/'+prize.id+(ios?'_ios':'')+'.png' ">
					<p class="pttt">{{ios?'阅券':'书券'}}稍后会直接发放到您的账户，请到[我的账户]中查看</p>
				</div>
				<div class="kkk" v-show="prize.id===1000">
					<div class="cong">
						恭喜您获得20{{ios?'阅券':'书券'}}
					</div>
					<img class="p_img" :src=" img+'/lottery/4'+(ios?'_ios':'')+'.png' ">
					<p class="pttt">{{ios?'阅券':'书券'}}稍后会直接发放到您的账户，请到[我的账户]中查看</p>
				</div>


			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
	.MaskPrize {
		display: table;
		position: fixed; left: 0; top: 0;
		width: 100%; height: 100%;
		background: rgba(0,0,0,0.5);
		z-index: 9999;
		.content_666 {
			display: table-cell;
			vertical-align: middle;
			position: relative;
			width: 100%; height: 100%;
			.content_667 {
				position: relative;
				box-sizing: border-box;
				width: 5.4rem;
				border-radius: 0.05rem;
				background: white;
				margin: auto;
				overflow: hidden;
				.kkk {
					overflow: hidden;
				}
				.thanks {
					font-size: 0.5rem; color: #cfb268;
					text-align: center;
					line-height: 3rem;
				}
				.cong {
					margin-top: 0.7rem; margin-bottom: 0.2rem;
					font-size: 0.5rem; color: #cfb268;
					text-align: center;
				}
				.p_img {
					height: 1.25rem;
					margin: auto;
					margin-bottom: 0.2rem;
				}
				.p0 {
					box-sizing: border-box;
					width: 100%;
					padding: 0 0.42rem;
					margin-bottom: 0.36rem;
					font-size: 0.28rem; color: #717171; line-height: 0.4rem;
				}
				.pttt {
					box-sizing: border-box;
					width: 100%;
					padding: 0 0.42rem;
					margin-bottom: 0.74rem;
					font-size: 0.28rem; color: #717171; line-height: 0.4rem;
				}
				.to_contact {
					width: 3rem; height: 0.75rem;
					margin: auto;
					margin-bottom: 0.16rem;
					background: #cfb268;
					color: white;
					text-align: center;
					font-size: 0.28rem; line-height: 0.75rem;
				}
				.p1 {
					box-sizing: border-box;
					width: 100%;
					padding: 0 0.42rem;
					margin-bottom: 0.74rem;
					font-size: 0.28rem; color: #d07642;
					text-align: center;
				}
				.close {
					position: absolute; right: 0.12rem; top: 0.12rem;
					width: 0.44rem;
				}
			}
		}
	}
</style>

<script>
export default {
	components: {
	},
	props: {
		img: {},
		prize: {},
		ios: {},
		act: {}
	},
	data: function(){
		return {
		}
	},
	computed: {

	},
	methods: {
		touchmove: function(e){
			e.stopPropagation();
		}
	}
}
</script>
