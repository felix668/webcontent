<template>
	<div class="BookBlock"
	:style=" 'background:url('+img+'/bg_1.png);background-size:100% auto;' "
	:class=" class_ "
	@touchstart="touchstart($event)"
	@touchmove="touchmove($event)"
	@touchend="touchend($event)"
	@touchcancel="touchend($event)">

		<img class="hand" :src=" img+'/hand.png' "
		:class=" hand "/>

		<div style="width:100%;height:0.5rem"></div>
		<div class="header" :style=" 'background:url('+img+'/header_0.png);background-size:100% 100%;' "
		v-if="id!==1">
			<div class="header-title_0"
			v-if="id!==2&&!hasDiscount">
				<span>{{count}}</span>本{{name}}书限免<span>{{days}}</span>天
			</div>
			<div class="header-title_0"
			v-if="id!==2&&hasDiscount">
				<span>{{count}}</span>本{{name}}书全场<span>{{discount}}</span>购
			</div>
			<div class="header-title_0"
			v-if="id===2">
				金牌好书 <span>包月会员</span>专享
			</div>
		</div>
		<div class="header" :style=" 'background:url('+img+'/header.png);background-size:100% 100%;' "
		v-if="id===1">
			<div class="header-title"
			v-if="!hasDiscount">
				<span>{{count}}</span>本{{name}}书限免<span>{{days}}</span>天
			</div>
			<div class="header-title"
			v-if="hasDiscount">
				<span>{{count}}</span>本{{name}}书全场<span>{{discount}}</span>购
			</div>
			<div class="bookClass">
				{{books.length>0?books[current].className:'--'}}
			</div>
		</div>
		<div class="container">
			<div class="bb-custom-wrapper">
			
				<div id="bb-bookblock" class="bb-bookblock">

					<div class="bb-item"
					v-for="(a,i) in books">
						<div class="upper">
							<div class="zero"
							v-if="id!==1">
								<div style="clear:both"></div>
								<div class="flowers">
									<img class="img_" :src=" img+'/flowers.png' "/>
									<div class="chars">
										<div class="char">{{books.length>0?books[i].className[0]:'-'}}</div>
										<div class="char">{{books.length>0?books[i].className[1]:'-'}}</div>
										<div class="char">{{books.length>0?books[i].className[2]:'-'}}</div>
										<div class="char">{{books.length>0?books[i].className[3]:'-'}}</div>
									</div>
								</div>
								<div class="item__"
								v-for="(b,ii) in a.books.slice(0,2)"
								@click="act({type:'TO_BOOK',bid:b.bid})">
									<img class="cover" :src=" 'https://static.reader.qq.com/cover/'+b.bid%1000+'/'+b.bid+'/b_'+b.bid+'.jpg' ">
									<p class="title">{{b.title}}</p>
									<p class="author">{{b.author}}</p>
									<div class="discount"
									:style=" 'background:url('+img+'/discount.png);background-size:100% 100%;' ">
										{{id===2?'包月':discount}}
									</div>
								</div>
							</div>
							<scroller :act="act" 
							:img="img"
							:items="a.books.slice(0)"
							:discount="discount"
							v-if="id===1"></scroller>
						</div>
						<div class="lower">
							<div class="zero"
							v-if="id!==1">
								<div class="train__">
									<div class="item__"
									v-for="(b,ii) in a.books.slice(2)"
									@click="act({type:'TO_BOOK',bid:b.bid})">
										<img class="cover" :src=" 'https://static.reader.qq.com/cover/'+b.bid%1000+'/'+b.bid+'/b_'+b.bid+'.jpg' ">
										<p class="title">{{b.title}}</p>
										<p class="author">{{b.author}}</p>
										<div class="discount"
										:style=" 'background:url('+img+'/discount.png);background-size:100% 100%;' ">
											{{id===2?'包月':discount}}
										</div>
									</div>
								</div>
							</div>
							<!-- <scroller :act="act" :items="a.books.slice(5)"
							v-if="id===1"></scroller>	 -->
						</div>
					</div>

				</div>
