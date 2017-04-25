<template>
	<div class="Scroller">
		<div class="content"
		ref="content">
			<div class="train"
			:class=" co>=4?'right':'' "
			:style=" 'transition:'+transition+';transform:translate3d('+trainOffsetX+'px,0,0);' "
			@touchstart="touchstart($event)"
			@touchmove="touchmove($event)"
			@touchend="touchend($event)"
			ref="train">
				<div class="triangle"
				:style=" 'transform: translate3d('+co*100+'%,0,0);' ">
					<img :src=" 'img/share/triangle.png' "/>
				</div>
				<div class="item"
				v-for="(a,i) in items">
					<div class="upper">
						<div class="avatar" :class=" i===co?'active':'' "
						@click="act({type:'SWITCH',i:i})">
							<img :src=" 'img/cards/'+i+'.jpg' "/>
						</div>
					</div>
					<p class="name">{{a.name}}</p>
				</div>
				<div style="clear:both"></div>
			</div>
		</div>
	</div>	
</template>

<style lang="less" scoped>
	.Scroller {
		@grey: #b1b1b1;
		width: 100%;
		margin-bottom: 0.25rem;
		//background: orange;
		overflow: hidden;
		.content {
			width: 6.56rem; margin: auto;
			//border-bottom: 1px solid @grey;
			.train {
				position: relative;
				width: 10.42rem;
				//transition: transform 1000ms;
				&.right {
					transform: translate3d(-35%,0,0);
				}
				.triangle {
					position: absolute; left: 0; bottom: 0;
					width: 1.3rem;
					//background: orange;
					transition: transform 300ms;
					img {
						width: 0.3rem; margin: auto;
					}
				}
				.item {
					float: left;
					width: 1.3rem;
					.upper {
						height: 1.4rem;
						overflow: hidden;
						.avatar {
							box-sizing: border-box;
							width: 1.04rem; height: 1.04rem;
							margin: auto; margin-top: 0.12rem;
							border: 0.04rem solid white;
							border-radius: 1000px;
							overflow: hidden;
							transition: transform 500ms;
							img {
								width: 100%; height: 100%;
							}
							&.active {
								transform: scale(1.2);
							}
						}
					}
					.name {
						margin-bottom: 0.3rem;
						font-size: 0.24rem; text-align: center; color: #636363;
					}
				}
			}
		}
	}
</style>

<script type="text/javascript">
	export default {
		props: {
			items: {},
			co: {},
			act: {}
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
				X1: 0,
				X2: 0,
				Y1: 0,
				Y2: 0,

				currentOne: 0,
				transition: '0s',
				offset: 0
			}
		},
		watch: {
			co: function(n){
				if(n<4){
					this.transition = '1000ms';
					this.trainOffsetX = 0;
				}else{
					this.transition = '1000ms';
					this.trainOffsetX = -(this.trainW-this.contentW);
				}
			}
		},
		mounted: function(){
			var self = this;
			this.setWidth();
			// if( this.co<4 ){
			// 	this.transition = '0s';
			// 	this.trainOffsetX = 0;
			// }else{
			// 	this.transition = '0s';
			// 	this.trainOffsetX = -(this.trainW-this.contentW);
			// };
			window.addEventListener('load',()=>{
				this.setWidth();
			});
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
				// this.width = width;
				// this.transition = '0s';
				//this.trainOffsetX = -this.currentOne*this.width;	
			},
			touchstart: function(e){
				console.log(this.inCycle)
				e.stopPropagation();
				if( !this.inCycle ){
					// begin a new cycle
					this.inCycle = true;
					// reset states of this touch cycle
					this.moveCount = 0;
					this.scrolling = false;
					this.transition = '0s';
					
					this.X0 = this.X1 = e.changedTouches[0].pageX;
					this.Y1 = e.changedTouches[0].pageY;
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
					this.switching = false;
					this.inCycle = false;
				}
			}
		}
	}
</script>