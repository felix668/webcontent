<template>
	<div class="EndPage"
	:style=" 'background:url('+img+'/bg_1.png);background-size:100% auto;' "
	:class=" class_ "
	@touchstart="touchstart($event)"
	@touchmove="touchmove($event)"
	@touchend="touchend($event)"
	@touchcancel="touchend($event)">
		<img class="more" :src=" img+'/more.png' "/>
		<div class="links" v-if="id!==2">
			<div class="chicken_book"
			v-for="a in others"
			:style=" 'background:url('+img+'/chicken_book.png);background-size:100% auto;' "
			@click="act({type:'TO_PAGE',id:a.id})">
				<p class="name">{{a.name}}{{!hasDiscount?'免费':'折扣'}}</p>
			</div>
		</div>
		<div class="links_2" v-if="id===2">
			<div class="chicken_book"
			v-for="a in others"
			:style=" 'background:url('+img+'/chicken_book.png);background-size:100% auto;' "
			@click="act({type:'TO_PAGE',id:a.id})">
				<p class="name">{{a.name}}{{!hasDiscount?'免费':'折扣'}}</p>
			</div>
		</div>
		<img class="replay" :src=" img+'/replay.png' "
		@click="act({type:'TO_PAGE',id:id})"/>

		<rules
		:id="id"
		:has-discount="hasDiscount"></rules>
		<div class="copyright">
			本活动最终解释权归QQ阅读所有
		</div>
	</div>
</template>

<style lang="less" scoped>
	.EndPage {
		position: relative;
		//position: absolute; left: 0; top: 0;
		width: 100%; height: 100vh;
		background: orange;
		z-index: 199;
		//transition: transform 1s;
		overflow: hidden;
		@color: #633e3c;
		.copyright {
			position: absolute; left: 0; bottom: 0;
			width: 100%;
			padding-top: 0.5rem;
			padding-bottom: 0.5rem;
			font-size: 0.24rem;
			text-align: center; color: @color;
		}

		.more {
			width: 2.73rem;
			margin: auto;
			margin-top: 0.76rem;
			margin-bottom: 0.42rem;
		}
		.links {
			display: table;
			margin: auto;
			margin-bottom: 0.46rem;
			overflow: hidden;
			.chicken_book {
				float: left;
				width: 1.96rem; height: 2.32rem;
				&:nth-child(1) {
					margin-right: 0.7rem;
				}
				.name {
					width: 100%;
					margin-top: 1.58rem;
					line-height: 0.52rem;
					font-size: 0.3rem;
					text-align: center;
					color: #d74e5b;
				}
			}
		}
		.links_2 {
			display: table;
			margin: auto;
			margin-bottom: 0.46rem;
			overflow: hidden;
			.chicken_book {
				float: left;
				width: 1.96rem; height: 2.32rem;
				&:nth-child(1) {
					margin-right: 0.33rem;
				}
				&:nth-child(2) {
					margin-right: 0.33rem;
				}
				.name {
					width: 100%;
					margin-top: 1.58rem;
					line-height: 0.52rem;
					font-size: 0.3rem;
					text-align: center;
					color: #d74e5b;
				}
			}
		}
		.replay {
			width: 3.95rem;
			margin: auto;
		}
	}
</style>

<script type="text/javascript">
	export default {
		props: {
			id: {},
			hasDiscount: {},
			act: {},

			img: {},
			others: {},
			loggedIn: {},
			stage: {}
		},
		components: {
			Rules: require('./Rules.vue')
		},
		data: function(){
			return {
				class_: '',

				Y0: 0,
				Y2: 0
			}
		},
		watch: {
			// stage: function(nv,ov){
			// 	if( ov===1&&nv===2 ){
			// 		this.class_ = 'enter';
			// 	}
			// }
		},
		mounted: function(){
			//this.act({type:'STAGE',i:1})
		},
		methods: {
			touchstart: function(e){
				e.stopPropagation();
				this.Y0 = e.changedTouches[0].pageY;
			},
			touchmove: function(e){
				e.preventDefault();
			},
			touchend: function(e){
				e.stopPropagation();
				this.Y2 = e.changedTouches[0].pageY;
				var distance = this.Y2-this.Y0;
				if( distance>3 ){
					this.act({
						type: 'SWITCH',
						direction: 'down'
					});
				}
			}
		}
	}
</script>