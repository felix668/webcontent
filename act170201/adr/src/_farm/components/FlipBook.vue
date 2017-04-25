<style lang="less" scoped>
	.FlipBook {
		background: white;
		.barrr {
			position: fixed; left: 0; top: 0;
			width: 100%; height: 0;
		}
		.book112 {
			margin-left: -100%;
			.page11 {
				position: relative;
				background: #e5eefa;
				
			}
		}
	}
</style>

<template>
	<div class="FlipBook">
		<!-- <div class="barrr" ref="bar"></div> -->
		<div class="book112" ref="book">
			
			<div class="page11"
			:style=" 'background-image:url('+img+'/bg_0.png);background-size:100% auto;' ">
				<page0 :img="img" :change="change" :dispatch="dispatch"></page0>
			</div>
			<div class="page11"></div>

			<div class="page11"
			:style=" 'background-image:url('+img+'/bg_1.png);background-size:100% auto;' ">
				<page1 :img="img" :change="change" :dispatch="dispatch"></page1>
			</div>
			<div class="page11"></div>
			
			<div class="page11"
			:style=" 'background-image:url('+img+'/bg_2.png);background-size:100% auto;' ">
				<page2 :img="img" :change="change" :dispatch="dispatch"></page2>
			</div>
			<div class="page11"></div>
			
			<div class="page11">
				<end-page :img="img" :change="change" :dispatch="dispatch"></end-page>
			</div>
		
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		components: {

			SnowConfetti: require('./SnowConfetti.vue'),
			Page0: require('./Page0.vue'),
			Page1: require('./Page1.vue'),
			Page2: require('./Page2.vue'),
			EndPage: require('./EndPage.vue'),
			Fog: require('./Fog.vue')
		},
		props: {
			change: {},
			img: {},
			dispatch: {}
		},
		watch: {
			'change.stage': function(nv){
				if(nv===1){
					// $('.book112').turn('peel','br');
				}
			},
			'change.page': function(nv,ov){
				console.log(nv,ov)
				if( nv>ov ){
					$('.book112').turn('next');
				}else if( nv<ov ){
					$('.book112').turn('previous');
				}
				// $('.book112').turn('peel','br');
			}
		},
		mounted: function(){
			setTimeout(()=>{
				console.log(rem.val*7.5)
				$('.book112').turn({
					width: rem.val*7.5*2,
					height: rem.h,
					elevation: 50,
					gradients: true,
					autoCenter: false
				});
				// $('.book112').turn('peel','br');
			},500);
		},
		methods: {
			
		}
	}
</script>