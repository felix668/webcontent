<template>
	<div class="Focus" ref="Focus">

		<img class="logo" :src=" img+'/test/logo.png' "/>

		<div class="content">
			<img class="bg_focus" :src=" img+'/test/bg_focus_2.png' "
			:class=" bg_focus "/>
			<div class="group"
			ref="group">
				<img class="man"
				:src=" img+'/test/man.png' "/>
				<img class="penguin" 
				ref="penguin"
				:src=" img+'/test/penguin_2.png' "/>
				<img class="shelf" :src=" img+'/test/shelf_2.png' "/>
			</div>
		</div>

		<img class="penguin_0" 
		ref="penguin_0"
		:class=" penguin_0 " :src=" img+'/test/penguin_0_2.png' "/>
		<img class="penguin_1"
		ref="penguin_1"
		:class=" penguin_1 " :src=" img+'/test/penguin_1_2.png' "/>
		
		<img class="title_0" :src=" img+'/test/title_0.png' "
		ref="title_0"/>
		<img class="title_1" :src=" img+'/test/title_1.png' "
		ref="title_1"/>


		<img class="camera"
		:src=" img+'/test/camera.png' "/>
		
		<p class="skip"
		@click="CHANGE_STAGE">跳过 ></p>
	</div>
</template>

<style lang="less" scoped>
	.Focus {
		position: relative; left: 0; top: 0;
		width: 100%; height: 100vh;
		background: white;
		z-index: 99;
		.logo {
			position: absolute; left: 0.64rem; top: 0;
			width: 0.78rem;
			z-index: 99;
		}
		.content {
			position: relative; 
			width: 100%; height: 100%;
			.bg_focus {
				width: 100%;
				//filter: blur(3px);
				&.active {
					animation: bg_focus 2s forwards;
				}
				@keyframes bg_focus {
					0% {
						filter: blur(3px);
					}
					100% {
						filter: blur(0px);
					}
				}
			}
			.group {
				position: absolute; left: 0; top: 0;
				width: 100%; height: 100%;
				.man {
					position: absolute; left: 2.96rem; top: 4.85rem;
					width: 0.97rem;
				}
				.penguin {
					position: absolute; left: 3.6rem; top: 5.76rem;
					width: 1.02rem;
				}
				.shelf {
					position: absolute; left: 0; top: 0;
					width: 7.33rem;
				}
			}
			
		}

		.title_0 {
			position: absolute; left: 1.96rem; top: 8.55rem;
			width: 3.58rem;
			opacity: 0;
		}
		.title_1 {
			position: absolute; left: 1.42rem; top: 9.36rem; 
			width: 4.66rem;
			opacity: 0; 
		}

		.penguin_0 {
			position: absolute; right: 0; top: 4.58rem;
			width: 2.18rem;
			z-index: 99;
			//transform-origin: 100% 100%;
			&.active {
				display: block;
				animation: penguin_0 2s forwards;
			}
			@keyframes penguin_0 {
				0% {
					transform: translate3d(0,0,0) rotateZ(50deg);
				}
				50% {
					transform: translate3d(0,0,0) rotateZ(0);
				}
				100% {
					transform: translate3d(200%,0,0) rotateZ(0);
				}
			}
		}
		.penguin_1 {
			position: absolute; left: 0; top: 4.28rem;
			width: 1.55rem;
			//transform-origin: 0% 100%;
			&.active {
				display: block;
				animation: penguin_1 2s forwards;
			}
			@keyframes penguin_1 {
				0% {
					transform: translate3d(-100%,0,0) rotateZ(-50deg);
				}
				50% {
					transform: translate3d(0,0,0) rotateZ(0);
				}
				100% {
					transform: translate3d(-200%,0,0);
				}
			}
		}
		.camera {
			position: absolute; left: 0.47rem; top: 0.68rem;
			width: 6.56rem;
		}
		&.leave {
			animation: 500ms leave forwards;
		}
		@keyframes leave {
			0% {
				opacity: 1;
			}
			100% {
				opacity: 0.01;
			}
		}
		.skip {
			position: absolute; right: 0.2rem; top: 0.2rem;
			font-size: 0.3rem;
		}
	}
</style>

<script>
	export default {
		props: ['stage','act'],
		computed: {
			img(){
				return this.$store.state.img;
			}
		},
		components: {
		},
		data: function(){
			return {
				penguin_0: '',
				penguin_1: '',
				bg_focus: ''
			}
		},
		created: function(){
			
		},
		watch: {
			stage: function(new_val){
				if( new_val===0 ){
					this.animate();
				}
			}
		},
		mounted: function(){
			this.animate();
		},
		methods: {
			animate: function(){
				var self = this;

				var penguin_0 = this.$refs.penguin_0;
				var penguin_1 = this.$refs.penguin_1;
				var penguin = this.$refs.penguin;
				var title_0 = this.$refs.title_0;
				var title_1 = this.$refs.title_1;
				var Focus = this.$refs.Focus;
				var group = this.$refs.group;
				
				var tl3 = new TimelineMax();
				tl3.fromTo( group,1.5,{
					transformOrigin: '50% 50%',
					scale: 0.98
				},{
					scale: 1.02
				}).to( group,0.8,{
					scale: 1
				})

				var tl2 = new TimelineMax();
				tl2.to( title_0,1,{
					opacity: 1
				}).to( title_1,1,{
					opacity: 1
				})

				var tl = new TimelineMax();
				tl.fromTo( penguin_0,0.6,{
					transformOrigin: '100% 100%',
					rotation: '50deg'
				},{
					rotation: '0'
				}).to( penguin_0,0.5,{
					x: '200%'
				}).fromTo( penguin_1,0.6,{
					transformOrigin: '0% 100%',
					x: '-100%',
					rotation: '-50deg'
				},{
					x: '0%',
					rotation: 0
				}).to( penguin_1,0.5,{
					x: '-200%'
				}).fromTo( penguin,0.5,{
					y: '50%'
				},{
					y: '0%',
					onStart: function(){
					},
					ease: Elastic
				}).fromTo( Focus,0.3,{
					opacity: 1
				},{
					opacity: 0,
					delay: 0.3
				}).to( Focus,0.5,{
					opacity: 0.7,
					onComplete: this.CHANGE_STAGE.bind(this)
				})

				// setTimeout(()=>{
				// 	this.penguin_0 = 'active';
				// 	setTimeout(()=>{
				// 		this.penguin_1 = 'active';
				// 		setTimeout(()=>{
				// 			this.bg_focus = 'active';
				// 		},2000);
				// 	},2000);
				// },1000)
			},
			CHANGE_STAGE: function(){
				this.$store.dispatch({
					type: 'CHANGE',
					to: 1
				})
			}
		}
	}
</script>