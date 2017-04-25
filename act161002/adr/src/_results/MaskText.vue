<template>
	<div class="Mask" 
	v-show="show">
		<img class="close_fixed" :src=" 'img/results/close.png' "
		:style=" fixed?'position:fixed;top:0.4rem;right:0.45rem;':'position:absolute;right:0.45rem;top:0.4rem;' "
		@click="CLOSE_MASK"/>
		<div class="panel">
<!-- 			<div class="close_top"
			@click="CLOSE_MASK"></div> -->
			<img class="palm" :src=" 'img/results/palm.png' "/>
			<img class="panel_heading" :src=" 'img/results/panel_heading_2.png' "/>
			<div class="panel_body"
			style="background:url(img/results/panel_body.png);background-size:100% auto;">
				<p class="title---">{{title}}</p>
				<p class="article" v-html="text"></p>
			</div>
			<div class="footer_con">
<!-- 				<img class="close_bottom" :src=" 'img/results/close.png' "
				@click="CLOSE_MASK"/> -->
				<img class="panel_footer" :src=" 'img/results/panel_footer_2.png' "/>
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
	.Mask {
		position: absolute; left: 0; top: 0;
		width: 100%; height: 100%;
		background: rgba(0,0,0,0.8);
		z-index: 99;
		overflow: scroll;
		.close_fixed {
			top: 2.55rem; right: 0.32rem;
			width: 0.6rem; height: 0.6rem;
			z-index: 9999;
		}
		.panel {
			position: relative;
			width: 6.56rem; 
			margin: auto; margin-top: 0.3rem;
			margin-bottom: 0.5rem;
			overflow: hidden;
			.close_top {
				position: absolute; right: 0; top: 0;
				width: 0.6rem; height: 0.6rem;
				//background: red;
			}
			.palm {
				position: absolute; left: -0.32rem; top: 0.96rem;
				width: 1.39rem;
			}
			.panel_heading {
				width: 100%;
			}
			.panel_body {
				.title--- {
					padding-bottom: 0.2rem;
					font-size: 0.36rem;
					text-align: center;
				}
				.article {
					box-sizing: border-box;
					//overflow: scroll;
					width: 100%;
					padding: 0 0.42rem 0.3rem 0.46rem;
					font-size: 0.26rem; line-height: 0.5rem;
					text-indent: 0.52rem;
				}
			}
			.footer_con {
				position: relative;
				width: 100%;
				.close_bottom {
					position: absolute; left: 2.98rem;
					width: 0.6rem; height: 0.6rem;
				}
				.panel_footer {
					width: 100%;
				}
			}
		}
	}	
</style>

<script type="text/javascript">
	export default {
		props: ['show','act','title','text'],
		data: function(){
			return {
				fixed: true
			}
		},
		watch: {
			show: function(new_val){
				this.$el.scrollTop = 0;
			}
		},
		mounted: function(){
			//var a = document.defaultView.getComputedStyle(this.$el).width.replace(/px/,'');
			// var a = window.innerWidth;
			// var h = 205*a/720;
			// console.log(a)
			// this.$el.addEventListener('scroll',()=>{
			// 	var top = this.$el.scrollTop;
			// 	if( top>h ){
			// 		this.fixed = true;
			// 	}else{
			// 		this.fixed = false;
			// 	}
			// 	//console.log( this.$el.scrollTop )
			// })
		},
		methods: {
			CLOSE_MASK: function(){
				this.act({
					type: 'CLOSE_MASK'
				})
			}
		}
	}
</script>