<!-- 				<div class="nav">
					<a id="bb-nav-prev" class="bb-custom-icon bb-custom-icon-arrow-left">Previous</a>
					<a id="bb-nav-next" class="bb-custom-icon bb-custom-icon-arrow-right">Next</a>
				</div> -->
				
			</div>
		</div>
		<img class="bottom_pages" :src=" img+'/bottom_pages.png' "/>
		<div class="footer">
			<div class="footer-title"
			@click="click($event)">
				{{(books.length>0&&books.length-1>current)?books[current+1].className+' ':'更多好书单 '}}<img class="small_arrow" :src=" img+'/small_arrow.png' "/>
			</div>
			<div class="pageNo">
				{{current+1}}/{{books.length}}
			</div>
		</div>
	</div>
</template>

<style lang="less">
	.BookBlock {
		position: absolute; left: 0; top: 0;
		width: 100%; height: 100vh;
		background: #f5e2bc;
		z-index: 209;
		transition: transform 400ms;
		overflow: hidden;
		//display: none;
		&.leave {
			transform: translate3d(0,-150%,0);
		}
		.hand {
			position: absolute; left: 3.5rem; top: 6.7rem;
			width: 3rem;
			z-index: 9997;
			display: none;
			&.active {
				display: block;
				animation: shake 1s linear forwards 1;
			}
			@keyframes shake {
				0% {
					opacity: 0;
					transform: translate3d(0,0,0);
				}
				20% {
					opacity: 1;
					transform: translate3d(0,-20%,0);
				}
				80% {
					opacity: 1;
					transform: translate3d(0,-80%,0);
				}
				100% {
					opacity: 0;
					transform: translate3d(0,-100%,0);
				}
				/*
				50% {
					opacity: 1;
					transform: translate3d(0,100%,0);
				}
				75% {
					opacity: 1;
					transform: translate3d(0,0,0);
				}
				100% {
					opacity: 0;
					transform: translate3d(0,100%,0);
				}
				*/
			}
		}
		.header {
			width: 6.94rem; height: 1.55rem;
			margin: auto;
			overflow: hidden;
			.header-title_0 {
				margin-top: 0.52rem;
				margin-bottom: 0.18rem;
				line-height: 0.5rem;
				font-size: 0.34rem;
				text-align: center;
				span {
					color: #d74e5b;
					font-weight: bold;
				}
			}
			.header-title {
				margin-top: 0.37rem;
				margin-bottom: 0.18rem;
				line-height: 0.5rem;
				font-size: 0.34rem;
				text-align: center;
				span {
					color: #d74e5b;
					font-weight: bold;
				}
			}
			.bookClass {
				font-size: 0.28rem; color: #fff6e1;
				text-align: center;
			}
		}
		.upper {
			background: #fefaf2;
			.zero {
				//overflow: hidden;
				.flowers {
					position: relative;
					float: left;
					width: 2.33rem; height: 3.39rem;
					margin-top: 0.22rem;
					margin-right: 0.28rem;
					overflow: hidden;
					.img_ {
						width: 100%; height: 100%;
					}
					.chars {
						position: absolute;
						width: 0.74rem;
						left: 0.85rem; top: 0.28rem;
						.char {
							font-size: 0.3rem; color: #593a31;
							line-height: 0.62rem;
						}
					}
				}
				.item__ {
					position: relative;
					float: left;
					width: 1.68rem;
					margin-top: 0.53rem;
					&:nth-child(3) {
						margin-right: 0.55rem;
					}
					.discount {
						position: absolute; left: -0.05rem; top: 1.62rem;
						width: 0.87rem; height: 0.37rem;
						font-size: 0.26rem;
						font-weight: bold;
						line-height: 0.34rem;
						color: #c62c4a;
						text-align: left;
						text-indent: 0.14rem;
					}
					.cover {
						width: 1.68rem; height: 2.08rem;
						margin-bottom: 0.32rem;
					}
					.title {
						width: 100%;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						margin-bottom: 0.1rem;
						font-size: 0.28rem;
						text-align: left;
						color: #805447;
					}
					.author {
						width: 100%;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						font-size: 0.24rem;
						text-align: left;
						color: #c3a586;
					}
				}
			}
		}
		.lower {
			background: #fefaf2;
			.zero {
				padding-left: 0.4rem; padding-top: 0.44rem;
				overflow: hidden;
				.train__ {
					width: 200%;
					.item__ {
						position: relative;
						float: left;
						width: 1.68rem;
						margin-right: 0.55rem;
						//background: red;
						//overflow: hidden;
						.discount {
							position: absolute; left: -0.05rem; top: 1.62rem;
							width: 0.87rem; height: 0.37rem;
							font-size: 0.26rem;
							font-weight: bold;
							line-height: 0.34rem;
							color: #c62c4a;
							text-align: left;
							text-indent: 0.14rem;
						}
						.cover {
							width: 1.68rem; height: 2.08rem;
							margin-bottom: 0.32rem;
						}
						.title {
							width: 100%;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
							margin-bottom: 0.1rem;
							font-size: 0.28rem;
							text-align: left;
							color: #805447;
						}
						.author {
							width: 100%;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
							font-size: 0.24rem;
							text-align: left;
							color: #c3a586;
						}
					}
				}
			}
		}

		.bottom_pages {
			width: 6.73rem;
			margin: auto;
			margin-bottom: 0.58rem;
		}
		.upper-book {
			float: left;
			.title {
				font-size: 0.26rem;
			}
			.author {
				font-size: 0.26rem;
			}
		}

		.footer {
			position: absolute; left: 0; bottom: 0.1rem;
			width: 100%; height: 0.34rem;
			z-index: 120;
			.footer-title {
				display: table;
				margin: auto;
				line-height: 0.3rem;
				vertical-align: middle;
				font-size: 0.28rem; color: #805447;
				.small_arrow {
					display: inline-block;
					vertical-align: middle;
					line-height: 0.3rem;
					width: 0.20rem;
				}
			}
			.pageNo {
				position: absolute; right: 0.7rem; top: 0;
				font-size: 0.28rem; color: #805447;
			}
		}
	}
