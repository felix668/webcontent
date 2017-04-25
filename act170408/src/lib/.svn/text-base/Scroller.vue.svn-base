<style lang="less" scoped>
	.Scroller {
		@grey: #b1b1b1;
		box-sizing: border-box;
		width: 90%;
		margin: auto;
		margin-top: 0.42rem;
		margin-bottom: 0.25rem;
		background: orange;
		overflow: hidden;
		.content {
			//width: 6.56rem; 
			width: 100%;
			margin: auto;
			//border-bottom: 1px solid @grey;
			.long_bar {
				position: relative;
				width: 1000%;
				// width: 9.75rem;
				.train {
					position: relative;
					float: left;
					// padding-left: 0.3rem;
					overflow: hidden;
					//padding-right: 0.05rem;
					//width: 10.42rem;
					//background: orange;
					//transition: transform 1000ms;
					.item {
						position: relative;
						float: left;
						width: 1.6rem; height: 2rem;
						margin-right: 0.26rem;
						background: red;
						//overflow: hidden;
						
						.title {
							width: 100%;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
							margin-bottom: 0.12rem;
							font-size: 0.28rem;
							text-align: left;
							color: #805447;
						}
						
					}
				}
			}
		}
	}
</style>

<template>
	<div class="Scroller">
		<div class="content"
		ref="content">
			<div class="long_bar">
				<div class="train"
				:style=" 'transition:'+transition+';transform:translate3d('+trainOffsetX+'px,0,0);' "
				@touchstart="touchstart($event)"
				@touchmove="touchmove($event)"
				@touchend="touchend($event)"
				@touchcancel="touchend($event)"
				ref="train">

					<div class="item"
					v-for="(a,i) in items">
						<p class="title">{{i}}</p>
					</div>
					<div style="clear:both"></div>

				</div>
			</div>
		</div>
	</div>	
</template>

<script type="text/javascript">
	export default {
		props: {
			items: {
				default: function(){
					return [{},{},{},{},{},{},{}]
				}
			},
			img: {},
			discount: {},
			co: {},
			act: {}
		},
		computed: {
			books: function(){
			}
		},
		data: function(){
			return {
				contentW: 0,
				trainW: 0,

				switching: false,
				inCycle: false,
				moveCount: 0,
				scrolling: false,
				trainOffsetX: 0,
				offset: 0,
				x0: 0,
				X1: 0,
				X2: 0,

				Y0: 0,
				Y1: 0,
				Y2: 0,

				currentOne: 0,
				transition: '0s',
				offset: 0
			}
		},
		watch: {

		},
		mounted: function(){
			var self = this;
			// setTimeout(()=>{
			// 	this.setWidth();
			// },50)
			// if( this.co<4 ){
			// 	this.transition = '0s';
			// 	this.trainOffsetX = 0;
			// }else{
			// 	this.transition = '0s';
			// 	this.trainOffsetX = -(this.trainW-this.contentW);
			// };
			// window.addEventListener('load',()=>{
			// 	setTimeout(()=>{
			// 		this.setWidth();
			// 	},50)
			// });
			window.addEventListener('resize',()=>{
				setTimeout(()=>{
					this.setWidth();
				},50)
			})
		},
		methods: {
			setWidth: function(){
				//var elem = this.$refs.train;
				this.contentW = Number( document.defaultView.getComputedStyle( this.$refs.content ).width.replace(/px/,'') );
				this.trainW = Number( document.defaultView.getComputedStyle( this.$refs.train ).width.replace(/px/,'') );
				//console.log(this.contentW,this.trainW)
				// this.width = width;
				// this.transition = '0s';
				//this.trainOffsetX = -this.currentOne*this.width;	
			},
			touchstart: function(e){
				//console.log(this.inCycle)
				this.setWidth();
				e.stopPropagation();
				if( !this.inCycle ){
					// begin a new cycle
					this.inCycle = true;
					// reset states of this touch cycle
					this.moveCount = 0;
					this.scrolling = false;
					this.transition = '0s';
					
					this.X0 = this.X1 = e.changedTouches[0].pageX;
					this.Y0 = this.Y1 = e.changedTouches[0].pageY;
				};
			},
			touchmove: function(e){
				e.stopPropagation();
				if( this.inCycle ){
					this.moveCount++;
					if( !this.scrolling ){
						// decide if it can scroll at the first touchmove
						if( this.moveCount===1 ){
							this.X2 = e.changedTouches[0].pageX;
							this.Y2 = e.changedTouches[0].pageY;
							var distanceY = this.Y2 - this.Y1;
							var distanceX = this.X2 - this.X1;
							if( Math.abs(distanceY)>Math.abs(distanceX) ){
								this.scrolling = true;
							}else{
								// it is essential to preventDefault at the first touchmove
								// when using vanillajs or the subsequent touch-events would
								// not get triggered
								e.preventDefault();
							}
						}

						if( !this.scrolling ){
							this.X2 = e.changedTouches[0].pageX;
							var distance = this.X2-this.X1;
							this.X1 = this.X2;
							this.transition = '0s';
							if( this.trainOffsetX+distance>=0 ){
								this.trainOffsetX = 0;
							}else if( (this.trainOffsetX+distance)<=-(this.trainW-this.contentW) ){
								this.trainOffsetX = -(this.trainW-this.contentW);
							}else{
								this.trainOffsetX += distance;
							}
							this.offset += distance;
							//console.log(this.trainOffsetX)
						}
						e.preventDefault();
					}else{
						e.preventDefault();
					}
				}
			},
			touchend: function(e){
				e.stopPropagation();
				if( this.inCycle&&!this.scrolling ){
					this.X2 = e.changedTouches[0].pageX;
					var distance = this.X2-this.X1;
					//this.transition = '0s';
					this.trainOffsetX += distance;
					this.switching = false;
					this.inCycle = false;
				}else{
					this.Y2 = e.changedTouches[0].pageY;
					var distanceY = this.Y2 - this.Y0;
					//console.log(distanceY)
					this.act({
						type: 'SWITCH',
						direction: (function(){
							if( distanceY>3 ){
								return 'down';
							}else if( distanceY<-3 ){
								return 'up'
							}else{
								return ''
							};
						})()
					});
					this.switching = false;
					this.inCycle = false;
				}
			}
		}
	}
</script>