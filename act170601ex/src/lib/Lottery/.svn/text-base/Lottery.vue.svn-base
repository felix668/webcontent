<template>
	<div class="Lottery">
		<div class="content">
			<div class="btn" 
			:style=" pressed?'background:#ffce20;border-radius: 0.1rem;':'background: url('+img+'/lottery/draw.png) no-repeat;background-size: 100%;' " 
			@touchstart="drawtouchstart"
			@touchmove="drawtouchmove"
			@touchend="drawtouchend"
			@touchcancel="drawtouchcancel"
			@click="click">
			<p>抽奖</p>
			<p>您有(<span class="chance">{{chance||0}}</span>)次抽奖机会</p>
		</div>
		<div v-for="(a,i) in trophies" 
		class="trophy"
		:class=" 'trophy'+i+(i===current?' active':'') ">
			<div class="table">
				<div class="cell">
					<img :src=" img+'/lottery/'+i+(i===4&&ios?'_ios':'')+'.png' "/>
				</div>
			</div>
			<p class="name">{{a.name}}</p>
		</div>
	</div>
</template>

<style lang="less" scoped>
	.Lottery {
		position: relative;
		width: 6.6rem; height: 5.68rem;
		margin: auto;
		margin-bottom: 0.4rem;
		background: #fdfcf9;
		overflow: hidden;
		.lottery-bg {
			width: 100%;
		}
		.content {
			box-sizing: border-box;
			position: absolute; left: 0; top: 0;
			width: 100%; height: 100%;
			.toMine {
				position: absolute; right: 0.12rem; bottom: 0;
				width: 1.72rem; height: 0.58rem;
				display: block;
			}
			.trophy {
				position: absolute;
				box-sizing: border-box;
				width: 1.98rem; height: 1.68rem;
				border-radius: 0.1rem;
				border: 1px solid #eee3c8;
				overflow: hidden;
				background: #fdfcf9;
				.table {
					display: table;
					width: 100%; height: 1.26rem;
					.cell {
						width: 100%; height: 100%;
						display: table-cell;
						vertical-align: middle;
						text-align: center;
						img {
							vertical-align: middle;
							margin: auto;
							//display: inline-block;
						}
					}
				}
				/*
				img {
					margin: auto;
					margin-top: 0.06rem;
				}
				*/
				.name {
					position: absolute; left: 0; top: 1.26rem;
					width: 100%;
					font-size: 0.24rem;
					color: #cfb268;
					text-align: center;
				}
			}
			.trophy.active {
				background-size: 100%;
				background: #f5efe1;
				border: 1px solid #cfb268;
			}
			.trophy0 {
				left: 0.18rem; top: 0.14rem;
				img {width: 1.23rem;}
			}
			.trophy1 {
				left: 2.3rem; top: 0.14rem;
				img {width: 0.85rem;}
			}
			.trophy2 {
				left: 4.4rem; top: 0.14rem;
				img {width: 0.78rem;}
			}

			.trophy3 {
				left: 4.4rem; top: 2rem;
				img {width: 1rem;}
			}

			.trophy4 {
				left: 4.4rem; top: 3.82rem;
				img {width: 1.22rem;}
			}
			.trophy5 {
				left: 2.3rem; top: 3.82rem;
				img {width: 1.22rem;}
			}
			.trophy6 {
				left: 0.18rem; top: 3.82rem;
				img {width: 0.95rem;}
			}

			.trophy7 {
				left: 0.18rem; top: 2rem;
				img {width: 1rem;}

			}
			.btn {
				position: absolute; left: 2.3rem; top: 2rem;
				width: 1.98rem; height: 1.98rem;
				font-size: 0.52rem;
				p {
					text-align: center; color: #ee5f47;
				}
				p:nth-child(1) {
					margin-top: 0.42rem;
					//margin-bottom: 0.14rem;
					font-size: 0.5rem;
					color: #333333;
					font-weight: bold;
				}
				p:nth-child(2) {
					font-size: 0.22rem;
					color: #86723d;
					.span {
						font-size: 0.22rem;
						color: #86723d;
					}
				}
			}
		}
	}
</style>

<script type="text/javascript">
	export default {
		props: {
			img: {},
			chance: {},
			result: {},
			act: {},
			ios: {}
		},
		data: function(){
			var self = this;
			return {
				pressed: false,
				inDrawing: false,
				current: 0,
				trophies: [{
					name: '明星周边'
				},{
					name: 'QQ阅读公仔'
				},{
					name: 'iPad'
				},{
					name: '感谢参与'
				},{
					name: (function(){
						return self.ios?'阅券':'书券'
					})()
				},{
					name: '入场资格邀请函'
				},{
					name: '线香礼盒'
				},{
					name: '感谢参与'
				}]
			}
		},
		watch: {
			result: function(nv){
				this.fake(nv.res);
			}
		},
		computed: {
		},
		methods: {
			drawtouchstart: function(){

			},
			drawtouchmove: function(){

			},
			drawtouchend: function(){

			},
			drawtouchcancel: function(){

			},
			click: function(){
				if( !this.inDrawing ){
					if( this.chance===0 ){
						Local.showToast('暂无抽奖机会~');
					}else if( this.chance>0 ){
						this.inDrawing = true;
						this.act({type:'DRAW'});
					}
				};
			},
			fake: function( res ){
				var self = this;
				var cycle = 0;
				var duration = 100;
				function move(){
					self.current++;
					if(self.current === 8){
						self.current = 0;
						cycle++;
					};
					duration += 10;
					if( cycle===3&&self.current===res ){
						setTimeout(function(){
							self.act({type:'SHOW_MASK'})
							self.inDrawing = false;
						},1000);
					}else{
						setTimeout(move,duration);
					}
				}
				setTimeout(move,duration);
			}
		}
	}
</script>