</style>

<script type="text/javascript">
	import './BookBlock.less';

	var bb;
	
	export default {
		props: {
			id: {},
			name: {},
			count: {},
			days: {},
			hasDiscount: {},
			discount: {},

			act: {},
			img: {},
			loggedIn: {},

			name: {},
			books: {},

			stage: {},
			current: {}
		},
		computed: {
		},
		components: {
			Scroller: require('./Scroller.vue')
		},
		data: function(){
			return {
				show: false,
				class_: '',

				initialized: false,
				hand: '',

				Y0: 0,
				Y2: 0
			}
		},
		watch: {
			stage: function(nv,ov){
				if( ov===1&&nv===2 ){
					this.class_ = 'leave';
				}else if( ov===2&&nv===1 ){
					this.class_ = '';
				}else if( ov===0&&nv===1 ){
					if( this.initialized===false ){
						//this.show = true;
						this.hand = 'active';
						this.initialized = true;
						setTimeout(()=>{
							this.hand = '';
						},4000)
					};
				}
			},
			current: function(nv,ov){
				if( nv>ov ){
					bb.next();
				}else{
					bb.prev();
				}
			},
			books: function(){
				setTimeout(()=>{
					bb = new BookBlock( document.querySelector('#bb-bookblock'), {
						orientation : 'horizontal',
						speed : 300
					} );
				},500);
			}
		},
		mounted: function(){
			// setTimeout(()=>{
				

				
			// 	// add navigation events
			// 	// document.querySelector('#bb-nav-next').addEventListener( 'click', function() {
			// 	// 	bb.next();
			// 	// 	return false;
			// 	// } );
			// 	// document.querySelector('#bb-nav-prev').addEventListener( 'click', function() {
			// 	// 	bb.prev();
			// 	// 	return false;
			// 	// } );
			// },500);
		},
		methods: {
			touchstart: function(e){
				e.stopPropagation();
				this.Y0 = e.changedTouches[0].pageY;
			},
			touchmove: function(e){
				e.stopPropagation();
				e.preventDefault();
			},
			touchend: function(e){
				//e.stopPropagation();
				this.Y2 = e.changedTouches[0].pageY;
				var distanceY = this.Y2 - this.Y0;
				
				this.act({
					type: 'SWITCH',
					direction: (function(){
						if( distanceY>3 ){
							return 'down';
						}else if( distanceY<-3 ){
							return 'up';
						}else{
							return 'do nothing';
						};
					})()
				});

			},
			click: function(e){
				e.stopPropagation();
				//this.act({type:'SWITCH',direction:'up'})
			}
		}
	}
</script>